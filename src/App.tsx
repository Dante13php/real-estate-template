import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PageTransition } from './components/PageTransition'
import { HomePage } from './pages/HomePage'
import { RentPage } from './pages/RentPage'
import { NewDevelopmentsPage } from './pages/NewDevelopmentsPage'
import { AboutPage } from './pages/AboutPage'

export function App() {
  return (
    <BrowserRouter>
      <PageTransition>
        <Routes>
          <Route path="/"                 element={<HomePage />} />
          <Route path="/rent"             element={<RentPage />} />
          <Route path="/new-developments" element={<NewDevelopmentsPage />} />
          <Route path="/about"            element={<AboutPage />} />
        </Routes>
      </PageTransition>
    </BrowserRouter>
  )
}
