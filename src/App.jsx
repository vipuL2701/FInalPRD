import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Cart from './components/Cart'
import Menu from './components/Menu'
  

function App() {
 return (
  <> 
   <Router>
   
            
      <Navbar />
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path='/Login' element={<Login/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      
    </Router>
  </>
  )
}

export default App
