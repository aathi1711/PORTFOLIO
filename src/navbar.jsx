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
        name:'Contacts',
        path:'/contacts'
    }]
    return(
        <div className='flex h-12 items-center justify-between z-10 w-screen fixed top-0  hidden sm:flex'>
            <h1 className='pl-5 font-semibold text-violet-900 text-3xl font-kanit select-none'>PortFolio</h1>
            <div className='flex gap-2 pr-5  font-semibold font-reem '>
            {lists.map((list,index)=>(<Link key={index} className='hover:-translate-y-1 transition duration-250 hover:text-violet-600 duration-200' to={list.path}>{list.name}</Link>))}
            </div>
        </div>
    )
}
export default Navbar