import { useState } from "react"

function Contact(){
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
      const handleSubmit = (e) =>{
        e.preventDefault()
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            
          })
      }
    return(
       <>
       <div id="contact">
       <h1 className='my-skills-h1'>CONTACT</h1>
       <form className="query-form" onSubmit={handleSubmit}>
        <input 
        type="text"
        
        name="name"
        className="form-input"
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
        className="form-input"
        required
        placeholder="Enter Your Email"
        />
         <input 
        type="number"
       
        name="phone"
        onChange={handleChange}
        className="form-input"
        required
        placeholder="Enter Your Mobile Number"
        value={formData.phone}/>
        <textarea 
        id="message"
        name="message"
        required
        placeholder="Type your Question"
        value={formData.message}
        onChange={handleChange}
        />
        <button type="submit" className="submit-btn">submit</button>
       </form>
      
       </div>
       </>
    )
}
export default Contact