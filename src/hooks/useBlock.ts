import { useContext } from 'react'
import { Context } from '../contexts/RefreshProvider'

export const useBlock = () => {
  const { block } = useContext(Context)

  return block
}

export const useRefresh = () => {
  const { fast, slow } = useContext(Context)
  return { fastRefresh: fast, slowRefresh: slow }
}
