import './App.css'
function About(){
    let  skills = ['HTML','CSS','JavaScript','NodeJs','ExpressJs','MongoDB','MySQL','RESTful API','ReactJs','Tailwind CSS','Bootstrap','JWT','Post Man','Responsive Design','Netlify','Vercel','Bcrypt']
    return(

        <div  className='flex min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex-col md:flex-row '>
        <div className='animate-fade flex flex-col items-center justify-center gap-4 w-full lg:w-1/2 '>    
     <h1 className='  mb-4 mt-5 text-5xl font-extrabold text-amber-400 underline text-center font-dedact select-none'>MY SKILLS</h1>
     <p className='text-center text-slate-100 px-2'>Proficient in MERN stack development, with expertise in building dynamic and secure web applications using MongoDB, Express.js, React.js, and Node.js.</p>
    <ul className='flex flex-wrap w-full max-w-96  items-center justify-center text-white rounded-xl font-reem gap-4'>
        {skills.map((list)=>(
             <li className='backdrop-blur-sm  bg-white/10 cursor-pointer active:scale-75 duration-300 border rounded-xl border-2 font-bold  p-2'>{list}</li>
        ))}
     </ul>
        </div>
        <div className='animate-fade items-center justify-center hidden lg:flex w-1/2'>
             <img className=' w-5/6 h-4/6' src='https://joyjeet.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSkills.cbcc8338.png&w=640&q=75'></img>
        </div>
       
        </div>
    )
}
export default About