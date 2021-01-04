import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

    function handlerName(event) {
        setName(event.target.value);
    }

    function handlerEmail(event) {
        setEmail(event.target.value);
    }

    function handlerSubject(event) {
        setSubject(event.target.value);
    }

    function handlerMessage(event) {
        setMessage(event.target.value);
    }

    function handlerSubmit(event) {
        event.preventDefault();

        let templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        };

        emailjs.send('service_szhr799', 'template_cm8ckk8', templateParams, 'user_zdE56GZObc5nqXSLE75lL');

        resetForm();
    }

    function resetForm() {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    function handleChange(e) {
        e.preventDefault();

        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case 'name':
            formErrors.name = value.length < 1 ? 'Please enter your name.' : '';
            setName(value);
            break;
          case 'email':
            formErrors.email = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
            setEmail(value);
            break;
          case 'subject':
            formErrors.subject = value.length < 1 ? 'Please enter a subject.' : '';
            setSubject(value);
            break;
          case 'message':
            formErrors.message = value.length < 1 ? 'Please enter a message' : '';
            setMessage(value);
            break;
          default:
            break;
        }
        this.setState({ formErrors, [name]: value });
      };

    return (
        <div className='container'>
            <form id='contact-form' className="form-group mt-2" onSubmit={handlerSubmit}>
                <div className='row'>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        className="form-control mt-2"
                        onChange={handleChange}
                        placeholder='Nome'
                    />

                    <input
                        type='email'
                        name='email'
                        value={email}
                        className="form-control mt-2"
                        onChange={handleChange}
                        placeholder='Email'
                    />
                </div>
                <div className='row'>
                    <input
                        type='subject'
                        name='subject'
                        className="form-control mt-2"
                        value={subject}
                        onChange={handleChange}
                        placeholder='Assunto'
                    />
                </div>
                <div className='row'>
                    <textarea
                        name='message'
                        className="form-control mt-2"
                        value={message}
                        onChange={handleChange}
                        placeholder='Mensagem :)'
                        rows={6}
                    />
                </div>
                <div className='row'>
                    <button type='submit' className="btn btn-primary custom-btn mt-2">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
    