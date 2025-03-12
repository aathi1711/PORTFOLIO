
import './App.css'
import Navbar from './navbar'
import Home from './home'
import Contact from "./contact"
import Projects from './projects'
import BottomNavbar from './bottom-navbar'
import Skills from './skills'
import About from './about'

function App() {

  return (
    <div className='bg-gray-950'>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <BottomNavbar/>
    </div>
    

  )
}

export default App
