import React from "react";

const FormTextInput = ( {setInputName, setInputPhone, inputName, inputPhone, pName, pPhone } ) => {

    const nameHandler = (e) => {
        setInputName(e.target.value);
    };

    const phoneHandler = (e) => {
        setInputPhone(e.target.value);
    };

    return(
        <div>
            <div className="input-name">
                <input 
                    type="text" 
                    className="input" 
                    placeholder="Name"
                    value={inputName === "" ? pName : inputName}
                    onChange={nameHandler}
                />
            </div>

            <div className="input-phone">
                <input 
                    type="text" 
                    className="input" 
                    placeholder="Telephone"
                    value={inputPhone === "" ? pPhone : inputPhone}
                    onChange={phoneHandler}
                />
            </div>
        </div>
    );
}

export default FormTextInput;
