import './App.css'
import img from './profile.jpg'
import pdf from './assets/Aathish.pdf'
const Home =()=>{
     return(
        <div className='flex h-fit md:h-screen  justify-center flex-col font-reem font md:flex-row' >
            <div className='select-none animate-slideIn delay-500 flex flex-col text-black justify-center items-center md:items-start md:w-1/2 w-full'>
                <p className='text-4xl'>Hi there,</p>
                <h1 className='text-6xl font-bold '> I am <span className='text-fuchsia-700'>Aathish</span></h1>
                <h1 className='text-3xl font-bold'>A Full Stack Developer</h1>
                <p className='w-3/4 max-md:text-center mt-2  font-lg'>A skilled MERN Stack Developer with a strong foundation in building
                      dynamic, responsive web applications. Proficient in crafting seamless user experiences
                      with React.js, Node.js, Express.js, and MongoDB. Experienced in developing secure, 
                      scalable projects with a focus on modern web technologies.
                </p>
                <div className='flex gap-4 mt-4'>
                    <a href={pdf} target='_blank'><button className='
                    transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-violet-600 duration-200 p-2 font-bold w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded hover:bg-indigo-600 border'>Check Resume</button></a>
                    <a href='#about'><button className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-200 p-2 font-bold w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded hover:bg-violet-600 border'>About me</button></a>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center mt-4 animate-slideOut delay-500'>
                <img className='h-88 w-88 rounded-full p-6 shadow-md shadow-white border-2 border-black mb-2' src={img}/></div>
        </div>
     )
}
export default Home