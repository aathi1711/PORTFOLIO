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
       <div className="h-screen   bg-gradient-to-b from-slate-900 to-slate-800  pt-16 font-reem">
       <h1 className='md:text-5xl text-3xl font-bold underline text-amber-400 font-dedact mt-5 text-center  select-none'>Get in Touch</h1>
       <form className="flex flex-col  items-center " onSubmit={handleSubmit}>
        <input 
        type="text"
        name="name"
        className="mt-5 p-2 md:w-96 w-9/12 focus:outline-none rounded border border-slate-400 bg-transparent text-slate-200"
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
        className="mt-5 p-2 md:w-96 w-9/12  focus:outline-none rounded border border-slate-400 bg-transparent text-slate-200"
        required
        placeholder="Enter Your Email"
        />
         <input 
        type="number"
       
        name="phone"
        onChange={handleChange}
        className="mt-5 p-2 md:w-96 w-9/12 focus:outline-none rounded border border-slate-400 bg-transparent text-slate-200"
        required
        placeholder="Enter Your Mobile Number"
        value={formData.phone}/>
        <textarea 
        id="message"
        name="message"
        className="mt-5 p-2 md:w-96 w-9/12 focus:outline-none rounded border border-slate-400 bg-transparent text-slate-200"
        required
        placeholder="Type your Question"
        value={formData.message}
        onChange={handleChange}
        />
        <button type="submit" className="mt-5 text-white  flex justify-center items-center hover:bg-amber-500 hover:border-none h-12 hover:text-black border-gray-500 transition duration-300 p-2 font-bold w-32  rounded  border mb-4">
        {Loading ? <div className="w-5 h-5 border-4 border-t-transparent
            border-slate-500 rounded-full animate-spin" 
            role="status"><span className="sr-only">Loading...</span>
            </div> : 'Send'}
        </button>
        <p className="text-white font-san">© Aathish. All right reserved</p>
       </form>
       </div>
       </>
    )
}
export default Contact;