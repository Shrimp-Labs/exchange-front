import React from 'react'
import styled from 'styled-components'
import { useDarkModeManager } from '../../state/user/hooks'
import DayIcon from '../../assets/images/theme-day.png'
import NightIcon from '../../assets/images/theme-night.png'

const Button = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
`

const ThemeSwitch: React.FC = () => {
  const [isDark, toggleTheme] = useDarkModeManager()

  return <Button onClick={toggleTheme}>
  <img src={isDark ? DayIcon : NightIcon} height="29" alt="logo" style={{display: 'block'}} />
</Button>
}

export default ThemeSwitch
