import React, { useState, useEffect } from 'react'
import { getWeb3NoAccount } from '../utils/web3'

const BLOCK_INTERVAL = 6000
const FAST_INTERVAL = 10000
const SLOW_INTERVAL = 10000

export const Context = React.createContext({ slow: 0, fast: 0, block: 0 })
interface Props {
  children: React.ReactNode
}
// This context maintain 2 counters that can be used as a dependencies on other hooks to force a periodic refresh
const RefreshContextProvider = ({ children }: Props) => {
  const [slow, setSlow] = useState(0)
  const [fast, setFast] = useState(0)
  const [block, setBlock] = useState(0)

  useEffect(() => {
    const interval = setInterval(async () => {
      setFast(prev => prev + 1)
    }, FAST_INTERVAL)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(async () => {
      setSlow(prev => prev + 1)
    }, SLOW_INTERVAL)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const web3 = getWeb3NoAccount()
    const interval = setInterval(async () => {
      const latestBlockNumber = await web3.eth.getBlockNumber()
      setBlock(block => {
        return block !== latestBlockNumber ? latestBlockNumber : block
      })
    }, BLOCK_INTERVAL)

    return () => clearInterval(interval)
  }, [])

  return <Context.Provider value={{ slow, fast, block }}>{children}</Context.Provider>
}

export default RefreshContextProvider
