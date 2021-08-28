import React from 'react'
import styled from 'styled-components'
import Modal from '../Modal'
import { ReactComponent as Close } from '../../assets/images/x.svg'
import { useNetworkModalOpen, useNetworkModalToggle } from '../../state/application/hooks'
import HuobiLogo from '../../assets/images/huobi-logo.png'
import OkLogo from '../../assets/images/ok-logo.png'
import { useSwitchNetwork } from '../../hooks/useNetwork'
import { ChainId } from '@pancakeswap-libs/sdk'

const Wrapper = styled.div`
  ${({ theme }) => theme.flexColumnNoWrap}
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
`

const HeaderRow = styled.div`
  ${({ theme }) => theme.flexRowNoWrap};
  padding: 1rem 1rem;
  font-weight: 500;
  position: relative;
  color: ${props => (props.color === 'blue' ? ({ theme }) => theme.colors.primary1 : 'inherit')};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 1rem;
  `};
`

const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg2};
  padding: 2rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  ${({ theme }) => theme.mediaWidth.upToMedium`padding: 1rem`};
`

const CloseIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 14px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

const CloseColor = styled(Close)`
  path {
    stroke: ${({ theme }) => theme.colors.text4};
  }
`

const NetworkItem = styled.div`
  padding: 10px;
  background: #f5f3f3;
  text-align: center;
  border: 1px solid #51ccc5;
  border-radius: 12px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-right: 10px;
  }
`

const StyledEthereumLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`

export const NetworkSwitchModal = () => {
  const networkModalOpen = useNetworkModalOpen()
  const switchNetwork = useSwitchNetwork()
  const toggleNetworkModal = useNetworkModalToggle()
  return (
    <Modal
      isOpen={networkModalOpen}
      onDismiss={() => {
        console.log('te')
      }}
      minHeight={false}
      maxHeight={90}
    >
      <Wrapper>
        <HeaderRow>Select Network</HeaderRow>
        <ContentWrapper>
          <NetworkItem onClick={() => switchNetwork(ChainId.HECO_MAINNET)}>
            <StyledEthereumLogo src={HuobiLogo} size="24px" />
            Heco
          </NetworkItem>
          <NetworkItem onClick={() => switchNetwork(ChainId.OEC_MAINNET)}>
            <StyledEthereumLogo src={OkLogo} size="24px" />
            OEC
          </NetworkItem>
        </ContentWrapper>
        <CloseIcon onClick={toggleNetworkModal}>
          <CloseColor />
        </CloseIcon>
      </Wrapper>
    </Modal>
  )
}
