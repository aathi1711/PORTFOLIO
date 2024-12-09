import './App.css'
function About(){
    let  skills = ['HTML','CSS','JavaScript','NodeJs','ExpressJs','MongoDB','MySQL','RESTful API','ReactJs','Tailwind CSS','Bootstrap','JWT','Post Man','Responsive Design','Netlify','Vercel','Bcrypt']
    return(

        <div  className='flex h-fit md:h-screen  flex-col md:flex-row '>
        <div className='animate-slideIn delay-500 flex flex-col items-center justify-center gap-4 w-full lg:w-1/2 '>    
     <h1 className='mb-4 text-4xl font-bold text-indigo-500 text-center font-kanit select-none'>MY SKILLS</h1>
    <ul className='flex flex-wrap w-full max-w-96  items-center justify-center text-white rounded-xl font-reem gap-4'>
        {skills.map((list)=>(
             <li className='cursor-pointer active:scale-75 duration-300 border rounded-xl border-2 font-bold  p-2 bg-gradient-to-r from-purple-500 to-pink-500'>{list}</li>
        ))}
     </ul>
        </div>
        <div className='animate-slideOut delay-500 items-center justify-center hidden lg:flex w-1/2'>
             <img className=' w-5/6 h-4/6' src='https://joyjeet.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSkills.cbcc8338.png&w=640&q=75'></img>
        </div>
       
        </div>
    )
}
export default About