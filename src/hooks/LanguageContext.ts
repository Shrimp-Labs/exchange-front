import React, { createContext } from 'react'

export interface LanguageObject {
  code: string
  language: string
}
interface LanguageState {
  selectedLanguage: LanguageObject
  handleSetSelectedLanguage: React.Dispatch<React.SetStateAction<LanguageObject>>
  translatedLanguage: LanguageObject
  setTranslatedLanguage: React.Dispatch<React.SetStateAction<LanguageObject>>
}

const defaultLanguageState: LanguageState = {
  selectedLanguage: { code: '', language: '' },
  handleSetSelectedLanguage: (): void => {},
  translatedLanguage: { code: '', language: '' },
  setTranslatedLanguage: (): void => {}
}

export const LanguageContext = createContext(defaultLanguageState as LanguageState)
