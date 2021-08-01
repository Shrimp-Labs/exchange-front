import React from 'react'
import styled from 'styled-components'
import { NavLink, useHistory } from 'react-router-dom'

import { useI18n } from '../../i18n/i18n-react'

import { ReactComponent as ArrowDown } from '../../assets/images/arrow-down.svg'
import { ReactComponent as ArrowUp } from '../../assets/images/arrow-up.svg'

const navItems = [
  {
    label: 'Exchange',
    i18nKey: 'nav-exchange',
    to: '/',
  },
  {
    label: 'Mining',
    i18nKey: 'nav-mining',
    children: [
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
  },
  {
    label: 'Tool',
    i18nKey: 'nav-tool',
    children: [
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
  },
  {
    label: 'More',
    i18nKey: 'nav-more',
    children: [
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
      {
        label: 'Audit',
        i18nKey: 'nav-audit',
        to: 'https://pippi.finance/static/media/Pippi%20Shrimp_audit.1cd63cbb.pdf',
        target: '_blank',
      },
    ],
  },
]

function NavItem({ label, i18nKey, to, target, children }: any) {
  const i18n = useI18n()
  const history = useHistory()

  if (children) {
    return (
      <div className="nav-item-container">
        <div className="nav-item">
          {i18n(i18nKey, label)}
          <ArrowDown className="icon icon-arrow-down" />
          <ArrowUp className="icon icon-arrow-up" />
        </div>
        <div className="nav-item-list">
          {children.map((item, index) => {
            const handleClick = () => {
              if (item.to.startsWith('http')) {
                if (item.target === '_blank') {
                  window.open(item.to, '_blank')
                } else {
                  window.location.href = item.to
                }
              } else {
                history.push(item.to)
              }
            }
            return (
              <div className="nav-item-list-item" onClick={handleClick} key={index}>
                {i18n(item.i18nKey, item.label)}
              </div>
            )
          })}
        </div>
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
    <StyledLink className="nav-item" exact activeClassName="active" to="/farms">
      {i18n(i18nKey, label)}
    </StyledLink>
  )
}

const Nav: React.FC = () => {
  return (
    <>
      <StyledNav>
        {navItems.map((item, index) => (
          <NavItem {...item} key={index}/>
        ))}
      </StyledNav>
    </>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  @media (max-width: 550px) {
    display: none;
  }

  .nav-item {
    position: relative;
    font-size: 14px;
    color: #495259;
    font-weight: 700;
    display: flex;
    align-items: center;
    margin-right: 26px;
    &:hover {
      color: #9faab9;
    }

    .nav-item + .nav-item {
      margin-left: 10px;
    }

    .icon {
      margin-left: 5px;
      display: inline-block;
      width: 12px;
      height: 12px;
      top: 0px;
      right: -10px;
    }

    .icon-arrow-down {
      display: block;
    }
    .icon-arrow-up {
      display: none;
    }

    &:hover {
      .icon-arrow-down {
        display: none;
      }
      .icon-arrow-up {
        display: block;
      }
    }
  }

  .nav-item-container {
    position: relative;
    cursor: pointer;
   

    &:after {
      content: "";
      display: none;
      position: absolute;
      top: 0px;
      left: -10px;
      right: 0px;
      height: 70px;
    }

    &:hover .nav-item-list,
    &:hover:after {
      display: block;
    }
  }

  .nav-item-list {
    display: none;
    position: absolute;
    right: 0;
    top: 56px;
    margin-right: 50%;
    padding: 17px 20px;
    background: #fdfdfd;
    box-shadow: 0px 4px 20px rgba(117, 117, 117, 0.1);
    border-radius: 12px;
    transform: translate3d(50%, 0, 0);
  }

  .nav-item-list-item {
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    padding: 0 16px;
    color: #495259;
    min-width: 140px;
    height: 37px;
    line-height: 37px;
    border-radius: 6px;

    &:hover {
      background: #f4f7fa;
      color: #9faab9;
    }
  }

  .nav-item-list-item + .nav-item-list-item {
    margin-top: 5px;
  }
`

const StyledLink = styled(NavLink)`
  text-decoration: none;
`

const StyledAbsoluteLink = styled.a`
  text-decoration: none;
`


export default Nav
