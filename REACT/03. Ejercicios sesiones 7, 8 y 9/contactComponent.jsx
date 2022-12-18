import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact, connected, removed }) => {

    function contactConnected() {
        if (contact.isConnected) {
            return (<i onClick={() => connected(contact)} className="bi-toggle-on task-action" style={{ color: 'green' }}></i>)
        } else {
            return (<i onClick={() => connected(contact)} className="bi-toggle-off task-action" style={{ color: 'grey' }}></i>)
        }
    }


    return (

        <tr className='fw-normal'>
            <td className='align-middle'>
                <span className='ms-2'>{contact.name}</span>
            </td>
            <td className='align-middle'>
                <span className='ms-2'>{contact.surname}</span>
            </td>
            <td className='align-middle'>
                <span className='ms-2'>{contact.email}</span>
            </td>
            <td className='align-middle'>
                {contactConnected()}
                <i className="bi-trash task-action" onClick={() => removed(contact)} style={{ color: 'tomato' }}></i></td>
        </tr>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    connected: PropTypes.func.isRequired,
    removed: PropTypes.func.isRequired,    

};


export default ContactComponent;
