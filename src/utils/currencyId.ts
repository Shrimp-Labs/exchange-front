import { Currency, ETHER, Token } from '@pancakeswap-libs/sdk'
import { NETWORK_CHAIN_ID } from '../connectors'

export function currencyId(currency: Currency): string {
  if (currency === ETHER(NETWORK_CHAIN_ID)) return 'ETH'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
