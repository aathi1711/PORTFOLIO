 import { useState } from 'react'
 
const Navbar=()=>{
    let lists = [{
        name:'Home',
        path:'#'
    },
    {
        name:'About',
        path:'#about'
    },{
        name:'Skills',
        path:'#skills'
    },{
        name:'Projects',
        path:'#projects'
    },{
        name:'Contact',
        path:'#contact'
    }]
   const [active,setActive] = useState(0)
   function handleActive(index){
      setActive(index)
   }
    return(
        <div className='flex h-12 justify-center  bg-gray-950 z-10 w-screen fixed top-0 flex'>
            <div className='flex items-center justify-between w-10/12'>  
            <h1 className='md:pl-5  font-semibold md:text-3xl text-2xl bg-gradient-to-r from-sky-300 to-sky-600 bg-clip-text text-transparent font-kanit select-none'>PortFolio</h1>
            <div className='md:flex gap-3 pr-5  font-kanit hidden '>
            {lists.map((list,index)=>(<a onClick={()=>handleActive(index)} key={index} 
            className={`${active == index && ' text-xl -translate-y-1 duration-100 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent'}
            duration-250 text-cyan-400  `} href={list.path}>{list.name}</a>))}
            </div>
            <div className="flex gap-3">
             <a href='https://www.linkedin.com/in/aathish11' className='hover:-translate-y-1 transition duration-300 flex items-center rounded-full justify-center h-8 w-8' target='_blank'>
             <i className="fa-brands fa-linkedin fa-xl text-sky-400" ></i></a>
             <a href='https://github.com/aathi-aathi' className='hover:-translate-y-1 transition duration-300 flex items-center justify-center h-8 w-8 rounded-full' target='_blank'>
             <i className="fa-brands fa-xl fa-github text-sky-400" ></i></a>
        </div>
            </div> 
        </div>
    )
}
export default Navbar