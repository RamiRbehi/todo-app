import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from './ThemeContext'
import { DarkMode } from './DarkMode'
import bgDesktopLight from '../assets/images/bg-desktop-light.jpg'
import bgDesktopDark from '../assets/images/bg-desktop-dark.jpg'
import bgMobileLight from '../assets/images/bg-mobile-light.jpg'
import bgMobileDark from '../assets/images/bg-mobile-dark.jpg'


const Toggle = () => {
    const {isDarkMode, toggleDarkMode} = useContext(ThemeContext);

    const lightTheme = {
        backgroundImage: `url(${bgDesktopLight})`,
        backgroundColor: "hsl(236, 33%, 92%)",
    }

    const darkTheme = {
        backgroundImage: `url(${bgDesktopDark})`,
        backgroundColor: "hsl(235, 21%, 11%)",
    }

    const mobilelightTheme = {
        backgroundMobileImage: `url(${bgMobileLight})`,
        backgroundColor: "hsl(236, 33%, 92%)",
    }

    const mobiledarkTheme = {
        backgroundMobileImage: `url(${bgMobileDark})`,
        backgroundColor: "hsl(235, 21%, 11%)",
    }
  return (
    <Container theme={{...lightTheme, ...(isDarkMode && darkTheme)}}
    mobileTheme={{...mobilelightTheme, ...(isDarkMode && mobiledarkTheme)}}>
        {/* <BackgroundImage theme={isDarkMode ? darkTheme : lightTheme} ></BackgroundImage> */}
        <Wrapper>
            <Logo>TODO</Logo>
            <Button theme={{...lightTheme, ...(isDarkMode && darkTheme)}} onClick={toggleDarkMode}>
                {isDarkMode ? 
                    <Sun src='../../public/images/icon-sun.svg' width="26" height="26">
                        <path fill="#FFF" fillRule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/>
                    </Sun> :
                    <Moon src='../../public/images/icon-moon.svg' width="26" height="26">
                        <path fill="#FFF" fillRule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/>
                    </Moon>}
            </Button>
            {isDarkMode && <DarkMode/>}
            </Wrapper>
            {/* <InputForm/> */}
    </Container>
  )
}

const Container = styled.div`
     display: grid;
     place-items: center;
    /* flex-direction: column;
    justify-content: center;
    align-items: start; */
    padding-bottom: 100px;
    padding-top: 100px;
    height: 100vh;
    /* position: relative; */
    /* background-color: ${({theme}) => theme.backgroundColor}; */
    background-image: ${({theme}) => theme.backgroundImage};
    background-repeat: no-repeat;
    width: 100%;

    @media only screen and (max-width: 375px) {
        background-image: ${({mobileTheme}) => mobileTheme.backgroundMobileImage};
        padding-top: 40px;
    }
`
// const BackgroundImage = styled.div`
//     width: 100vw;
//     height: 40vh;
//     background-image: ${({theme}) => theme.backgroundImage};
//     background-size: cover;
// `
const Wrapper = styled.div`
    width: 40vw;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 375px) {
        width: 80vw;
      }
`
const Logo = styled.p`
    color: hsl(0, 0%, 98%);
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 12px;
`
const Button = styled.div`
    transition: transform 3s ease-in-out;
    cursor: pointer;
`
const Moon = styled.svg`
`
const Sun = styled.svg`
`

export default Toggle