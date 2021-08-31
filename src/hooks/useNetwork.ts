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
  },
  [ChainId.POLYGON]: {
    rpc: 'https://rpc-mainnet.maticvigil.com/',
    explorer: 'https://polygonscan.com/'
  }
}

const NETWORK_NAME_MAPPING = {
  [ChainId.HECO_MAINNET]: 'heco-mainnet',
  [ChainId.OEC_MAINNET]: 'oec-mainnet',
  [ChainId.POLYGON]: 'polygon'
}

const NATIVE_CURRENCY_MAPPING = {
  [ChainId.HECO_MAINNET]: {
    name: 'HT',
    Symbol: 'HT',
    decimals: 18
  },
  [ChainId.OEC_MAINNET]: {
    name: 'OKT',
    Symbol: 'OKT',
    decimals: 18
  },
  [ChainId.POLYGON]: {
    name: 'MATIC',
    Symbol: 'MATIC',
    decimals: 18
  }
}

export const useSwitchNetwork = () => {
  return useCallback(async (destChainId: number) => {
    const networkId = NETWORK_NAME_MAPPING[destChainId]
    const nativeCurrency = NATIVE_CURRENCY_MAPPING[destChainId]

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
