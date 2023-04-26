import React from 'react';
import './contact.css'

const Contact = () => {
  return (
    <>
      <div className='contact-container max-width '>
        <h1 className='our-cont'>Fill Form to Contact Us </h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.148605795953!2d77.12019231500746!3d28.565299982444404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c6101174b7d%3A0x4b9048144e0095e8!2sIndigo%20Terminal%201%20IGI%20Airport!5e0!3m2!1sen!2sin!4v1679747821668!5m2!1sen!2sin"
          width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" ></iframe>
        <form method='POST' action='https://formspree.io/f/mqkodnaa' className='form-class'>
          <input type='text' name='name' placeholder='Name:' className='name_input' required autoComplete='off' />
          <input type='email' name='mail' placeholder='E-mail:' className='mail_input' required autoComplete='off' />
          <textarea rows='4' cols='20' name='msg' className='textarea_input' placeholder='message:' />
          <button className=' form-btn' type='submit'>send </button>
        </form>
      </div>
    </>
  )
}

export default Contact