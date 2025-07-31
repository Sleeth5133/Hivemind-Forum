module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hive: {
          amber: '#FFB300',
          gold: '#D4A017',
          black: '#121212',
          wax: '#F9F5EB',
          guard: '#C2185B'
        }
      },
      gridTemplateColumns: {
        honeycomb: 'repeat(auto-fit, minmax(280px, 1fr))'
      }
    }
  },
  plugins: []
}