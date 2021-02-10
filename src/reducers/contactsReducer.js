let lastId = 0;


const contactsReducer = (state = [], action) => {
    switch(action.type){
        case "CREATE":
            return[
                ...state,
                {
                    id: ++lastId,
                    name: action.payload.name,
                    phone: action.payload.phone,
                    marked: false,
                    editing: false
                }
            ];

        case "DELETE":
            return state.filter(contact => contact.id !== action.payload.id);

        default:
            return state;
    }
}
export default contactsReducer;









// const initialState = {
//     contacts: [],
//     contact: {}
// }

// const contactsReducer = (state = initialState, action) => {
//     switch(action.type){
//         case "CREATE":
//             return console.log(state);

//         case "DELETE":
//             return console.log(state);

//         case "EDIT":
//             return console.log(state);

//         default:
//             return state;
//     }
// };

// export default contactsReducer;