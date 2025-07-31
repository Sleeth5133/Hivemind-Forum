import { ethers } from 'ethers'
import { SiweMessage } from 'siwe'

export async function signInWithEthereum() {
  if (!window.ethereum) throw new Error('No wallet detected')

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send('eth_requestAccounts', [])
  const signer = provider.getSigner()
  const address = await signer.getAddress()

  const siwe = new SiweMessage({
    domain: window.location.host,
    address,
    statement: "Welcome to HiveMind Forum 🐝",
    uri: window.location.origin,
    version: '1',
    chainId: 80001,
  })

  const signature = await signer.signMessage(siwe.prepareMessage())
  return { address, signature, siwe }
}