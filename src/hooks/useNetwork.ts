import { ChainId } from '@pancakeswap-libs/sdk'
import { useCallback } from 'react'

const NETWORKS = {
  [ChainId.HECO_MAINNET]: {
    rpc: 'https://http-mainnet-node.huobichain.com',
    explorer: 'https://hecoinfo.com'
  },
  [ChainId.OEC_MAINNET]: {
    rpc: 'https://exchainrpc.okex.org/',
    explorer: 'https://www.oklink.com/okexchain'
  }
}
export const useSwitchNetwork = () => {
  return useCallback(async (destChainId: number) => {
    const networkId = destChainId === ChainId.HECO_MAINNET ? 'heco-mainnet' : 'oec-mainnet'
    const nativeCurrency =
      destChainId === ChainId.HECO_MAINNET
        ? {
            name: 'HT',
            Symbol: 'HT',
            decimals: 18
          }
        : {
            name: 'OKT',
            Symbol: 'OKT',
            decimals: 18
          }
    return new Promise(async (resolve, reject) => {
      try {
        const data = [
          {
            chainId: `0x${destChainId?.toString(16)}`,
            chainName: networkId,
            nativeCurrency: nativeCurrency,
            rpcUrls: [NETWORKS[destChainId].rpc],
            blockExplorerUrls: [NETWORKS[destChainId].explorer]
          }
        ]
        await window?.ethereum?.request({ method: 'wallet_addEthereumChain', params: data })
        resolve(true)
      } catch (err) {
        reject(err)
      }
    })
  }, [])
}
