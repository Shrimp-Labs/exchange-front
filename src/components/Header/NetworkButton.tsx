import { ChainId } from '@pancakeswap-libs/sdk'
import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { NERWORK_URLS } from '../../constants'
import { useActiveWeb3React } from '../../hooks'
import { useNetworkModalToggle } from '../../state/application/hooks'
import { NetworkSwitchModal } from './NetworkSwitchModal'

const Container = styled.div`
  background: #51ccc5;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  font-size: 14px;
  height: 40px;
  padding: 0 20px;
  margin: 0 10px;
  cursor: pointer;
`

export const NetworkButton = () => {
  const { chainId } = useActiveWeb3React()
  const toggleNetworkModal = useNetworkModalToggle()
  const displayNetwork = useMemo(() => {
    if (chainId === 128) {
      return 'HECO'
    }
    if (chainId === 66) {
      return 'OEC'
    }
    if (chainId === 137) {
      return 'Polygon'
    }
  }, [chainId])

  useEffect(() => {
    window.ethereum?.on('chainChanged', _chainId => {
      const chainId = Number(_chainId)
      if (chainId !== ChainId.HECO_MAINNET && chainId !== ChainId.OEC_MAINNET && chainId !== ChainId.POLYGON) return
      console.log(chainId)
      window.localStorage.setItem('chainId', chainId.toString())
      window.localStorage.setItem('networkUrl', NERWORK_URLS[chainId])
      window.location.reload()
    })
  }, [])

  return (
    <>
      <Container onClick={toggleNetworkModal}>{displayNetwork}</Container>
      <NetworkSwitchModal />
    </>
  )
}
