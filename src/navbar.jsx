import { useState } from 'react'
import './App.css'

const Navbar=()=>{
    const[show,setshow]=useState(false)
    function handleClick(){
        setshow(true)
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
            {show && <div className='cont-lines'>
           <div className="cont-line" onClick={removeClick}>HOME</div>
           <div className="cont-line">SKILLS</div>
           <div className="cont-line">PROJECTS</div>
           <div className="cont-line">CONTACT</div>
            </div>}
            <div className='lines' onClick={handleClick}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            
        </nav>
    )
}
export default Navbar