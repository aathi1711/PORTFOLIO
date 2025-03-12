import React from "react";

const About = () => {
  return (
    <section id='about' className=" text-white py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className=" md:text-5xl text-3xl font-extrabold font-dedact font-bold  bg-gradient-to-r from-sky-300 to-sky-600 bg-clip-text text-transparent mb-4">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed  font-san">
          I'm Aathish, a passionate
          MERN Stack Developer with a strong focus on building modern, scalable, and high-performing web applications.
        </p>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-cyan-400 font-kanit">What I Do</h3>
          <p className="text-gray-300 mt-2 font-san">
            I specialize in developing full-stack applications using <span className="font-semibold">MongoDB, Express.js, React, and Node.js</span>. I love solving complex problems and continuously improving my skills to stay ahead in the tech world.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold font-kanit text-cyan-400">My Strengths</h3>
          <div className="flex justify-center">
          <ul className='flex flex-col gap-5 w-fit text-gray-300 mt-3 '>
    
    <li className='flex gap-2 items-start' ><img src='https://cdn-icons-png.flaticon.com/128/9618/9618791.png' className='h-5 w-5 mt-1'/><span>Writing clean, optimized, and scalable code.</span></li>
    <li className='flex gap-2 items-start'><img src='https://cdn-icons-png.flaticon.com/128/9618/9618791.png' className='h-5 w-5 mt-1'/><span>Building responsive and user-friendly interfaces.</span></li>
    <li className='flex gap-2 items-start'><img src='https://cdn-icons-png.flaticon.com/128/9618/9618791.png' className='h-5 w-5 mt-1'/><span>Integrating TailwindCSS & Bootstrap for sleek designs.</span></li>
    <li className='flex gap-2 items-start'><img src='https://cdn-icons-png.flaticon.com/128/9618/9618791.png' className='h-5 w-5 mt-1'/><span>Working with RESTful APIs & database management.</span></li>
  </ul>
          </div>
          
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold font-kanit text-cyan-400">My Goals</h3>
          <p className="text-gray-300 font-san mt-2">
            My goal is to contribute to innovative projects, learn new technologies, and grow as a software developer. I'm always open to new opportunities and collaborations!
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold font-kanit text-cyan-400">Fun Fact</h3>
          <p className="text-gray-300 font-san mt-2">
            When I’m not coding, I enjoy learning about new tech trends, improving my communication skills, and staying fit!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
