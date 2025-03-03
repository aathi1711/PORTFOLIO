
import './App.css'
import Navbar from './navbar'
import Home from './home'
import About from "./about"
import Contact from "./contact"
import Projects from './projects'
import BottomNavbar from './bottom-navbar'

function App() {

  return (
    <div className='bg-gradient-to-b from-slate-900 to-slate-800'>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    <BottomNavbar/>
    </div>
    

  )
}

export default App
