import React from "react";
import { useDispatch } from "react-redux";

const FormTextInput = ( { inputName, inputPhone, contactEditing, contactId } ) => {

    const dispatch = useDispatch(state => state.form);

    const nameHandler = (e) => {

        dispatch({
            type: "SET",
            payload: {
                id: contactId,
                name: e.target.value,
                phone: inputPhone,
                editing: contactEditing
            }
        });
    };

    const phoneHandler = (e) => {
   
        dispatch({
            type: "SET",
            payload: {
                id: contactId,
                name: inputName,
                phone: e.target.value,
                editing: contactEditing
            }
        });
    };

    return(
        <div>
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
        </div>
    );
}

export default FormTextInput;
