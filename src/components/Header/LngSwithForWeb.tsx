import React, { useContext } from 'react'
import styled from 'styled-components'
import { LanguageContext } from '../../hooks/LanguageContext'
import { ZHCN, EN } from '../../constants/localisation/languageCodes'

interface SwithProps {
  className?: string
}
const AccountLink: React.FC<SwithProps> = props => {
  const { selectedLanguage, handleSetSelectedLanguage } = useContext(LanguageContext)

  return (
    <StyledButton className={props.className}>
      <div className="text">{selectedLanguage?.language}</div>
      <Modal className="modal">
        <Button
          className={selectedLanguage?.code === EN.code ? 'active' : 'unactive'}
          onClick={() => {
            handleSetSelectedLanguage(EN)
          }}
        >
          {EN.language}
        </Button>
        <Button
          className={selectedLanguage?.code === ZHCN.code ? 'active' : 'unactive'}
          onClick={() => {
            handleSetSelectedLanguage(ZHCN)
          }}
        >
          {ZHCN.language}
        </Button>
      </Modal>
    </StyledButton>
  )
}

const StyledButton = styled.div`
  position: relative;
  width: 100px;
  height: 40px;
  color: ${props => props.theme.colors.normal};
  cursor: pointer;
  font-size: 14px;
  align-items: center;
  .text {
    padding-left: 26px;
    color: #2F3644;
    font-weight: bolder;
    position: absolute;
    height: 60px;
    top: 0;
    padding-top: 10px;
    box-sizing: border-box;
  }
  &:hover {
    .modal {
      display: block;
    }
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`
const Button = styled.div`
  margin-bottom: 24px;
  text-align: center;
  border-radius: 8px;
  font-weight: bolder;
  color: ${props => props.theme.colors.primary};
  &.unactive {
    color: #2F3644;
  }
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`
const Modal = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 100px;
  display: none;
  border-radius: 12px;
  padding: 24px;
  padding-left: 20px;
  padding-bottom: 0;
  box-sizing: border-box;
  background: #fdfdfd;
  box-shadow: 0px 4px 20px rgba(117, 117, 117, 0.1);
  border-radius: 12px;
`

export default AccountLink
