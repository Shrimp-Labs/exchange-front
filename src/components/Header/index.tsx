import { ChainId } from '@pancakeswap-libs/sdk'
import React, {useCallback, useState} from 'react'
import { isMobile } from 'react-device-detect'
// import { Text } from 'rebass'

import styled from 'styled-components'

import { useActiveWeb3React } from '../../hooks'
// import { useETHBalances } from '../../state/wallet/hooks'

import { YellowCard } from '../Card'
import Settings from '../Settings'
// import LanguageSelectMenu from './LanguageSelectMenu'
import LngSwith from './LngSwith'
import Nav from './Nav'
// import ThemeSwitch from './ThemeSwitch'
import { useIsDarkMode } from '../../state/user/hooks'

import Web3Status from '../Web3Status'
import Logo from './Logo'
import menuIcon from '../../assets/images/menu-light.png'
import MobileMenu from '../MobileMenu'

const HeaderFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: 2;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding: 12px 0 0 0;
    width: calc(100%);
    position: relative;
  `};
`
const Menu = styled.div`
  display: none;
  img {
    display: block;
    width: 36px;
  }
  @media (max-width: 850px) {
    display: block;
  }
`
const HeaderElement = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 320px) {
    width: 20%;
  }
`

const HeaderControlsMobile = styled.div`
  display: flex;
  width: 80px;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.colors.bg1 : theme.colors.bg3)};
  border-radius: 12px;
  white-space: nowrap;
  width: 100%;

  :focus {
    border: 1px solid blue;
  }
`

const TestnetWrapper = styled.div`
  white-space: nowrap;
  width: fit-content;
  margin-left: 10px;
  pointer-events: auto;
`

const NetworkCard = styled(YellowCard)`
  width: fit-content;
  margin-right: 10px;
  border-radius: 12px;
  padding: 8px 12px;
`

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
  `};
`

// const BalanceText = styled(Text)`
//   ${({ theme }) => theme.mediaWidth.upToExtraSmall`
//     display: none;
//   `};
// `

const NETWORK_LABELS: { [chainId in ChainId]: string | null } = {
  [ChainId.MAINNET]: null,
  [ChainId.TESTNET]: 'testnet'
}

const StyledTopBarInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: ${(props) => props.theme.siteWidth};
  min-width: ${(props) => props.theme.siteWidth};
  width: 100%;
  padding: 0 20px;
  @media (max-width: 850px) {
    min-width: auto;
  }
`

export default function Header() {
  const isDark = useIsDarkMode()
  const { account, chainId } = useActiveWeb3React()
  // const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']
  const [mobileMenu, setMobileMenu] = useState(false)
  const handlePresentMobileMenu = useCallback(() => {
    setMobileMenu(true)
  }, [setMobileMenu])
  const handleDismissMobileMenu = useCallback(() => {
    setMobileMenu(false)
  }, [setMobileMenu])
  return (
    <HeaderFrame>
      <StyledTopBarInner>
        <HeaderElement>
          <Title href="https://app.pippi.finance/">
          <Logo isDark={isDark} />
          </Title>
        </HeaderElement>
        {isMobile && (
          <HeaderControlsMobile>
            <Menu onClick={handlePresentMobileMenu}>
              <img src={menuIcon} alt="menu" />
            </Menu>
            {/* <LngSwith /> */}
            {/* <ThemeSwitch /> */}
            <Settings />
          </HeaderControlsMobile>
        )}
        {!isMobile && <Nav />}
        {!isMobile && (
          <HeaderControls>
            {/* <ThemeSwitch /> */}
            <LngSwith />
            <HeaderElement>
              <TestnetWrapper>
                {!isMobile && chainId && NETWORK_LABELS[chainId] && (
                  <NetworkCard>{NETWORK_LABELS[chainId]}</NetworkCard>
                )}
              </TestnetWrapper>
              <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
                {/* {account && userEthBalance ? (
                  <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                    {userEthBalance?.toSignificant(4)} HT
                  </BalanceText>
                ) : null} */}
                <Web3Status />
              </AccountElement>
            </HeaderElement>
            <Settings />
          </HeaderControls>
        )}
        <MobileMenu onDismiss={handleDismissMobileMenu} visible={mobileMenu} />
      </StyledTopBarInner>
    </HeaderFrame>
  )
}
