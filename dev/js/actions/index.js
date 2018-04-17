export const onAddItem = (item) => { // this is an Action Creator. 
    return { // this is the action itself or object
        type: "ADD_ITEM", 
        payload: item
    }
}

export const deleteItem = (itemId) => { // this is an Action Creator. 
    return { // this is the action itself or object
        type: "DELETE_ITEM", 
        payload: itemId
    }
}

