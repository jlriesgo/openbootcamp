import React from 'react';
import PropTypes from "prop-types";
import { useRef } from 'react';
import { Contact } from '../../../models/contact.class';

const ContactForm = ({ add }) => {

    const nameRef = useRef('');
    const surnameRef = useRef('')
    const emailRef = useRef('')
    const connectedRef = useRef(false)

    function addContact(e) {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            surnameRef.current.value,
            emailRef.current.value,
            connectedRef.current.value,           
            );
            console.log(`está conectada? ${connectedRef.current.value}`)
            add(newContact)

    }


    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Contact Name'/>
                <input ref={surnameRef} id='inputSurname' type='text' className='form-control form-control-lg' required placeholder='Contact Surname'/>
                <input ref={emailRef} id='inputEmail' type='email' className='form-control form-control-lg' required placeholder='Email contact'/>
                <label htmlFor='selectConnected' className='sr-only'>Is connected?</label>
                <select ref={connectedRef} defaultValue={false} id='selectLevel'>                    
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>                
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>

        </form>
    );
}

export default ContactForm;

ContactForm.propTypes ={
    add: PropTypes.func.isRequired,
}
