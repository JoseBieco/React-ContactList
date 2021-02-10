import React from "react";
import Header from "../Header";
import Form from "./Form";


const Contact = ({ pageName }) => {
    return(
        <div className="contact">
            <Header pageName={pageName} />
            <Form />
        </div>
    );
}

export default Contact;