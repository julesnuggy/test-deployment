import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import Other from './Other.jsx';
import './App.css'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/other">Other</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/other" element={<Other />}></Route>
      </Routes>
    </>
  )
}

export default App
