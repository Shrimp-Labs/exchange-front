import { AbiItem } from 'web3-utils'
import ERC20ABI from '../constants/abis/erc20.json'

export const getContract = (library: any, address: string) => {
  const contract = new library.eth.Contract((ERC20ABI as unknown) as AbiItem, address)
  return contract
}

export const getBalance = async (library: any, tokenAddress: string, userAddress: string): Promise<string> => {
  const lpContract = getContract(library, tokenAddress)
  try {
    const balance: string = await lpContract.methods.balanceOf(userAddress).call()
    return balance
  } catch (e) {
    return '0'
  }
}
