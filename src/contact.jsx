import { useState } from "react"
import sendMailApi from "./api";

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
       <div className="bg-gradient-to-l from-blue-900 to-indigo-900" id="contact">
       <h1 className='mb-4 text-5xl font-bold text-sky-400 text-center underline pt-4 '>CONTACT</h1>
       <form className="flex flex-col items-center gap-8 " onSubmit={handleSubmit}>
        <input 
        type="text"
        
        name="name"
        className="w-11/12 max-w-96 h-8 focus:outline-none rounded pl-2"
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
        className="w-11/12 max-w-96 h-8 focus:outline-none rounded pl-2"
        required
        placeholder="Enter Your Email"
        />
         <input 
        type="number"
       
        name="phone"
        onChange={handleChange}
        className="w-11/12 max-w-96 h-8 focus:outline-none rounded pl-2"
        required
        placeholder="Enter Your Mobile Number"
        value={formData.phone}/>
        <textarea 
        id="message"
        name="message"
        className="w-11/12 max-w-96 h-8 focus:outline-none rounded pl-2 h-20"
        required
        placeholder="Type your Question"
        value={formData.message}
        onChange={handleChange}
        />
        <button type="submit" className="text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300 p-2 font-bold w-32 bg-indigo-500 rounded  border mb-4">
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