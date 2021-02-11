import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Contact = ( { contactId } ) => {

    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    const thisConatact = contacts.filter(contact => contact.id === contactId)[0];

    const checkedHandle = () => {
        const editContact = contacts.filter((contact) => contact.id === contactId)[0];
        

        dispatch({
            type: "EDIT",
            payload: editContact
        })
        
    }

    return(
        <tr>
            <td>
                <input type="checkbox" checked={thisConatact.checked} onChange={checkedHandle} />
            </td>
            <td className="label name">{thisConatact.name}</td>
            <td className="label phone">{thisConatact.phone}</td>
        </tr>
    )
}

export default Contact;
