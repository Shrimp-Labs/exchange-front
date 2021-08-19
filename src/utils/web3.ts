import Web3 from 'web3'
import { HttpProviderOptions } from 'web3-core-helpers'
import { NETWORK_CHAIN_ID } from '../connectors'
import { NERWORK_URLS } from '../constants'

const httpProvider = new Web3.providers.HttpProvider(NERWORK_URLS[NETWORK_CHAIN_ID], {
  timeout: 10000
} as HttpProviderOptions)
const web3NoAccount = new Web3(httpProvider)

const getWeb3NoAccount = () => {
  return web3NoAccount
}

export { getWeb3NoAccount, httpProvider }
export default web3NoAccount
