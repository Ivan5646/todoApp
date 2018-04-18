export const onAddItem = (item) => { // this is an Action Creator. 
    return { // this is the action itself or object
        type: "ADD_ITEM", 
        payload: item
    }
}

export const deleteItem = (itemId) => { 
    return { 
        type: "DELETE_ITEM", 
        payload: itemId
    }
}

export const editItem = (item) => { 
    return { 
        type: "EDIT_ITEM", 
        payload: item
    }
}

