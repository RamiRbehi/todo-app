import React, { useContext } from 'react'
import styled from 'styled-components'
import bgDesktopLight from '../../public/images/bg-desktop-light.jpg'
import bgDesktopDark from '../../public/images/bg-desktop-dark.jpg'
import { ThemeContext } from './ThemeContext'



const Background = () => {
    const {isDarkMode} = useContext(ThemeContext);

const lightTheme = {
  backgroundImage: `url(${bgDesktopLight})`,
}
const darkTheme = {
  backgroundImage: `url(${bgDesktopDark})`,
}

  return (
    <Container theme={{...lightTheme, ...(isDarkMode && darkTheme)}}>
        
    </Container>
  )
}

const Container = styled.div`
    background-image: ${({theme}) => theme.backgroundImage};
`

export default Background