import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
      <BrowserRouter>
      <nav className="nav">
        <h1 className="nav__logo">#VANLIFE</h1>
        <Link to="/" className="nav__home">Home</Link>
        <Link to="/about" className="nav__about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
