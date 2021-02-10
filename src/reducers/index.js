import reducer from "./contactsReducer";
import formReducer from "./formReducer";
import { combineReducers } from "redux";

const combinedReducer = combineReducers({
    contacts: reducer,
    form: formReducer
})

export default combinedReducer;