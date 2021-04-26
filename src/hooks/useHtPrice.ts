import { useContext } from 'react'
import { Context } from '../contexts/PriceProvider'

const useHTPrice = () => {
  const { htPrice, pippiPrice } = useContext(Context)
  return {
    htPrice,
    pippiPrice
  }
}

export default useHTPrice
