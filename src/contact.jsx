import { useState } from "react"
import sendMailApi from "./api";
import Footer from "./footer";

function Contact(){
  const[Loading,setLoading]=useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleSubmit = async(e) =>{
        e.preventDefault()
        setLoading(true)
        await sendMailApi(formData)
        setLoading(false)
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            
          })
      }
    return(
       <>
       <div className=" bg-gradient-to-b from-slate-900 to-slate-800 delay-500 h-screen flex w-screen flex-col justify-center font-reem">
       <h1 className='mb-10 md:text-5xl text-3xl font-bold underline text-amber-400 font-dedact text-center  select-none'>Get in Touch</h1>
       <form className="animate-slideOut flex flex-col w-full  max-sm:w-96 items-center gap-8" onSubmit={handleSubmit}>
        <input 
        type="text"
        name="name"
        className="sm:w-11/12 max-w-96 h-10 focus:outline-none rounded pl-2 border border-slate-400 bg-transparent text-slate-200"
        required
        placeholder="Enter Your Name"
        onChange={handleChange}
        value={formData.name}
        />
        <input 
        type="email"
        
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="sm:w-11/12 max-w-96 h-10 focus:outline-none rounded pl-2 border border-slate-400 bg-transparent text-slate-200"
        required
        placeholder="Enter Your Email"
        />
         <input 
        type="number"
       
        name="phone"
        onChange={handleChange}
        className="sm:w-11/12 max-w-96 h-10 focus:outline-none rounded pl-2 border border-slate-400 bg-transparent text-slate-200"
        required
        placeholder="Enter Your Mobile Number"
        value={formData.phone}/>
        <textarea 
        id="message"
        name="message"
        className="sm:w-11/12 max-w-96 h-10 focus:outline-none rounded pl-2 border border-slate-400 bg-transparent text-slate-200 h-20"
        required
        placeholder="Type your Question"
        value={formData.message}
        onChange={handleChange}
        />
        <button type="submit" className="text-white hover:bg-amber-500 hover:border-none h-12 hover:text-black border-gray-500 transition duration-300 p-2 font-bold w-32  rounded  border mb-4">
        {Loading ? <div className="w-5 h-5 border-4 border-t-transparent 
            border-blue-500 rounded-full animate-spin" 
            role="status"><span className="sr-only">Loading...</span>
            </div> : 'submit'}
        </button>
       </form>
       </div>
       </>
    )
}
export default Contact;