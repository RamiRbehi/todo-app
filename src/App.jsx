import styled from 'styled-components'
import './App.css'
import { ThemeProvider } from './components/ThemeContext'
import Toggle from './components/Toggle'
import TodoComponent from './components/TodoComponent'

function App() {

  return (
    <ThemeProvider>
    <Container className="App">
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
  background-image: ${({theme}) => theme.backgroundImage};
  background-repeat: no-repeat;

  @media only screen and (max-width: 375px) {
        height: 40vh;
      }
`

export default App
