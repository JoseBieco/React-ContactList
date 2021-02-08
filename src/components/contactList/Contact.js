import React from "react";

const Contact = ({ pName, pPhone, checked, contacts, setContacts }) => {

    const checkedHandle = () => {
        setContacts(contacts.map((contact) => {
            if(contact.name === pName){
                return {
                    ...contact, checked: !contact.checked
                }
            }
            return contact;
        }))
    }

    return(
        <tr>
            <td>
                <input type="checkbox" checked={checked} onChange={checkedHandle} />
            </td>
            <td className="label name">{pName}</td>
            <td className="label phone">{pPhone}</td>
        </tr>
    )
}

export default Contact;
