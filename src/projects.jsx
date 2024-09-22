import gmailImg from './assets/gmail-clone.png'
import urlshortImg from './assets/url-shortner.png'
import todoImg from './assets/todo.png'
import './App.css'
const Projects = ()=>{
    return(
        <>
        <div className='h-fit bg-gradient-to-l from-blue-900 to-indigo-900' id="projects">
        <h1 className='mb-4 text-5xl font-bold text-sky-400 text-center underline pt-4 '>MY PROJECTS</h1>
            <div className="flex gap-2 justify-center flex-wrap ">
                <div className="
                flex flex-col justify-between 
                w-full max-w-96 items-center gap-2 text-white
                bg-gradient-to-l from-blue-800 to-indigo-800 border-2 rounded-xl">
               <img className=' w-11/12  h-48 max-w-72 mt-4' src={gmailImg}/> 
               <h3 className='font-bold text-xl'>Gmail Clone</h3>
               <div className='flex w-11/12 flex-wrap justify-center gap-2'>
                <div className='border border-white rounded-xl px-2'>ReactJs</div>
                <div className='border border-white rounded-xl px-2'>MongoDb</div>
                <div className='border border-white rounded-xl px-2'>ExpressJs</div>
                <div className='border border-white rounded-xl px-2'>NodeJs</div>
                <div className='border border-white rounded-xl px-2'>Jwt</div>
                <div className='border border-white rounded-xl px-2'>Bootstrap</div>
               </div>
               <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300 p-2 font-bold w-48 mb-4 bg-indigo-500 rounded  border'><a href='https://gmailclone1705.netlify.app/' target='_blank'>View Application</a></button>    
                </div>
                <div className="flex flex-col justify-between w-full max-w-96 items-center
                bg-gradient-to-l from-blue-800 to-indigo-800 border-2 rounded-xl
                gap-2 text-white">
               <img className=' w-11/12 h-48 max-w-72 mt-4' src={urlshortImg}/>  
               <h3 className='font-bold text-xl'>Url Shortner</h3>
               <div className='flex w-11/12 flex-wrap justify-center gap-2'>
                <div className='border border-white rounded-xl px-2'>ReactJs</div>
                <div className='border border-white rounded-xl px-2'>MongoDb</div>
                <div className='border border-white rounded-xl px-2'>ExpressJs</div>
                <div className='border border-white rounded-xl px-2'>NodeJs</div>
                <div className='border border-white rounded-xl px-2'>Jwt</div>
                <div className='border border-white rounded-xl px-2'>Bootstrap</div>
               </div>
               <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300 p-2 font-bold w-48 bg-indigo-500 rounded  border mb-4'><a href='https://jolly-florentine-713b44.netlify.app/' target='_blank'>View Application</a></button>       
                </div>
                <div className="flex flex-col justify-between w-full
                bg-gradient-to-l from-blue-800 to-indigo-800 border-2 rounded-xl
                max-w-96 items-center gap-2 text-white">
               <img className=' w-11/12 h-48 max-w-72 mt-4' src={todoImg}/>  
               <h3 className='font-bold text-xl'>Todo App</h3>
               <div className='flex w-11/12 flex-wrap justify-center gap-2'>
                <div className='border border-white rounded-xl px-2'>ReactJs</div>
                
               </div>
               <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300 p-2 font-bold w-48 bg-indigo-500 rounded border mb-4 '><a href='https://reliable-longma-eed964.netlify.app/' target='_blank'>View Application</a></button>       
                </div>
            </div>
        </div>
        </>
    )
}
export default Projects;