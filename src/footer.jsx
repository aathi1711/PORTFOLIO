import './App.css'
const Footer= ()=>{
    return(
        <div className='bg-slate-900 h-48 flex justify-center items-center flex-col gap-4 text-white'>
             <div className="flex gap-4">
             <a href='https://wa.me/8270224796?text=Hello' target='_blank'>
             <i className="fa-brands fa-whatsapp fa-2xl hover:-translate-y-1 transition duration-250" ></i></a>
             <a href='https://www.linkedin.com/in/aathish11' target='_blank'>
             <i className="fa-brands fa-linkedin fa-2xl hover:-translate-y-1 transition duration-250" ></i></a>
             <a href='https://www.instagram.com/itzz.aathi/' target='_blank'>
             <i className="fa-brands fa-instagram fa-2xl hover:-translate-y-1 transition duration-250" ></i></a>
             <a href='https://github.com/aathi-aathi' target='_blank'>
             <i className="fa-brands fa-github fa-2xl hover:-translate-y-1 transition duration-250" ></i></a>
       
       
        
        </div>
        <p>Aathish Arul © 2024</p>
        </div>
       
    )
}
export default Footer;
// .footer{
//     background-color: rgb(8, 2, 36);
//     height: 10rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     gap: 2rem;
//    color: white;
//   }