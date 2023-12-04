
import Header from './components/header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Cart from './components/Cart'
import Menu from './components/menu/Menu'
import Footer from './components/Footer/Footer'

 

function App() {
 return (
  <> 
   <Router>
     <Header/>
       <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
       </Routes>

       <Footer/>
        
  </Router>
  </>
  )
}
export default App
