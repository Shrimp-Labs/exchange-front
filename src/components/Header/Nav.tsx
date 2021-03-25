import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledAbsoluteLink href="https://pippi.finance/farms">
        <TranslatedText translationId={112}>Farm</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://pippi.finance/staking">
        <TranslatedText translationId={113}>Staking</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://pippi.finance/syrup">
        <TranslatedText translationId={132}>xPIPI Pools</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://exchange.pippi.finance" className="active">
        <TranslatedText translationId={116}>Exchange</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://docs.pippi.finance" target="_blank">
        <TranslatedText translationId={115}>Docs</TranslatedText>
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 20px;
  line-height: 45px;
  font-weight: 500;
  @media (max-width: 600px) {
    display: none;
  }
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
