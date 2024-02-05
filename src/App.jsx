import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TheNavbar from './components/TheNavbar'
import TheFooter from './components/TheFooter'
import NewsList from './pages/list'
import NewsItem from './pages/item'

export default function App() {
  return (
    <>
      <Router>
        <TheNavbar></TheNavbar>
        <Routes>
          <Route path="/:list" element={<NewsList />}></Route>
          <Route path="/item/:id" element={<NewsItem />}></Route>
        </Routes>
        <TheFooter></TheFooter>
      </Router>
    </>
  )
}

