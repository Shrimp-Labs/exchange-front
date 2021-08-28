import { CurrencyAmount, ETHER, JSBI } from '@pancakeswap-libs/sdk'
import { NETWORK_CHAIN_ID } from '../connectors'
import { MIN_ETH } from '../constants'

/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 */
export function maxAmountSpend(currencyAmount?: CurrencyAmount): CurrencyAmount | undefined {
  if (!currencyAmount) return undefined
  if (currencyAmount.currency === ETHER(NETWORK_CHAIN_ID)) {
    if (JSBI.greaterThan(currencyAmount.raw, MIN_ETH)) {
      return CurrencyAmount.ether(JSBI.subtract(currencyAmount.raw, MIN_ETH), NETWORK_CHAIN_ID)
    } else {
      return CurrencyAmount.ether(JSBI.BigInt(0), NETWORK_CHAIN_ID)
    }
  }
  return currencyAmount
}
