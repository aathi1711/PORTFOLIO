import { useState } from 'react'
import './App.css'

const Navbar=()=>{
    const[show,setshow]=useState(false)
    function handleClick(){
        if(show){
            setshow(false)
        }else{
            setshow(true)
        }
        
    }
    function removeClick(){
        setshow(false)
    }
    return(
        <nav>
        
            <ul>
               <li ><a href='#home'>HOME</a></li>
              <li><a href='#about'>SKILLS</a></li>
              <li><a href='#projects'>PROJECTS</a></li>
              <li><a href='#contact'>CONTACT</a></li>
               
               
               
            </ul>
        </nav>
    )
}
export default Navbar