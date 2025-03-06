import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1 className="contact">Contact us : </h1>
        <form>
          <input type = "text" className="contact-form" placeholder='Enter your name'/>
          <input type = "text" className= "contact-form" placeholder='message'/>
          <button className="contact-btn ">Submit</button>
        </form>
    </div>
  )
}

export default Contact

//SHortcut to create a auto component : rafce