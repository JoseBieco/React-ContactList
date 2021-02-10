import React from "react";
import { useHistory } from "react-router-dom";
import FormTextInput from "./FormTextInput";
import { useSelector ,useDispatch } from "react-redux";


const Form = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);
    const editing = useSelector(state => state.form);

    const history = useHistory();


    const formHandler = (e) => {
        e.preventDefault();
    };

    const exitHandler = () => {
        dispatch({
            type: "SET",
            payload: {
            name: "",
            phone: "",
            editing: false
        }});
        changePage("/");
    }

    function changePage(path){
        history.push(path);
    }

    const submitEditHandler = () => { 

        changePage("/");
    };

    const submitHandler = () => {
        dispatch({
            type: "CREATE",
            payload: {
            name: "Jose",
            phone: "996363488",
        }});

        dispatch({
            type: "SET",
            payload: {
            name: "",
            phone: "",
            editing: false
        }});
        
    };
    
    return(
        <form onSubmit={formHandler} className="form">
            <div className="inputs">
               <FormTextInput  
                    inputName={editing.name} 
                    inputPhone={editing.phone}
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
