import JSBI from 'jsbi'

import { ChainId, SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly ETHER: Currency = new Currency(18, 'HT', 'HUOBI')
  public static readonly HT: Currency = new Currency(18, 'HT', 'HUOBI')
  public static readonly OKT: Currency = new Currency(18, 'OKT', 'OKEX')
  public static readonly MATIC: Currency = new Currency(18, 'MATIC', 'POLYGON')

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }
}

const ETHER = (chainId: ChainId) => {
  if (chainId === ChainId.HECO_MAINNET) return Currency.HT
  if (chainId === ChainId.OEC_MAINNET) return Currency.OKT
  if (chainId === ChainId.POLYGON) return Currency.MATIC
  return Currency.HT
}

const HT = Currency.HT
const OKT = Currency.OKT
const MATIC = Currency.MATIC
export { ETHER, HT, OKT, MATIC }
