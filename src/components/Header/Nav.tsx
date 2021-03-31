import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledAbsoluteLink href="https://app.pippi.finance/farms">
        <TranslatedText translationId={112}>Farm</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://app.pippi.finance/staking">
        <TranslatedText translationId={114}>Staking</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://app.pippi.finance/xpipi">
        <TranslatedText translationId={132}>xPIPI Pools</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://swap.pippi.finance/" className="active">
        <TranslatedText translationId={116}>Exchange</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://app.pippi.finance/nft">
        <TranslatedText translationId={258}>NFT</TranslatedText>
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 700;
`

const StyledAbsoluteLink = styled.a`
  position: relative;
  color: ${(props) => props.theme.colors.normal};
  margin-left: 16px;
  margin-right: 16px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.red3};
    &::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background: ${(props) => props.theme.colors.red3};
    }
  }
  &.active {
    color: ${(props) => props.theme.colors.red3};
    &::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background: ${(props) => props.theme.colors.red3};
    }
  }
  @media (max-width: 400px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`
export default Nav
