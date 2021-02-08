import React from "react";
import { useHistory } from 'react-router-dom';

const TableNav = ({ contacts }) => {

    const history = useHistory();

    function changePage(path){
        history.push(path);
    }

    const newContactHandler = () => {
        changePage("/contact");
    }

    return(
        <div className="table-nav">
            <tr>
                <th scope="row"><button onClick={newContactHandler}>New Contact</button></th>
                <th scope="row"><button>Edit Contact</button></th>
                <th scope="row"><button>Delet Contact</button></th>
            </tr>
        </div>
    )
}

export default TableNav;
