import React from "react";
import { useHistory } from 'react-router-dom';


const TableNav = ({ contacts, setContacts }) => {

    const history = useHistory();

    function changePage(path){
        history.push(path);
    }

    const newContactHandler = () => {
        changePage("/contact");
    }

    const deletHandler = () => {
        setContacts(contacts.filter((contact) => contact.checked === false))
    }

    const editHandle = () => {
       var list = contacts.filter((contact) => contact.checked !== false);

       if(list.length > 1){
           alert("You can just edit one contact!");
           //TODO: Crate POP-UP
       }else if(list.length === 0){
            alert("No contact selected");
       }else{
           setContacts(contacts.map((contact) => {
               if(contact.checked === true){
                   return {
                       ...contact, editing: true
                   }
               }
               return contact;
           }))
           changePage("/contact");
       }
    }

    return(
        <div className="table-nav">
            <tr>
                <th scope="row"><button onClick={newContactHandler}>New Contact</button></th>
                <th scope="row"><button onClick={editHandle}>Edit Contact</button></th>
                <th scope="row"><button onClick={deletHandler}>Delet Contact</button></th>
            </tr>
        </div>
    )
}

export default TableNav;
