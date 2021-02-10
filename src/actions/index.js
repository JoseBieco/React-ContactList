export const createContact = (contact) => {
    return {
        type: "CREATE",
        payload: contact
    }
}

export const deleteContact = (id) => {
    return {
        type: "DELETE",
        payload: id
    }
}

export const editContact = (contact) => {
    return {
        type: "EDIT",
        payload: contact
    }
}