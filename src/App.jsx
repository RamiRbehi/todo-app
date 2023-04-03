import styled from 'styled-components'
import './App.css'
import InputForm from './components/InputForm'
import { ThemeProvider } from './components/ThemeContext'
import Toggle from './components/Toggle'
import bgDesktopLight from './assets/images/bg-desktop-light.jpg'
import bgDesktopDark from './assets/images/bg-desktop-dark.jpg'
import ItemList from './components/ItemList'
import ControlButtons from './components/ControlButtons'
import TodoComponent from './components/TodoComponent'

function App() {
  // const isDarkMode = useContext(ThemeContext);

  // const lightTheme = {
  //   backgroundImage: `url(${bgDesktopLight})`,
  // }
  // const darkTheme = {
  //   backgroundImage: `url(${bgDesktopDark})`,
  // }

  return (
    <ThemeProvider>
    <Container 
    // theme={{...lightTheme, ...(isDarkMode && darkTheme)}} 
    className="App">
     <Toggle/>
     <TodoComponent/>
    </Container>
    </ThemeProvider>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
    justify-content: start;
    align-items: center;
  height: 40vh;
  background-image: ${({theme}) => theme.backgroundImage};
  background-repeat: no-repeat;

  @media only screen and (max-width: 375px) {
        height: 40vh;
      }
`

export default App
