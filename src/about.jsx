import './App.css'
function About(){
    return(

        <div id='about' className='flex h-fit md:h-screen bg-gradient-to-l from-blue-900 to-indigo-900  flex-col  md:flex-row '>
        <div className='flex flex-col items-center justify-center gap-4 w-full lg:w-1/2 '>
            
     <h1 className='mb-4 text-5xl font-bold text-sky-400 text-center underline pt-4 '>MY SKILLS</h1>
   
    <ul className='flex flex-wrap w-full max-w-96  items-center justify-center text-white rounded-xl gap-4'>
        <li className='cursor-pointer active:scale-75 duration-300 border rounded-xl border-2 font-bold  p-2 bg-gradient-to-l from-blue-800 to-indigo-800  '>HTML</li>
        <li className='cursor-pointer active:scale-75 duration-300 border rounded-xl border-2 font-bold  p-2 bg-gradient-to-l from-blue-800 to-indigo-800  '>CSS</li>
        <li className='cursor-pointer active:scale-75 duration-300 border rounded-xl border-2 font-bold  p-2 bg-gradient-to-l from-blue-800 to-indigo-800  '>JavaScript</li>
        <li className='cursor-pointer active:scale-75 duration-300 border rounded-xl border-2 font-bold  p-2 bg-gradient-to-l from-blue-800 to-indigo-800  '>NodeJs</li>
        <li className='cursor-pointer active:scale-75 duration-300 border rounded-xl border-2 font-bold  p-2 bg-gradient-to-l from-blue-800 to-indigo-800  '>ExpressJs</li>
        <li className='cursor-pointer active:scale-75 duration-300 border rounded-xl border-2 font-bold  p-2 bg-gradient-to-l from-blue-800 to-indigo-800  '>MongoDB</li>
        <li className='cursor-pointer active:scale-75 duration-300 border rounded-xl border-2 font-bold  p-2 bg-gradient-to-l from-blue-800 to-indigo-800  '>MySQL</li>
        <li className='cursor-pointer active:scale-75 duration-300 border rounded-xl border-2 font-bold  p-2 bg-gradient-to-l from-blue-800 to-indigo-800  '>RESTful API</li>
        <li className='cursor-pointer active:scale-75 duration-300 border rounded-xl border-2 font-bold  p-2 bg-gradient-to-l from-blue-800 to-indigo-800  '>ReactJs</li>
        <li className='cursor-pointer active:scale-75 duration-300 border rounded-xl border-2 font-bold  p-2 bg-gradient-to-l from-blue-800 to-indigo-800  '>Tailwind CSS</li>
        <li className='cursor-pointer active:scale-75 duration-300 border rounded-xl border-2 font-bold  p-2 bg-gradient-to-l from-blue-800 to-indigo-800  '>Bootstrap</li>
        <li className='cursor-pointer active:scale-75 duration-300 border rounded-xl border-2 font-bold  p-2 bg-gradient-to-l from-blue-800 to-indigo-800  '>JWT</li>
        <li className='cursor-pointer active:scale-75 duration-300 border rounded-xl border-2 font-bold  p-2 bg-gradient-to-l from-blue-800 to-indigo-800  '>Post Man</li>
        <li className='cursor-pointer active:scale-75 duration-300 border rounded-xl border-2 font-bold  p-2 bg-gradient-to-l from-blue-800 to-indigo-800  '>Responsive Design</li>
        <li className='cursor-pointer active:scale-75 duration-300 border rounded-xl border-2 font-bold  p-2 bg-gradient-to-l from-blue-800 to-indigo-800  '>Netlify</li>
        <li className='cursor-pointer active:scale-75 duration-300 border rounded-xl border-2 font-bold  p-2 bg-gradient-to-l from-blue-800 to-indigo-800  '>Vercel</li>
        <li className='cursor-pointer active:scale-75 duration-300 border rounded-xl border-2 font-bold  p-2 bg-gradient-to-l from-blue-800 to-indigo-800  '>Bcrypt</li>
     </ul>
     
        </div>
        <div className=' items-center justify-center hidden lg:flex w-1/2'>
             <img className=' w-5/6 h-4/6' src='https://joyjeet.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSkills.cbcc8338.png&w=640&q=75'></img>
        </div>
       
        </div>
    )
}
export default About