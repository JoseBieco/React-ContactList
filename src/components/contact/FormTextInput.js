import React from "react";
import { useDispatch } from "react-redux";

const FormTextInput = ( { inputName, inputPhone } ) => {

    const dispatch = useDispatch(state => state.form);

    const nameHandler = (e) => {

        dispatch({
            type: "SET",
            payload: {
                name: e.target.value,
                phone: inputPhone,
            }
        });
    };

    const phoneHandler = (e) => {
   
        dispatch({
            type: "SET",
            payload: {
                name: inputName,
                phone: e.target.value,
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
