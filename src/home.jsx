import './App.css'

import pdf from './assets/Aathish.pdf'
import profile from './assets/profile.jpeg'
import { useNavigate } from 'react-router-dom'
const Home =()=>{
    const navigate = useNavigate()
   
     return(
        <div className='flex sm:flex-col h-fit md:h-screen pb-20 bg-gradient-to-b from-slate-900 to-slate-800 justify-center flex-col font-reem font md:flex-row' >
            <div className=' md:p-32 max-sm:flex justify-center pr-10   animate-slideIn delay-500'> 
               <img className='w-80 max-sm:pl-7 h-96 z-10  object-cover'  src={profile}/>
                </div>
                <div className=' md:mt-24 max-sm:mt-5 pl-5 select-none animate-fade flex flex-col text-black justify-center items-center md:items-start md:w-1/2 w-full'>
                <p className='text-4xl max-md:text-3xl text-white'>Hi there,</p>
                <h1 className='text-6xl max-md:text-4xl font-bold text-white '> I am <span className='text-amber-300'>Aathish</span></h1>
                <h1 className='text-3xl max-md:text-3xl font-bold text-white'>A Full Stack Developer</h1>
                <p className='w-3/4 max-md:text-center mt-2  text-white font-san opacity-70'>A skilled MERN Stack Developer with a strong foundation in building
                      dynamic, responsive web applications. Proficient in crafting seamless user experiences
                      with React.js, Node.js, Express.js, and MongoDB. Experienced in developing secure, 
                      scalable projects with a focus on modern web technologies.
                </p>
                <div className='flex gap-4 mt-4 font-kanit'>
                    <a href={pdf} target='_blank' className='w-32 duration-200 border-gray-500 border rounded hover:bg-amber-300 hover:border-none'><button className=' 
                   duration-200 p-2  w-32 rounded text-white hover:text-black'>Check Resume</button></a>
                    <a onClick={()=>navigate('/contact')} className=' duration-200 border-gray-500 border rounded hover:bg-amber-300 hover:border-none'><button className='hover:text-black text-white duration-200 p-2  w-32 rounded '>Reach me here</button></a>
                </div>
            </div>
        </div>
     )
}
export default Home