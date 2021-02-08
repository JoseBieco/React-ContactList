import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

const Form = ({ contacts, setContacts }) => {

    const [inputName, setInputName] = useState("");
    const [inputPhone, setInputPhone] = useState("");

    const history = useHistory();

    const formHandler = (e) => {
        e.preventDefault();
    };

    const nameHandler = (e) => {
        setInputName(e.target.value);
    };

    const phoneHandler = (e) => {
        setInputPhone(e.target.value);
    };

    const exitHandler = () => {
        setInputName("");
        setInputPhone("");
        changePage("/");
    }

    // Fazer um aqrquivo Util.js com func generalizadas
    function changePage(path){
        history.push(path);
    }

    const submitHandler = () => {
        setContacts([
            ...contacts,
            {name: inputName, phone: inputPhone, checked: false},
        ]);
        //changePage("/");
    };

    useEffect(() => {
        setInputName("");
        setInputPhone("");
    },[contacts]);

    return(
        <form onSubmit={formHandler} className="form">
            <div className="inputs">
                <div className="input-name">
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="Name"
                        value={inputName}
                        onChange={nameHandler}
                    />
                </div>

                <div className="input-phone">
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="Telephone"
                        value={inputPhone}
                        onChange={phoneHandler}
                    />
                </div>

                <div className="input-submit">
                    <button 
                        type="submit" 
                        className="submit-btn"
                        onClick={submitHandler}    
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
