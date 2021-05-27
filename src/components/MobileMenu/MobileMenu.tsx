import React from 'react'
import styled, { keyframes } from 'styled-components'

import { NavLink } from 'react-router-dom'
import TranslatedText from '../TranslatedText'
import LngSwith from '../Header/LngSwith'
import useHTPrice from '../../hooks/useHtPrice'
import { useActiveWeb3React } from '../../hooks'

interface MobileMenuProps {
  onDismiss: () => void
  visible?: boolean
}

// eslint-disable-next-line react/prop-types
const MobileMenu: React.FC<MobileMenuProps> = ({ onDismiss, visible }) => {
  const { pippiPrice } = useHTPrice()
  const { account } = useActiveWeb3React()
  if (visible) {
    return (
      <StyledMobileMenuWrapper>
        <StyledBackdrop onClick={onDismiss} />
        <StyledMobileMenu>
          <Bg></Bg>
          <Cn>
            <StyledAbsoluteLink href="https://app.pippi.finance">
              <TranslatedText translationId={130}>Home</TranslatedText>
            </StyledAbsoluteLink>
          </Cn>
          <Cn>
            <StyledAbsoluteLink href="https://app.pippi.finance/farms">
              <TranslatedText translationId={112}>Farm</TranslatedText>
            </StyledAbsoluteLink>
          </Cn>
          <Cn>
            <StyledAbsoluteLink href="https://app.pippi.finance/staking">
              <TranslatedText translationId={114}>Staking</TranslatedText>
            </StyledAbsoluteLink>
          </Cn>
          <Cn>
            <StyledAbsoluteLink href="https://app.pippi.finance/xpipi">
              <TranslatedText translationId={132}>xPIPI Pools</TranslatedText>
            </StyledAbsoluteLink>
          </Cn>
          <Cn>
            <StyledLink className="active" to="/">
              <TranslatedText translationId={116}>Exchange</TranslatedText>
            </StyledLink>
          </Cn>
          <Cn>
            <StyledAbsoluteLink href="https://app.pippi.finance/nft">
              <TranslatedText translationId={258}>NFT</TranslatedText>
            </StyledAbsoluteLink>
          </Cn>
          <Cn>
            <StyledAbsoluteLink href="https://app.pippi.finance/ido">
              Initial Sale
            </StyledAbsoluteLink>
          </Cn>
          <Cn>
            <StyledAbsoluteLink href="https://info.pippi.finance" target="_blank">
              <TranslatedText translationId={262}>Analytics</TranslatedText>
            </StyledAbsoluteLink>
          </Cn>
          <Cn>
            <StyledAbsoluteLink href="https://voting.pippi.finance" target="_blank">
              <TranslatedText translationId={284}>Voting</TranslatedText>
            </StyledAbsoluteLink>
          </Cn>
          <Bottom>
            {account && <Price className="number">1PIPI= ${pippiPrice.toFixed(3)}</Price>}
            <LngSwith className="mobile-lng-swith"></LngSwith>
          </Bottom>
        </StyledMobileMenu>
      </StyledMobileMenuWrapper>
    )
  }
  return null
}

const Bottom = styled.div`
  position: absolute;
  left: 0;
  z-index: 1000;
  width: 80%;
  bottom: 30px;
  right: 0;
  margin: auto;
  text-align: center;
  .mobile-lng-swith {
    width:100%;
    height: 30px;
    line-height: 30px;
    margin-bottom: 20px;
  }
`

const Bg = styled.div`
  position: absolute;
  right: 0;
  width: 70%;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background: url(${require('../../assets/images/mobile-menu-bg.png')});
  background-size: contain;
  transform: rotate(180deg);
`
const StyledBackdrop = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.bg5};
`

const StyledMobileMenuWrapper = styled.div`
  position: fixed;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
`

const slideIn = keyframes`
  0% {
    transform: translateX(0)
  }
  100% {
    transform: translateX(100%);
  }
`

const StyledMobileMenu = styled.div`
  animation: ${slideIn} 0.3s forwards ease-out;
  background-color: ${(props) => props.theme.colors.bg1};
  border-left: 1px solid ${(props) => props.theme.colors.bg1};
  position: absolute;
  top: 0;
  right: 100%;
  bottom: 0;
  width: calc(100% - 130px);
  padding-top: 24px;
`

const StyledLink = styled(NavLink)`
  position: relative;
  box-sizing: border-box;
  color: rgb(127,134,143);
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  text-decoration: none;
  &.active {
    color: ${(props) => props.theme.colors.red3};
  }
`
const StyledAbsoluteLink = styled.a`
  position: relative;
  color: rgb(127,134,143);
  font-weight: 700;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.red3};
  }
  &.active {
    color: ${(props) => props.theme.colors.red3};
  }
`
const Cn = styled.div`
  margin: 24px 24px 0 24px;
`
const Price = styled.div`
  width: 100%;
  padding-top: 22px;
  padding-bottom: 10px;
  color: ${props => props.theme.colors.primary};
  text-align: left;
  font-weight: bolder;
`
export default MobileMenu
