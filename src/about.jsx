import './App.css'
function About(){
    return(
        <><div id="about">
     <h1 className='my-skills-h1'>MY SKILLS</h1>
   
    <ul className='skill-list'>
        <li className="skill-html">
            <p>HTML</p>
            <p style={{color:'black'}}>90%</p>
        </li>
        <li className="skill-css"><p>CSS</p>
        <p style={{color:'black'}}>80%</p></li>
        <li className="skill-js"><p>JavaScript</p>
        <p style={{color:'black'}}>90%</p></li>
        <li className="skill-react"><p>React</p>
        <p style={{color:'black'}}>90%</p></li>
        <li className="skill-mb"><p>MongoDB</p>
        <p style={{color:'black'}}>80%</p></li>
        <li className="skill-msql"><p>MySQL</p>
        <p style={{color:'black'}}>70%</p></li>
        <li className="skill-node"><p>Node.js</p>
        <p style={{color:'black'}}>80%</p></li>
        <li className="skill-express"><p>Express</p>
        <p style={{color:'black'}}>80%</p></li>
        <li className="skill-postman"><p>PostMan</p>
        <p style={{color:'black'}}>70%</p></li>
     </ul>
     
        </div>
        </>
    )
}
export default About