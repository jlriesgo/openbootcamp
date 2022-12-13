import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contactComponent';


const ContactInfoComponent = () => {

    const defaultContact = new Contact('Javier','Rodriguez','javirog@gmail.com',true)
    
    return (
        <div>
           <div>
                <h1>Información de contacto:</h1>
            </div>
            
            <ContactComponent contact={defaultContact}></ContactComponent>
            
            
        </div>
    );
};


export default ContactInfoComponent;
