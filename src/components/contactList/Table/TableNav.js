import React from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


const TableNav = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const contacts = useSelector(state => state.contacts);

    function changePage(path){
        history.push(path);
    }

    const newContactHandler = () => {
        changePage("/contact");
    }

    const deletHandler = () => {
       const delContacts = contacts.filter((contact) => contact.checked === false)
        
        delContacts.map(delContact => {
            dispatch({
                type: "DELETE",
                payload: {
                    id: delContact.id
            }});

            return null;
        });
        
    }

    const editHandle = () => {
       var list = contacts.filter((contact) => contact.checked !== false);

       if(list.length > 1){
           alert("You can just edit one contact!");
       }else if(list.length === 0){
            alert("No contact selected");
       }else{
           dispatch({
                type: "SET",
                payload: list[0]
            });

           changePage("/contact");
       }
    }

    return(
        
        <tr>
            <th scope="row"><button onClick={newContactHandler}>New Contact</button></th>
            <th scope="row"><button onClick={editHandle}>Edit Contact</button></th>
            <th scope="row"><button onClick={deletHandler}>Delete Contact</button></th>
        </tr>
        
    )
}

export default TableNav;
