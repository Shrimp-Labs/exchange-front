import React from 'react'
import styled from 'styled-components'
import Modal from '../Modal'
import { ReactComponent as Close } from '../../assets/images/x.svg'

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
`

export const NetworkSwitchModal = () => {
  return (
    <Modal
      isOpen={false}
      onDismiss={() => {
        console.log('te')
      }}
      minHeight={false}
      maxHeight={90}
    >
      <Wrapper>
        <HeaderRow>Select Network</HeaderRow>
        <ContentWrapper>
          <NetworkItem>Heco</NetworkItem>
          <NetworkItem>OEC</NetworkItem>
        </ContentWrapper>
        <CloseIcon>
          <CloseColor />
        </CloseIcon>
      </Wrapper>
    </Modal>
  )
}
