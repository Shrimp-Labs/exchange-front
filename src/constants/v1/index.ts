import { Interface } from '@ethersproject/abi'
import { ChainId } from '@pancakeswap-libs/sdk'
import V1_EXCHANGE_ABI from './v1_exchange.json'
import V1_FACTORY_ABI from './v1_factory.json'

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.HECO_MAINNET]: '0xC07d4604400139108BbdB3076636365A385879eF', //TODO
  [ChainId.HECO_TESTNET]: '0xBe4AB2603140F134869cb32aB4BC56d762Ae900B',
  [ChainId.OEC_MAINNET]: '0xC07d4604400139108BbdB3076636365A385879eF' //TODO
}

const V1_FACTORY_INTERFACE = new Interface(V1_FACTORY_ABI)
const V1_EXCHANGE_INTERFACE = new Interface(V1_EXCHANGE_ABI)

export { V1_FACTORY_ADDRESSES, V1_FACTORY_INTERFACE, V1_FACTORY_ABI, V1_EXCHANGE_INTERFACE, V1_EXCHANGE_ABI }
