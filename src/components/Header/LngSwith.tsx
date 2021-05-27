import React, { useContext } from 'react'
import styled from 'styled-components'
import { LanguageContext } from '../../hooks/LanguageContext'
import { ZHCN, EN } from '../../constants/localisation/languageCodes'

interface MobileMenuProps {
  className?: string
}
const AccountLink: React.FC<MobileMenuProps> = (props) => {
  const { selectedLanguage, handleSetSelectedLanguage } = useContext(LanguageContext)
  return (
    <StyledButton>
      <Button
        className={(selectedLanguage && selectedLanguage.code === EN.code) || !selectedLanguage ? 'active' : 'unactive'}
        onClick={() => {
          handleSetSelectedLanguage(EN)
        }}
      >
        {EN.language}
      </Button>
      <span>/</span>
      <Button
        className={selectedLanguage && selectedLanguage.code === ZHCN.code ? 'active' : 'unactive'}
        onClick={() => {
          handleSetSelectedLanguage(ZHCN)
        }}
      >
        {ZHCN.language}
      </Button>
    </StyledButton>
  )
}

const StyledButton = styled.div`
  display: flex;
  height: 26px;
  font-size: 14px;
  font-weight: bolder;
  line-height: 26px;
  color: ${props => props.theme.colors.normal};
  overflow: hidden;
  cursor: pointer;
  align-items: center;
  font-size: 14px;
  span {
    margin: 0 20px;
  }
`
const Button = styled.div`
  text-align: left;
  border-radius: 8px;
  color: ${props => props.theme.colors.primary};
  &.unactive {
    color: #2f3644;
  }
`

export default AccountLink
