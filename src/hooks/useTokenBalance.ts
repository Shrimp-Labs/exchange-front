import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useActiveWeb3React } from '../hooks'

import { getBalance } from '../utils/erc20'
import { useRefresh } from '../hooks/useBlock'
import { getWeb3NoAccount } from '../utils/web3'

const useTokenBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account } = useActiveWeb3React()
  const { slowRefresh } = useRefresh()
  const web3 = getWeb3NoAccount()
  const fetchBalance = useCallback(async () => {
    const balance = await getBalance(web3, tokenAddress, account)
    setBalance(new BigNumber(balance))
  }, [account, web3, tokenAddress])

  useEffect(() => {
    if (account && web3) {
      fetchBalance()
    }
  }, [account, fetchBalance, web3, setBalance, slowRefresh, tokenAddress])

  return balance
}


export default useTokenBalance
