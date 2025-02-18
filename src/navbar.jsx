 import { useState } from 'react'
import { Link } from 'react-router-dom'
 
const Navbar=()=>{
    let lists = [{
        name:'Home',
        path:'/'
    },{
        name:'Skills',
        path:'/skills'
    },{
        name:'Projects',
        path:'/projects'
    },{
        name:'Contact',
        path:'/contact'
    }]
   const [active,setActive] = useState(0)
   function handleActive(index){
      setActive(index)
   }
    return(
        <div className='flex h-12 justify-center bg-slate-900 z-10 w-screen fixed top-0 flex'>
            <div className='flex items-center justify-between w-10/12'>  
            <h1 className='md:pl-5  font-semibold md:text-3xl text-2xl text-white font-kanit select-none'>PortFolio</h1>
            <div className='md:flex gap-3 pr-5  font-reem hidden '>
            {lists.map((list,index)=>(<Link onClick={()=>handleActive(index)} key={index} className={`${active == index && 'opacity-90 text-xl -translate-y-1 duration-100'} hover:opacity-100 opacity-70 duration-250 text-white`} to={list.path}>{list.name}</Link>))}
            </div>
            <div className="flex gap-3">
             <a href='https://www.linkedin.com/in/aathish11' className='hover:-translate-y-1 transition duration-300 flex items-center rounded-full justify-center h-8 w-8' target='_blank'>
             <i className="fa-brands fa-linkedin fa-xl text-white" ></i></a>
             <a href='https://github.com/aathi-aathi' className='hover:-translate-y-1 transition duration-300 flex items-center justify-center h-8 w-8 rounded-full' target='_blank'>
             <i className="fa-brands fa-xl fa-github text-white" ></i></a>
        </div>
            </div> 
        </div>
    )
}
export default Navbar