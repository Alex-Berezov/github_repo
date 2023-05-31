import Header from './components/Header/Header.tsx'
import { Home } from './routes/Home'
import { GlobalStyle } from './styles/index.ts'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  )
}

export default App
