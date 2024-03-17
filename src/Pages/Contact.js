import React,{useRef} from 'react'
import '../css/Contact.css'
import emailjs from '@emailjs/browser';
import Banner from './banner-fruits.jpg'
function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g4bml5i', 'template_8t3b84o', form.current, {
        publicKey: 'e6iB7-u7UFvhAfglz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Your Message is Successfully Sended.")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='contact'>
      <div className="leftSide" style={{ backgroundImage: `url(${Banner})`}}></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form ref={form} id='contact-form' method='POST' onSubmit={sendEmail}>
          <label htmlFor='name'>Name : </label>
          <input type='text' name='name' placeholder='Enter your name' required/>
          <label htmlFor='email'>E-Mail : </label>
          <input type='text' name='email' placeholder='Enter your e-mail' required/>
          <label htmlFor='message'>Message : </label>
          <textarea rows="6" placeholder='Enter your message' required name="message"></textarea>
          <button>Send</button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact
