import React, { createContext, useEffect, useState, useCallback } from 'react'
import BigNumber from 'bignumber.js'
import multicall from '../utils/multicall'
import erc20 from '../constants/abis/erc20.json'
import { getBalanceNumber } from '../utils/formatBalance'
import { useBlock } from '../hooks/useBlock'

export interface PriceContext {
  htPrice: number
  pippiPrice: number
}

export const Context = createContext<PriceContext>({
  htPrice: 0,
  pippiPrice: 0
})

const PriceProvider: React.FC = ({ children }) => {
  const block = useBlock()
  const [price, setPrice] = useState({
    htPrice: 0,
    pippiPrice: 0
  })

  const fetchBalance = useCallback(async () => {
    const calls = [
      {
        address: '0x0298c2b32eae4da002a15f36fdf7615bea3da047',
        name: 'balanceOf',
        params: ['0x2129e956d7157ffbcfa65abbab3c66c9456dba0d'],
      },
      {
        address: '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f',
        name: 'balanceOf',
        params: ['0x2129e956d7157ffbcfa65abbab3c66c9456dba0d'],
      },
      {
        address: '0xaaae746b5e55d14398879312660e9fde07fbc1dc',
        name: 'balanceOf',
        params: ['0xf9783240ecc6126727a43ff43316d932e942fc3a']
      },
      {
        address: '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f',
        name: 'balanceOf',
        params: ['0xf9783240ecc6126727a43ff43316d932e942fc3a'],
      }
    ]
    try {
      const [busd, bnb0, cake, bnb1] = await multicall(erc20, calls)
      const htPrice = getBalanceNumber(new BigNumber(busd), 8) / getBalanceNumber(new BigNumber(bnb0))
      const cakebnb = getBalanceNumber(new BigNumber(bnb1)) / getBalanceNumber(new BigNumber(cake))
      const pippiPrice = cakebnb * htPrice
      setPrice({
        htPrice,
        pippiPrice
      })
    } catch (error) {
      console.log('error..', error)
    }
  }, [])

  useEffect(() => {
    fetchBalance()
  }, [setPrice, block, fetchBalance])

  return <Context.Provider value={{ ...price }}>{children}</Context.Provider>
}

export default PriceProvider
