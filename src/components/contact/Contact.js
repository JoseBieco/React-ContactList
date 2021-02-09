import React from "react";
import Header from "../Header";
import Form from "./Form";


const Contact = ({ pageName, setContacts, contacts, pName}) => {
    return(
        <div className="contact">
            <Header pageName={pageName} />
            <Form contacts={contacts} setContacts={setContacts} />
        </div>
    );
}

export default Contact;