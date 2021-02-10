import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Contact = ( props ) => {

    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    const thisConatact = contacts.filter(contact => contact.id === props.contactId)[0];

    const checkedHandle = () => {
        dispatch(contacts.map((contact) => {
            if(contact.id === props.contactId){
                return {
                    type: "EDIT",
                    payload: thisConatact
                }
            }
            return contact;
        }))
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
