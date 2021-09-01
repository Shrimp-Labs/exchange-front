import hecoDefaultTokenList from './pippiswap.json'
import oecDefaultTokenList from './pipiswap_oec.json'
import polygonDefaultTokenList from './pippiswap_polygon.json'
import { ChainId, Token } from '@pancakeswap-libs/sdk'
import { NETWORK_CHAIN_ID } from '../../connectors'

export const defaultTokenList = () => {
  if (NETWORK_CHAIN_ID === ChainId.HECO_MAINNET) {
    return hecoDefaultTokenList
  }

  if (NETWORK_CHAIN_ID === ChainId.OEC_MAINNET) {
    return oecDefaultTokenList
  }

  if (NETWORK_CHAIN_ID === ChainId.POLYGON) {
    return polygonDefaultTokenList
  }
}

export const pinnedPairs = () => {
  if (NETWORK_CHAIN_ID === ChainId.HECO_MAINNET) {
    return [
      new Token(NETWORK_CHAIN_ID, '0xaaae746b5e55d14398879312660e9fde07fbc1dc', 18, 'PIPI', 'PIPI SHRIMP Token'),
      new Token(NETWORK_CHAIN_ID, '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f', 18, 'WHT', 'Wrapped HT')
    ]
  }

  if (NETWORK_CHAIN_ID === ChainId.OEC_MAINNET) {
    return [
      new Token(NETWORK_CHAIN_ID, '0xFdfBC559953557F5442eee7c4bA4AEDc1156caE3', 18, 'PIPI', 'PIPI SHRIMP Token'),
      new Token(NETWORK_CHAIN_ID, '0x8f8526dbfd6e38e3d8307702ca8469bae6c56c15', 18, 'WOKT', 'Wrapped OKT')
    ]
  }

  if (NETWORK_CHAIN_ID === ChainId.POLYGON) {
    return [
      new Token(NETWORK_CHAIN_ID, '0x1732477eDd2C494c596570A63cb1D8BDd0a8c40D', 18, 'PIPI', 'PIPI SHRIMP Token'),
      new Token(NETWORK_CHAIN_ID, '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', 18, 'WMATIC', 'Wrapped MATIC')
    ]
  }
}

export const pinnedStableCoinPairs = () => {
  if (NETWORK_CHAIN_ID === ChainId.HECO_MAINNET) {
    return [
      new Token(ChainId.HECO_MAINNET, '0x0298c2b32eae4da002a15f36fdf7615bea3da047', 8, 'HUSD', 'Heco-Peg HUSD Token'),
      new Token(
        ChainId.HECO_MAINNET,
        '0xa71edc38d189767582c38a3145b5873052c3e47a',
        18,
        'USDT',
        'Heco-Peg USDTHECO Token'
      )
    ]
  }

  if (NETWORK_CHAIN_ID === ChainId.OEC_MAINNET) {
    return [
      new Token(ChainId.OEC_MAINNET, '0xdcac52e001f5bd413aa6ea83956438f29098166b', 18, 'USDK', 'OEC-Peg USD Token'),
      new Token(ChainId.OEC_MAINNET, '0x382bb369d343125bfb2117af9c149795c6c65c50', 18, 'USDT', 'OEC-Peg USDT Token')
    ]
  }

  if (NETWORK_CHAIN_ID === ChainId.POLYGON) {
    return [
      new Token(ChainId.POLYGON, '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', 6, 'USDC', 'USD Coin'),
      new Token(ChainId.POLYGON, '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', 6, 'USDT', 'OEC-Peg USDT Token')
    ]
  }
}
