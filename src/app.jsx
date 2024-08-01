import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css'
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import Hero from './components/Hero';

function DebugRoutes() {
  let location = useLocation();
  console.log(location.pathname); // This will print the current path

  return null; // You can render something here if needed
}

export function App() {


  return (
    <>
      <Router basename="/home-page-exam">
        <AppNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hero" element={<Hero />} />
          </Routes>
      </Router>
    </>
  )
}
