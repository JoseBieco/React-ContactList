import React from "react";
import Contact from "../Contact";
import TableNav from "./TableNav";

const ContactTable = ({ contacts, setContacts }) => {
    return(
        <table>
            <thead>
                <div className="table-nav-menu">
                    <TableNav contacts={contacts}/>
                </div>
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
                            key={(contact.name, contact.phone)}
                        />
                    );
                })}
            </tbody>
        </table>
    )

}

export default ContactTable;
