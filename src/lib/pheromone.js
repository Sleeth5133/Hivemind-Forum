export function calculatePheromone(thread) {
  let signal = 0
  signal += (thread.upvotes || 0) * 1.0
  signal += (thread.replies || 0) * 2.0
  signal += (thread.views || 0) * 0.1
  signal += (thread.timeSpent || 0) * 0.05

  if (thread.upvoteSources) {
    thread.upvoteSources.forEach(v => {
      const weight = Math.max(0.5, Math.min(3.0, (v.pollen || 1) / 100))
      signal += 1.0 * weight
    })
  }

  const hoursOld = (Date.now() - thread.timestamp) / (1000 * 60 * 60)
  const decay = Math.pow(0.5, hoursOld / 12)
  signal *= decay

  if (thread.recentGrowthRate > 0.5) signal *= 1.3

  return parseFloat(signal.toFixed(2))
}

export function rankThreads(threads) {
  return threads
    .map(t => ({ ...t, pheromone: calculatePheromone(t) }))
    .sort((a, b) => b.pheromone - a.pheromone)
}