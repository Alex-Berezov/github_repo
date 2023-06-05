import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.tsx'
import { Home } from './routes/Home'
import { GlobalStyle } from './styles/index.ts'
import RepoCard from './routes/RepoCard/RepoCard.tsx'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='repository/:repoId' element={<RepoCard />} />
        {/* <Route path='*' element={<NoMatch />} /> */}
      </Routes>
    </>
  )
}

export default App
