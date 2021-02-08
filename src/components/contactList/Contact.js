import React from "react";

const Contact = ({ pName, pPhone, checked }) => {

    return(
        <tr>
            <td>
                <input type="checkbox" checked={checked} />
            </td>
            <td className="label name">{pName}</td>
            <td className="label phone">{pPhone}</td>
        </tr>
    )
}

export default Contact;
