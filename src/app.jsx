import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css'
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';

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
          </Routes>
      </Router>
    </>
  )
}
