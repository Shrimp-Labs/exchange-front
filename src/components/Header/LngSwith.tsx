import React, { useContext } from 'react'
import styled from 'styled-components'
import { LanguageContext } from '../../hooks/LanguageContext'
import TranslatedText from '../TranslatedText'
import { ZHCN, EN } from '../../constants/localisation/languageCodes'

interface MobileMenuProps {
  className?: string
}
const AccountLink: React.FC<MobileMenuProps> = (props) => {
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
  margin-right: 24px;
  background: #E1E1E1;
  color: ${props => props.theme.colors.normal};
  border: 1px solid #E1E1E1;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  align-items: center;
  font-size: 14px;
`
const Button = styled.div`
  flex: 1;
  text-align: center;
  border-radius: 8px;
  background: ${props => props.theme.colors.white};
  &.unactive {
    background: #E1E1E1;
  }
`

export default AccountLink
