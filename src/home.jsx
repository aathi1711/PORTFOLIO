import './App.css'
import img from './profile.jpg'
import pdf from './Aathish.pdf'
const Home =()=>{
     return(
        <div id='home'>
            <div className='intro'>
                <p>Hi there,</p>
                <h1> I am Aathish</h1>
                <ul className='dynamic-txt'>
                    <li><span>A WEB DEVELOPER</span></li>
                    <li><span>A FULL STACK DEVELOPER</span></li>
                    <li><span>A MERN STACK DEVELOPER</span></li>
                </ul>
                <p className='description'>A skilled MERN Stack Developer with a strong foundation in building dynamic, responsive web applications. Proficient in crafting seamless user experiences with React.js, Node.js, Express.js, and MongoDB. Experienced in developing secure, scalable projects with a focus on modern web technologies.
                </p>
                <div className='btn'>
                    <a href={pdf} target='_blank'><button>Check Resume</button></a>
                    <a href='#about'><button>About me</button></a>
                </div>
            </div>
            <div className='profile'><img src={img}/></div>
        </div>
     )
}
export default Home