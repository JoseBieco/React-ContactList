import React from "react";
import Header from "../Header";
import ContactTable from "./Table/ContactTable";


const ContactList = ({ pageName, contacts, setContacts }) => {

    return(
        <div className="conatactList">
            <Header pageName={pageName} /> 
            <ContactTable contacts={contacts} setContacts={setContacts}/>
        </div>
    )
}

export default ContactList;