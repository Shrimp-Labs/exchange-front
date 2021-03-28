import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logoDark from '../../assets/images/logo-pipi-dark.png'
import logoLight from '../../assets/images/logo-pipi-light.png'

interface LogoProps {
  isDark: boolean
}
const Logo: React.FC<LogoProps> = ({ isDark }) => {
  return (
    <StyledLogo to="/">
      <img src={isDark ? logoDark : logoLight} alt="logo" />
      <StyledText>Pippi Shrimp</StyledText>
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
  img {
    width: 60px;
  }
  @media (max-width: 600px) {
    img {
      width: 40px;
    }
    
  }
`

const StyledText = styled.span`
  color: ${(props) => props.theme.colors.normal}; 
  font-family: "Noto Sans", sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.03em;
  margin-left: 10px;
  @media (max-width: 850px) {
    display: none;
    font-size: 14px;
  }
`

export default Logo
