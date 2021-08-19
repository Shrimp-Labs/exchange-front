import React, { useContext, createContext, useMemo, useCallback, useState, useEffect } from 'react'
import { i18nFactory } from './i18n'

const resourcesLoader = {
  en: () => import('./locales/en.json'),
  'zh-CN': () => import('./locales/zh-CN.json')
}

const I18N_LANGUAGE_KEY = 'i18n-language'

const defaultLanguage = localStorage.getItem(I18N_LANGUAGE_KEY) || 'en'

const I18nLanguageContext = createContext<{
  language: string
  setLanguage: (lng: string) => void
}>({
  language: defaultLanguage,
  setLanguage: () => void 0
})

const I18nTranslationContext = createContext({})

const I18nProvider = (props: React.PropsWithChildren<{}>) => {
  const [language, _setLanguage] = useState(defaultLanguage)
  const [translation, setTranslation] = useState({})
  const setLanguage = useCallback(
    lng => {
      _setLanguage(lng)
      localStorage.setItem(I18N_LANGUAGE_KEY, lng)
    },
    [_setLanguage]
  )

  const languageValue = useMemo(
    () => ({
      language,
      setLanguage
    }),
    [language, setLanguage]
  )

  const translationValue = useMemo(() => translation, [translation])

  useEffect(() => {
    const loader = resourcesLoader[language]
    loader().then(val => {
      setTranslation(val)
    })
  }, [language])

  return (
    <I18nLanguageContext.Provider value={languageValue}>
      <I18nTranslationContext.Provider value={translationValue}>{props.children}</I18nTranslationContext.Provider>
    </I18nLanguageContext.Provider>
  )
}

const useLanguage = () => {
  const { language, setLanguage } = useContext(I18nLanguageContext)
  return [language, setLanguage] as const
}

const useI18n = () => {
  const translation = useContext(I18nTranslationContext)
  const i18n = useMemo(() => i18nFactory(translation), [translation])
  return i18n
}

export { I18nProvider, useI18n, useLanguage }
