import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import About from './pages/About';
import Home from './pages/Home';
import Play from './pages/Play';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router basename="/">
        <Navbar />
            <Routes>
                <Route path = '/' element={<Home/>} />
                <Route path = '/play' element={<Play/>} />
                <Route path = '/about' element={<About/>} />

            </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
