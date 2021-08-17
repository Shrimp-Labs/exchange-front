import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.HECO_MAINNET]: '0x8dd2f8105Dbaf80821fC5085EBa50Ca7927C6bdf', // TODO
  [ChainId.HECO_TESTNET]: '0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A',
  [ChainId.OEC_MAINNET]: '0x9c3bc898fdD0651351ec911b22f69dF7D21BdE8f'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
