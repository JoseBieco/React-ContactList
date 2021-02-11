import React from "react";
import { useHistory } from "react-router-dom";
import FormTextInput from "./FormTextInput";
import { useSelector ,useDispatch } from "react-redux";


const Form = () => {
    const dispatch = useDispatch();
    const form = useSelector(state => state.form);
    const contacts = useSelector(state => state.contacts);

    const history = useHistory();


    const formHandler = (e) => {
        e.preventDefault();
    };

    const exitHandler = () => {
        dispatch({
            type: "SET",
            payload: {
                id: null,
                name: "",
                phone: "",
                editing: false
        }});
        changePage("/");
    }

    function changePage(path){
        history.push(path);
    };

    const submitHandler = () => {
        if(form.editing === false){
            dispatch({
                type: "CREATE",
                payload: {
                    name: form.name,
                    phone: form.phone,
                }
            });
        }else {
            dispatch({
                type: "EDIT",
                payload: {
                    id: form.id,
                    name: form.name,
                    phone: form.phone,
                    checked: false
                }
            });
        }

        dispatch({
            type: "SET",
            payload: {
                id: null,
                name: "",
                phone: "",
                editing: false
            }
        });
    };

    return(
        <form onSubmit={formHandler} className="form">
            <div className="inputs">
               <FormTextInput  
                    inputName={form.name} 
                    inputPhone={form.phone}
                    contactEditing={form.editing}
                    contactId={form.id}
                />

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
