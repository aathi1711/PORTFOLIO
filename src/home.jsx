import './App.css'
import img from './profile.jpg'
import pdf from './Aathish.pdf'
const Home =()=>{
     return(
        <div className='flex h-fit md:h-screen bg-gradient-to-l from-blue-900 to-indigo-900 justify-center flex-col  md:flex-row' id='home'>
            <div className='flex flex-col text-white justify-center items-center md:items-start md:w-1/2 w-full'>
                <p className='text-4xl'>Hi there,</p>
                <h1 className='text-6xl font-bold '> I am Aathish</h1>
                <h1 className='text-3xl font-bold'>A Full Stack Developer</h1>
                <p className='w-3/4 max-md:text-center mt-2  font-lg'>A skilled MERN Stack Developer with a strong foundation in building
                      dynamic, responsive web applications. Proficient in crafting seamless user experiences
                      with React.js, Node.js, Express.js, and MongoDB. Experienced in developing secure, 
                      scalable projects with a focus on modern web technologies.
                </p>
                <div className='flex gap-4 mt-4'>
                    <a href={pdf} target='_blank'><button className='
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300 p-2 font-bold w-32 bg-indigo-500 rounded hover:bg-indigo-600 border'>Check Resume</button></a>
                    <a href='#about'><button className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300 p-2 font-bold w-32 bg-indigo-500 rounded hover:bg-indigo-600 border'>About me</button></a>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center mt-4 '>
                <img className='h-88 w-88 rounded-full p-6 shadow-md shadow-white border-2 mb-2' src={img}/></div>
        </div>
     )
}
export default Home