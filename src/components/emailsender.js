    import React, { useRef } from 'react';
    import emailjs from '@emailjs/browser';

    const Emailsender = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceId = 'service_sqqf5yn';
        const templateId = 'template_sucquet';
        const userId = 'u_J0HG_RIfjVEMLl5';
        const receiverEmail = '2021eeb1201@iitrpr.ac.in'; // Replace with the desired email address
      
        const templateParams = {
          to_email: receiverEmail,
          from_name: e.target.user_name.value,
          from_email: e.target.user_email.value,
          message: e.target.message.value,
        };
      
        emailjs.send(serviceId, templateId, templateParams, userId)
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        </form>
    );
    };

    export default Emailsender;