import { useState } from 'preact/hooks'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import preactLogo from './assets/preact.svg'
// import viteLogo from '/vite.svg'
import './app.css'
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import Hero from './components/Hero';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <AppNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hero" element={<Hero />} />
          </Routes>
      </Router>
    </>
  )
}
