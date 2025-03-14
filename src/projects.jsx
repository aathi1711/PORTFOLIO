const Projects = ()=>{
    const projects = [
        {
            title:'Gmail Clone',
            description:'Gmail clone website with essential features like sending and receiving emails, managing drafts, trash, and starred messages. The application is secured with JWT authentication and offers a responsive, user-friendly interface',
            tech:['React','MongoDb','Express','NodeJs','Tailwind CSS'],
            githubUrl_fe:'https://github.com/aathi-aathi/new-gmail-frontend.git',
            githubUrl_be:'https://github.com/aathi-aathi/new-gmail-backend.git',
            DeployUrl:'https://gmail-clone-1711.netlify.app'
        },
        {
            title:'URL Shortner',
            description:'A secure URL shortener web application where users can generate, store, and manage short URLs linked to their accounts. Protected by JWT authentication, it ensures data privacy and accessibility anytime, anywhere.',
            tech:['React','MongoDb','Express','NodeJs','Tailwind CSS'],
            githubUrl_fe:'https://github.com/aathi-aathi/shortner-fe.git',
            githubUrl_be:'https://github.com/aathi-aathi/URL-SHORTNER-BACKEND.git',
            DeployUrl:'https://shortly-11.netlify.app/'
        },
        {
            title:'Todo Application',
            description:'Gmail clone website with essential features like sending and receiving emails, managing drafts, trash, and starred messages. The application is secured with JWT authentication and offers a responsive, user-friendly interface',
            tech:['React'],
            githubUrl_fe:' https://reliable-longma-eed964.netlify.app/',
            DeployUrl:'https://github.com/aathi-aathi/REACT-TODO.git'
        },

    ]
    return(
        <div id="projects">
        <h1 className='mb-5 md:text-5xl text-3xl font-bold bg-gradient-to-r from-sky-300 to-sky-600 bg-clip-text text-transparent font-dedact  text-center pt-8 select-none'>My Projects</h1>
            <div className=" animate-fade flex gap-5 justify-center flex-wrap  ">
              {projects.map((val)=>
              <div className="p-8 flex flex-col justify-between border h-96 w-11/12 lg:w-96 bg-gray-800 rounded-xl text-white">
                <div className="">
                    <h1 className="font-semibold text-2xl text-cyan-400">{val.title}</h1>
                    <p className="font-san text-gray-200 ">{val.description}</p>
                </div>
                <div>
                    <div className="flex gap-1 flex-wrap  text-gray-200 justify-end">
                     {val.tech.map((tech)=>
                     <div className="border rounded-full px-2 ">{tech}</div>
                    )}
                    </div>   
                    <div className="flex justify-end mt-5 gap-2 font-semibold">
                        <button className=" rounded h-12 bg-gradient-to-r from-sky-400 to-sky-600 text-sm hover:bg-blue-700 px-1">
                            <a href={val.githubUrl_fe} target="_blank">Source Code (FE)</a></button>
                        <button  className="rounded h-12 w-28 bg-gradient-to-r from-orange-500 to-red-600 text-sm hover:bg-blue-700"><a href={val.DeployUrl} target="_blank">Deployed Link</a></button>
                     {val.githubUrl_be && <button className=" rounded h-12 w-28  bg-gradient-to-r from-sky-400 to-sky-600 text-sm hover:bg-blue-700">
                            <a href={val.githubUrl_be} target="_blank">Source Code (BE)</a></button>}
                    </div>
                </div>
              </div>
            )}
                      
                </div>
        </div>
       
    )
}
export default Projects;