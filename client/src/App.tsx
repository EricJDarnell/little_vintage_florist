import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import './App.css'

function App() {
  return (
  <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/gallery' element={<GalleryPage />}/>
      </Routes>
  </>
  )
}

export default App
