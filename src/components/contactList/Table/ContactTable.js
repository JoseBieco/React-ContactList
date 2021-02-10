import React from "react";
import Contact from "../Contact";
import TableNav from "./TableNav";

import { useSelector } from "react-redux";


const ContactTable = () => {

    const contacts = useSelector(state => state.contacts);

    return(
        <table>
            <thead>
                <TableNav />
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Telephone</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => {
                    return(
                        <Contact 
                            key={contact.id}
                            contactId={contact.id}
                        />
                    );
                })}
            </tbody>
        </table>
    )

}

export default ContactTable;
