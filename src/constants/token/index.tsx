import hecoDefaultTokenList from './pippiswap.json'
import oecDefaultTokenList from './pipiswap_oec.json'
import { ChainId, Token } from '@pancakeswap-libs/sdk'
import { NETWORK_CHAIN_ID } from '../../connectors'

export const defaultTokenList = () => {
  if (NETWORK_CHAIN_ID === ChainId.HECO_MAINNET) {
    return hecoDefaultTokenList
  }

  if (NETWORK_CHAIN_ID === ChainId.OEC_MAINNET) {
    return oecDefaultTokenList
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
}
