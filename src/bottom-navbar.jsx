import { useState } from "react"

const BottomNavbar = ()=>{
    let lists = [{
        name:'Home',
        path:'#',
        icon:'fa-solid fa-home fa-xl'
    },
    {
        name:'About',
        path:'#about',
        icon:'fa-solid fa-user fa-xl'
    },{
        name:'Skills',
        path:'#skills',
        icon:'fa-solid fa-briefcase fa-xl'
    },{
        name:'Projects',
        path:'#projects',
        icon:'fa-solid fa-server fa-xl'
    },{
        name:'Contact',
        path:'#contact',
        icon:'fa-solid fa-message fa-xl'
    }]
     const [active,setActive] = useState(0)
       function handleActive(index){
          setActive(index)
       }
    return(
        <>
        <div className="md:hidden h-16 bg-gradient-to-b from-sky-400 to-sky-600 fixed rounded-t-lg bottom-0 flex gap-4 justify-evenly items-center font-reem pt-5 w-screen text-blue-950">
           {lists.map((list,index)=><div onClick={()=>handleActive(index)} className={`p-1 flex flex-col items-center justify-end gap-2 h-3/4 ${active == index && 'text-orange-600'}`}>
           <i className={list.icon}></i>
            <a href={list.path}>{list.name}</a></div>)} 
        </div>
        </>
    )   
}
export default BottomNavbar;