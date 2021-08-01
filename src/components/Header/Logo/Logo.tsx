import React from 'react'
import styled from 'styled-components'

import logoText from '../../../assets/images/logo_text.png'

interface LogoProps {
  isDark: boolean
}
const Logo: React.FC<LogoProps> = ({ isDark }) => {
  return (
    <StyledLogo>
      <img src={logoText} alt="text" className="text" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </StyledLogo>
  )
}

const StyledLogo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  text-decoration: none;
  img {
    width: 30px;
  }
  .text {
    margin-left: 6px;
    height: 50px;
    width: auto;
  }
  @media (max-width: 900px) {
    .text {
      height: auto;
      max-height: 40px;
    }
  }
`

export default Logo
