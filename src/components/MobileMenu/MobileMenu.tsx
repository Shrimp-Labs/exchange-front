import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { ReactComponent as ArrowRight } from '../../assets/images/arrow-right.svg'
import ImageLogo from '../../assets/images/logo.png'
import ImageClose from '../../assets/images/close.png'
import ImageNavBack from '../../assets/images/nav-back.png'

import { useI18n } from '../../i18n/i18n-react'
import LngSwith from '../Header/LngSwith'
import useHTPrice from '../../hooks/useHtPrice'
import { useActiveWeb3React } from '../../hooks'

interface MobileMenuProps {
  onDismiss: () => void
  visible?: boolean
}

const views = {
  root: [
    {
      to: '/',
      label: 'Exchange',
      i18nKey: 'nav-exchange',
    },
    {
      label: 'Mining',
      i18nKey: 'nav-mining',
      view: 'mining',
    },
    {
      label: 'Tool',
      i18nKey: 'nav-tool',
      view: 'tool',
    },
    {
      label: 'More',
      i18nKey: 'nav-more',
      view: 'more',
    },
  ],
  mining: [
    {
      label: 'Liquidity Mining',
      i18nKey: 'nav-liquidity-mining',
      to: 'https://app.pippi.finance/farms',
    },
    {
      label: 'Staking Mining',
      i18nKey: 'nav-staking-mining',
      to: 'https://app.pippi.finance/staking',
    },
    {
      label: 'xPIPI Pool',
      i18nKey: 'nav-xpipi-pool',
      to: 'https://app.pippi.finance/xpipi',
    },
    {
      label: 'LockDrop',
      i18nKey: 'nav-lockDrop',
      to: 'https://app.pippi.finance/auto',
    },
  ],
  tool: [
    {
      label: 'Voting',
      i18nKey: 'nav-voting',
      to: 'https://voting.pippi.finance',
      target: '_blank',
    },
    {
      label: 'Analytics',
      i18nKey: 'nav-analytics',
      to: 'https://info.pippi.finance',
      target: '_blank',
    },
    {
      label: 'NFT',
      i18nKey: '',
      to: 'https://app.pippi.finance/nft',
    },
  ],
  more: [
    {
      label: 'Docs',
      i18nKey: 'nav-docs',
      to: 'https://docs.pippi.finance/',
      target: '_blank',
    },
    {
      label: 'Code',
      i18nKey: 'nav-code',
      to: 'https://github.com/Shrimp-Labs',
      target: '_blank',
    },
    {
      label: 'Blog',
      i18nKey: 'nav-blog',
      to: 'https://medium.com/@shrimpswap',
      target: '_blank',
    },
    {
      label: 'Annoucement',
      i18nKey: 'nav-annoucement',
      to: 'https://twitter.com/pippishrimpswap',
      target: '_blank',
    },
  ],
}

function NavItem({ label, i18nKey, to, target, view, onGotoView, onClick }: any) {
  const i18n = useI18n()

  if (view) {
    return (
      <div className="nav-item" onClick={onGotoView}>
        {i18n(i18nKey, label)}
        <ArrowRight className="icon icon-arrow-right" />
      </div>
    )
  }

  if (to.startsWith('http')) {
    return (
      <StyledAbsoluteLink
        className="nav-item"
        target={target}
        href="https://swap.pippi.finance"
      >
        {i18n(i18nKey, label)}
      </StyledAbsoluteLink>
    )
  }

  return (
    <StyledLink className="nav-item" exact activeClassName="active" to={to} onClick={onClick}>
      {i18n(i18nKey, label)}
    </StyledLink>
  )
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onDismiss, visible }) => {
  const i18n = useI18n()
  // const { account } = useWallet()
  const { pippiPrice } = useHTPrice()
  const [view, setView] = useState('root')
  const { account } = useActiveWeb3React()

  const handleClose = () => {
    onDismiss()
    setView('root')
  }

  if (!visible) {
    return null
  }

  let bodyView = (
      <>
        <div className="navs">
          {views[view].map((item) => (
            <NavItem
              {...item}
              key={item.label}
              onClick={handleClose}
              onGotoView={() => {
                if (item.view) {
                  setView(item.view)
                }
              }}
            />
          ))}
        </div>
        <Bottom>
          {account && <Price className="number">1PIPI= ${pippiPrice.toFixed(3)}</Price>}
          <LngSwith className="mobile-lng-swith"></LngSwith>
        </Bottom>
      </>
    )
  

  return (
    <StyledMobileMenuWrapper>
      <div className="menu-bg" />
      <div className="menu-wrapper">
        <div className="top">
          {view === 'root' ? (
            <>
              <img className="icon icon-logo" src={ImageLogo} alt="" />
              <img
                className="icon icon-close"
                src={ImageClose}
                alt=""
                onClick={handleClose}
              />
            </>
          ) : (
            <>
              <div className="back-container" onClick={() => setView('root')}>
                <img className="icon icon-back" src={ImageNavBack} alt="" />
                <span>{i18n('nav-back', 'Back')}</span>
              </div>
              <img
                className="icon icon-close"
                src={ImageClose}
                alt=""
                onClick={handleClose}
              />
            </>
          )}
        </div>
        <div className="body">{bodyView}</div>
      </div>
    </StyledMobileMenuWrapper>
  )
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

const Price = styled.div`
  font-family: Futura;
  font-weight: bold;
  font-size: 14px;
  color: #2eaeb6;
  padding: 15px 0;
  margin-right: 0;
  text-align: left;
`

const StyledMobileMenuWrapper = styled.div`
  position: fixed;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: ${(props) => props.theme.colors.cardBg};

  .menu-bg {
    position: absolute;
    right: 0;
    top: 100px;
    width: 70%;
    height: 300px;
    background: url(${require('../../assets/images/mobile-menu-bg.png')});
    background-size: contain;
    background-repeat: no-repeat;
    transform: rotate(180deg);
  }

  .menu-wrapper {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 56px;
  }

  .top {
    flex: 0 0 auto;
    padding-top: 48px;
    display: flex;
    align-items: center;

    .icon-logo {
      position: relative;
      left: -10px;
      width: 50px;
      height: 50px;
    }

    .icon-close {
      width: 16px;
      height: 16px;
      margin-left: auto;
    }

    .icon-back {
      width: 24px;
      height: 18px;
      margin-right: 12px;
    }

    .back-container {
      display: flex;
      align-items: center;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      color: #000000;
    }
  }

  .body {
    flex: 1 0 auto;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
  }

  .nav-item {
    padding: 10px 0;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #2f3644;

    .icon-arrow-right {
      margin-left: 5px;
      display: inline-block;
      width: 12px;
      height: 12px;
      top: -1px;
      right: -10px;
    }
  }

  .nav-item + .nav-item {
    margin-top: 30px;
  }

  .footer {
    margin-top: auto;
    padding: 40px 0;
    .popup {
      border-top: 1px solid #d8dee3;
    }
    .row {
      padding: 12px 0;
      display: flex;
      align-items: center;
      white-space: nowrap;

      .label {
        font-weight: bold;
        font-size: 14px;
        text-align: left;
      }

      .value {
        user-select: none;
        display: flex;
        margin-left: auto;
        padding-left: 40px;
        font-weight: bold;
        font-size: 12px;
        text-align: right;

        .icon-arrow {
          position: relative;
          display: block;
          top: 2px;
          margin-left: 5px;
          display: inline-block;
          width: 12px;
          height: 12px;
        }
      }
    }
  }
`

const StyledLink = styled(NavLink)`
  text-decoration: none;
`

const StyledAbsoluteLink = styled.a`
  text-decoration: none;
`

export default MobileMenu

