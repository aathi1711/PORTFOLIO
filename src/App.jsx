
import './App.css'
import Navbar from './navbar'
import Home from './home'
import About from "./about"
import Contact from "./contact"
import Projects from './projects'
import Footer from './footer';
import BottomNavbar from './bottom-navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Portfolio from './Portfolio'
function App() {

  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Portfolio/>}>
       <Route index element={<Home/>}/>
       <Route path='skills' element={<About/>}/>
       <Route path='projects' element={< Projects/>}/>
       <Route path='contacts' element={<Contact/>}/>
       </Route>
       
      {/* 
      
      <Contact/>
      <Footer/>
      <BottomNavbar/> */}
      </Routes> 
    </BrowserRouter>
  )
}

export default App
