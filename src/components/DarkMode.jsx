import { createGlobalStyle } from "styled-components";
import bgDesktopDark from '../assets/images/bg-desktop-dark.jpg'

export const DarkMode = createGlobalStyle`
    body{
        background-color: hsl(235, 21%, 11%);
        color: hsl(235, 24%, 19%);
    }
`