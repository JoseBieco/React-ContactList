import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FormTextInput from "./FormTextInput";


const Form = ({ contacts, setContacts }) => {
//HOC

    const [inputName, setInputName] = useState("");
    const [inputPhone, setInputPhone] = useState("");

    const history = useHistory();

    // Editing
    const editContact = contacts.filter((contact) => contact.editing === true)[0];
    var isEditing = false;

    //var isEditing = editContact !== undefined;

    if(editContact !== undefined){
        isEditing = true;
    }

    const formHandler = (e) => {
        e.preventDefault();
    };

    const exitHandler = () => {
        setInputName("");
        setInputPhone("");
        changePage("/");
    }

    function changePage(path){
        history.push(path);
    }

    const submitEditHandler = () => {
        setContacts(contacts.map((contact) => {
            if(contact.name === editContact.name){
                isEditing = false;
                return {
                    ...contact, 
                    name: inputName === "" ? editContact.name: inputName, 
                    phone: inputPhone === "" ? editContact.phone : inputPhone, checked: false ,editing: false
                }
            }
            return contact;
        }));

        changePage("/");
    };

    const submitHandler = () => {
        setContacts([
            ...contacts,
            {name: inputName, phone: inputPhone, checked: false, editing: false},
        ]);
    };

    useEffect(() => {
        setInputName("");
        setInputPhone("");
    },[contacts]);


    return(
        <form onSubmit={formHandler} className="form">
            <div className="inputs">
               <FormTextInput 
                    setInputName={setInputName} 
                    setInputPhone={setInputPhone} 
                    inputName={inputName} 
                    inputPhone={inputPhone}
                    pName={isEditing === true ? editContact.name : inputName}
                    pPhone={isEditing === true ? editContact.phone : inputPhone}
                />

                <div className="input-submit">
                    <button 
                        type="submit" 
                        className="submit-btn"
                        onClick={isEditing ? submitEditHandler : submitHandler}  
                    >Save</button>
                </div>

                <div className="input-exit">
                    <button 
                        type="submit" 
                        className="submit-btn"
                        onClick={exitHandler}
                    >Exit</button>
                </div>

            </div>
        </form>
    );
}

export default Form;
