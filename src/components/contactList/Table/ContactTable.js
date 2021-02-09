import React from "react";
import Contact from "../Contact";
import TableNav from "./TableNav";


const ContactTable = ({ contacts, setContacts }) => {


    return(
        <table>
            <thead>
                <TableNav 
                    contacts={contacts}
                    setContacts={setContacts}
                />
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Telephone</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => {
                    return(
                        <Contact 
                            pName={contact.name} 
                            pPhone={contact.phone} 
                            checked={contact.checked}
                            key={contact.name}
                            contacts={contacts}
                            setContacts={setContacts}
                        />
                    );
                })}
            </tbody>
        </table>
    )

}

export default ContactTable;
