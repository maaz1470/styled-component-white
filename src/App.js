// import './components/assets/css/light.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/style/Global.style';
import Tutorial from './components/Tutorial';
export default function App(){
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{theme: "light"}}>
        <Tutorial />
      </ThemeProvider>
      
    </>
  )
}