import React from "react";
import Header from "../Header";
import ContactTable from "./Table/ContactTable";


const ContactList = ({ pageName }) => {

    return(
        <div className="conatactList">
            <Header pageName={pageName} /> 
            <ContactTable />
        </div>
    )
}

export default ContactList;