import gmailImg from './assets/gmail-clone.png'
import urlshortImg from './assets/url-shortner.png'
import todoImg from './assets/todo.png'
import './App.css'
const Projects = ()=>{
    return(
        <>
        <div id="projects">
        <h1 className='my-skills-h1'>MY PROJECTS</h1>
            <div className="project-container">
                <div className="project-box">
               <img className='gmail-img' src={gmailImg}/> 
               <h3 className='project-title'>Gmail Clone</h3>
               <div className='used-techs'>
                <div className='tech'>ReactJs</div>
                <div className='tech'>MongoDb</div>
                <div className='tech'>ExpressJs</div>
                <div className='tech'>NodeJs</div>
                <div className='tech'>Jwt</div>
                <div className='tech'>Bootstrap</div>
               </div>
               <button className='view-app'><a href='https://gmailclone1705.netlify.app/' target='_blank'>View Application</a></button>    
                </div>
                <div className="project-box">
               <img className='gmail-img' src={urlshortImg}/>  
               <h3 className='project-title'>Url Shortner</h3>
               <div className='used-techs'>
                <div className='tech'>ReactJs</div>
                <div className='tech'>MongoDb</div>
                <div className='tech'>ExpressJs</div>
                <div className='tech'>NodeJs</div>
                <div className='tech'>Jwt</div>
                <div className='tech'>Bootstrap</div>
               </div>
               <button className='view-app'><a href='https://jolly-florentine-713b44.netlify.app/' target='_blank'>View Application</a></button>       
                </div>
                <div className="project-box">
               <img className='gmail-img' src={todoImg}/>  
               <h3 className='project-title'>Todo App</h3>
               <div className='used-techs'>
                <div className='tech'>ReactJs</div>
                
               </div>
               <button className='view-app'><a href='https://reliable-longma-eed964.netlify.app/' target='_blank'>View Application</a></button>       
                </div>
            </div>
        </div>
        </>
    )
}
export default Projects;