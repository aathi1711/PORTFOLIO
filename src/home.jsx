import pdf from './assets/Aathish.pdf'
import profile from './assets/profile.jpg'
const Home =()=>{

   
     return(
        <div className='flex sm:flex-col h-fit md:h-screen font-dedact md:pb-20 justify-center flex-col font-reem font md:flex-row' >
            <div className=' md:p-32 max-sm:flex justify-center   animate-fade delay-500'> 
               <img className='w-96  h-96 max-md:w-48 max-md:h-48 max-md:mt-16 md:ml-5 z-10 rounded-full  bg-white shadow-2xl shadow-sky-500 p-2 object-cover'  src={profile}/>
                </div>
                <div className=' md:mt-24 max-sm:mt-5 md:pl-5 select-none animate-slideOut flex flex-col text-black justify-center items-center md:items-start md:w-1/2 '>
                <p className='text-4xl max-md:text-3xl text-white'>Hi there,</p>
                <h1 className='text-6xl max-md:text-4xl font-bold text-white '> I am <span className='bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent'>Aathish</span></h1>
                <h1 className='text-2xl max-md:text-xl max-md:text-center px-2 text-white font-kanit'>A Full Stack Developer / Building Scalable Web Applications</h1>
                <p className='w-3/4 max-md:text-center mt-2  text-white font-san opacity-90 '>A skilled MERN Stack Developer with a strong foundation in building
                      dynamic, responsive web applications. Proficient in crafting seamless user experiences
                      with React.js, Node.js, Express.js, and MongoDB. Experienced in developing secure, 
                      scalable projects with a focus on modern web technologies.
                </p>
                <div className='flex gap-4 mt-4 font-kanit'>
                    <a href={pdf} target='_blank' className='w-32 duration-200  rounded bg-gradient-to-b  from-orange-500 to-red-600 rounded-full shadow-lg '><button className=' 
                   duration-200 p-2  w-32  text-white '>Check Resume</button></a>
                    <a  className=' duration-200 rounded-full bg-gradient-to-b from-orange-500 to-red-600' href='https://mail.google.com/mail/?view=cm&fs=1&to=aathivdr2004@gmail.com&su=Excited%20to%20Connect%20%E2%80%93%20MERN%20Stack%20Developer%20Opportunity&body=Dear%20Aathish,%0D%0A%0D%0AWe%20came%20across%20your%20profile%20and%20were%20impressed%20by%20your%20skills%20in%20MERN%20stack%20development.%20We%20are%20currently%20looking%20for%20a%20talented%20developer%20like%20you%20to%20join%20our%20team.%0D%0A%0D%0APlease%20let%20us%20know%20your%20availability%20for%20a%20discussion%20regarding%20this%20opportunity.%20Looking%20forward%20to%20connecting%20with%20you!%0D%0A%0D%0ABest%20regards,%0D%0A' target='_blank'><button className=' text-white duration-200 p-2  w-32 rounded '>Hire Me</button></a>
                </div>
            </div>
        </div>
     )
}
export default Home