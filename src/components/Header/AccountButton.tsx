import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import userlogo from '../../assets/images/user-logo-gray.png'
import useHTPrice from '../../hooks/useHtPrice'
import useTokenBalance from '../../hooks/useTokenBalance'
import { getBalanceNumber } from '../../utils/formatBalance'
import { getPipiAddress } from '../../utils/addressHelpers'
import { useWalletModalToggle } from '../../state/application/hooks'
import { useActiveWeb3React } from '../../hooks'
import TranslatedText from '../TranslatedText'
import { shortenAddress } from '../../utils'
import copyIcon from '../../assets/images/copy.png'

export const CONNECTOR_STORAGE_ID = 'CONNECTOR_STORAGE_ID'
interface AccountButtonProps {}

const AccountButton: React.FC<AccountButtonProps> = () => {
  const { pippiPrice } = useHTPrice()
  const { account, unsetConnector } = useActiveWeb3React()
  const sushiBalance = useTokenBalance(getPipiAddress())
  const toggleWalletModal = useWalletModalToggle()
  const handleSignOutClick = useCallback(() => {
    window.localStorage.removeItem(CONNECTOR_STORAGE_ID)
    // unsetConnector()
  }, [unsetConnector])
  const copy = () => {
    const input = document.createElement('input')
    input.setAttribute('readonly', 'readonly')
    input.setAttribute('value', account)
    document.body.appendChild(input)
    input.setSelectionRange(0, 9999)
    if (document.execCommand('copy')) {
      document.execCommand('copy')
    }
    document.body.removeChild(input)
  }
  return (
    <StyledAccountButton>
      {!account ? (
        <Button onClick={toggleWalletModal}>
          <TranslatedText translationId={118}>Unlock Wallet</TranslatedText>
        </Button>
      ) : (
        <AccountCn>
          <AccountInner>
            <Account>
              <img src={require('../../assets/images/link.png')} alt="" className="link" />
              <span className="text">{shortenAddress(account)}</span>
              <img src={userlogo} alt="" className="user-account" />
            </Account>
          </AccountInner>
          <Modal className="modal">
            <Content>
              <div className="title">your wallet</div>
              <div className="subtitle">
                <span>{shortenAddress(account)}</span>
                <img src={copyIcon} alt="" onClick={copy} />
              </div>
            </Content>
            <Content>
              <div className="title">
                <TranslatedText translationId={140}>Your PIPI Balance</TranslatedText>
              </div>
              <div className="money">{getBalanceNumber(sushiBalance)}</div>
              <div className="title usdt">=${getBalanceNumber(sushiBalance) * pippiPrice}</div>
              <Link href={`https://hecoinfo.com/address/${account}`}>
                <TranslatedText translationId={164}>View on HecoScan</TranslatedText>
              </Link>
            </Content>
            <div className="flex">
              <ButtonCustom onClick={handleSignOutClick}>
                <TranslatedText translationId={166}>Sign out</TranslatedText>
              </ButtonCustom>
            </div>
          </Modal>
        </AccountCn>
      )}
    </StyledAccountButton>
  )
}
const Button = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.primary};
  border-radius: 100px;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  height: 36px;
  font-weight: 700;
  justify-content: center;
  outline: none;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 0px 4px 4px rgb(0 0 0 / 0.2);
  }
`
const Link = styled.a`
  display: block;
  margin-top: 20px;
  color: ${props => props.theme.colors.primary};
  font-size: 14px;
  line-height: 16px;
  font-weight: bolder;
  text-decoration: none;
`
const ButtonCustom = styled.div`
  margin: 12px 0;
  padding: 5px 12px;
  border: 1px solid #7f868f;
  color: #2f3644;
  text-align: center;
  border-radius: 24px;
  cursor: pointer;
`
const Content = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #d8dee3;
  font-size: 14px;
  line-height: 24px;
  font-weight: bolder;
  color: #2f3644;
  .title {
    color: #7f868f;
  }
  .money {
    font-size: 16px;
  }
  .usdt {
    font-size: 12px;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    img {
      height: 18px;
    }
  }
`
const AccountCn = styled.div`
  position: relative;
  width: 185px;
  height: 40px;
  &:hover {
    .modal {
      display: block;
    }
  }
`
const AccountInner = styled.div`
  position: absolute;
  height: 70px;
  left: 0;
  width: 100%;
`
const Account = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  border-radius: 100px;
  padding: 0 0 0 12px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  justify-items: center;
  cursor: pointer;
  background: rgb(244, 247, 250);
  .user-account {
    width: 40px;
  }
  .text {
    width: 95px;
  }
  .link {
    width: 15px;
  }
`
const StyledAccountButton = styled.div`
  button {
    :hover {
      background: ${props => props.theme.colors.primary};
    }
  }
  @media (max-width: 850px) {
    button {
      padding: 6px 10px;
      font-size: 12px;
      border-radius: 8px;
    }
  }
`
const Modal = styled.div`
  position: absolute;
  right: 0;
  top: 60px;
  width: 300px;
  padding: 4px 12px 12px 12px;
  display: none;
  padding-left: 20px;
  padding-bottom: 0;
  box-sizing: border-box;
  background: #fdfdfd;
  box-shadow: 0px 4px 20px rgba(117, 117, 117, 0.1);
  border-radius: 12px;
  .flex {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`

export default AccountButton
