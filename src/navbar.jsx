import { useState } from 'react'
import './App.css'

const Navbar=()=>{
    return(
        <nav className=' h-12 text-indigo-900 sticky top-0 bg-slate-100 font-bold hidden sm:block'>
            <ul className='flex items-center h-full gap-4 relative'>
               <li className='rounded hover:border-indigo-900 ml-2' ><a href='#home'>HOME</a></li>
              <li className='rounded hover:border-indigo-900'><a href='#about'>SKILLS</a></li>
              <li className='rounded hover:border-indigo-900'><a href='#projects'>PROJECTS</a></li>
              <li className='rounded hover:border-indigo-900'><a href='#contact'>CONTACT</a></li>
            </ul>
        </nav>
    )
}
export default Navbar