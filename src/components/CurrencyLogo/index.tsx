import { ChainId, ETHER, Token } from '@pancakeswap-libs/sdk'
import React, { useMemo } from 'react'
import styled from 'styled-components'

import HuobiLogo from '../../assets/images/huobi-logo.png'
import OkLogo from '../../assets/images/ok-logo.png'
import PolygonLogo from '../../assets/images/polygon-logo.png'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import Logo from '../Logo'
import CoinLogo from '../../components/pancake/CoinLogo'
import { NETWORK_CHAIN_ID } from '../../connectors'

const getTokenLogoURL = (address: string) =>
  `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${address}/logo.png`

const StyledEthereumLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style
}: {
  currency?: any
  size?: string
  style?: React.CSSProperties
}) {
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)
  const EthereumLogo = useMemo(() => {
    switch (NETWORK_CHAIN_ID) {
      case ChainId.HECO_MAINNET:
        return HuobiLogo
      case ChainId.OEC_MAINNET:
        return OkLogo
      case ChainId.POLYGON:
        return PolygonLogo
    }
    return HuobiLogo
  }, [])

  const srcs: string[] = useMemo(() => {
    if (currency === ETHER(NETWORK_CHAIN_ID)) return []

    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, getTokenLogoURL(currency.address)]
      }

      return [getTokenLogoURL(currency.address)]
    }
    return []
  }, [currency, uriLocations])

  if (currency === ETHER(NETWORK_CHAIN_ID)) {
    return <StyledEthereumLogo src={EthereumLogo} size={size} style={style} />
  }
  return (currency as any)?.address && NETWORK_CHAIN_ID === ChainId.HECO_MAINNET ? (
    <CoinLogo
      size={size}
      srcs={[`/images/coins/${currency?.address?.replace('/', '') ?? 'token'}.png`]}
      alt={`${currency?.symbol ?? 'token'} logo`}
      style={style}
    />
  ) : (
    <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
  )
}
