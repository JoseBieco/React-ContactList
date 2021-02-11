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
        dispatch({
            type: "SET",
            payload: {
                name: "",
                phone: "",
                editing: false
            }
        });
        changePage("/contact");
    }

    const deletHandler = () => {
       const delContacts = contacts.filter((contact) => contact.checked === true)
        
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
        var list = contacts.filter((contact) => contact.checked === true);

        if(list.length > 1){
            alert("You can just edit one contact!");
        }else if(list.length <= 0){
            alert("No contact selected");
        }else{
            dispatch({
                type: "SET",
                payload: {
                    id: list[0].id,
                    name: list[0].name,
                    phone: list[0].phone,
                    editing: true
                }
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
