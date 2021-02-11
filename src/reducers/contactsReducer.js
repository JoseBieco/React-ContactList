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
                    checked: false
                }
            ];

        case "EDIT":
            return state.map((item) => {
                if(item.id === action.payload.id){
                    return {
                        ...item,
                        id: action.payload.id,
                        name: action.payload.name,
                        phone: action.payload.phone,
                        checked: !action.payload.checked
                    }
                }
                return item;
            });


        case "DELETE":
            return state.filter((item) => {
                    if(item.id !== action.payload.id){
                        return item;
                    }
                    return null;
                });
            

        default:
            return state;
    }
}
export default contactsReducer;