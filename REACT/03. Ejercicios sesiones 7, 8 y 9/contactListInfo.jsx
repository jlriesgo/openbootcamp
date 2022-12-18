import React, { useState, useEffect } from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contactComponent';
import ContactForm from '../pure/forms/contactForm';


const ContactListInfo = () => {

    const contactList = [
        {
            name:'Javier',
            surname:'Rodriguez',
            email:'javirog@gmail.com',
            isConnected:true
        },
        {
            name:'Pedro',
            surname:'Perez',
            email:'perezped@gmail.com',
            isConnected:true
        },
        {
            name:'Maria',
            surname:'López',
            email:'lopezmar@gmail.com',
            isConnected:true
        },
        {
            name:'Lucas',
            surname:'Ordoñez',
            email:'ordoluc@gmail.com',
            isConnected:true
        }
    ]


    //Añadimos con useState los contactos creados

    const [contacts, setcontacts] = useState(contactList);    
    

    console.log(contacts.map((contact) => {
        console.log(contact)
    }))
   

    function connectedContact(contact) {
        console.log('Contact info: ', contact);
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts]
        tempContact[index].isConnected = !tempContact[index].isConnected
        setcontacts(tempContact)
    }

    function removeContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact.splice(index, 1);
        setcontacts(tempContact);
    }

    function addContact(contact){
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact.push(contact);
        setcontacts(tempContact);
    }

    return (

        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your Contact List:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Surname</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Connected</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*TO DO: Aplicar un for/map para renderizar una lista*/}
                                {contacts.map((contact, index) => {
                                    return (
                                        <ContactComponent
                                            key={index}
                                            contact={contact}
                                            connected={connectedContact}
                                            removed={removeContact}>
                                        </ContactComponent>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <ContactForm add={addContact}></ContactForm>


        </div>



    );
};


export default ContactListInfo;
