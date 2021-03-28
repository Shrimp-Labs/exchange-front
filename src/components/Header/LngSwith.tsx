import React, { useContext } from 'react'
import styled from 'styled-components'
import { LanguageContext } from '../../hooks/LanguageContext'
import TranslatedText from '../TranslatedText'
import { ZHCN, EN } from '../../constants/localisation/languageCodes'

const AccountLink: React.FC = (props) => {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  console.log(selectedLanguage)
  return (
      <StyledButton>
        <Button className={(selectedLanguage && selectedLanguage.code === EN.code) || !selectedLanguage ? 'active': 'unactive'} onClick={() => { setSelectedLanguage(EN) }}>
          <TranslatedText translationId={134}>EN</TranslatedText>
        </Button>
        <Button className={selectedLanguage && selectedLanguage.code === ZHCN.code ? 'active': 'unactive'} onClick={() => { setSelectedLanguage(ZHCN) }}>
          <TranslatedText translationId={136}>CN</TranslatedText>
        </Button>
      </StyledButton>
  )
}

const StyledButton = styled.div`
  display: flex;
  width: 70px;
  height: 36px;
  line-height: 36px;
  background: ${(props) => props.theme.colors.primary1};
  color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`
const Button = styled.div`
  flex: 1;
  text-align: center;
  &.unactive {
    color: ${(props) => props.theme.colors.black};
    background: #f6f6f6;
  }
`

export default AccountLink
