import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
// import Footer from './Components/Footer';

function App() {
  return (
      <BrowserRouter>
      <header className="header">
        <Link to="/" className="header__logo">#VANLIFE</Link>
        <nav className='nav'>
          <Link to="/about" className="nav--pills nav__about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Footer />     */}
    </BrowserRouter>
  );
}

export default App;
