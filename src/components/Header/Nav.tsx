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
      <StyledAbsoluteLink href="https://app.pippi.finance/auto">
        LockDrop
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
      {/* <StyledAbsoluteLink href="https://app.pippi.finance/ido">
        Initial Sale
      </StyledAbsoluteLink> */}
      <StyledAbsoluteLink href="https://info.pippi.finance" target="_blank">
        <TranslatedText translationId={262}>Analytics</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://voting.pippi.finance" target="_blank">
        <TranslatedText translationId={284}>Voting</TranslatedText>
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 14px;
  font-weight: 700;
`

const StyledAbsoluteLink = styled.a`
  position: relative;
  color: rgb(127, 134, 143);
  margin-right: 24px;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.primary}
  }
  @media (max-width: 400px) {
    margin-right: 24px;
  }
`
export default Nav
