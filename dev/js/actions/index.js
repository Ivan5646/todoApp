export const onAddItem = (item) => { // this is an Action Creator. 
    return { // this is the action itself or object
        type: "ADD_ITEM", 
        payload: item
    }
}

export const EeditItem = (item) => { // this is an Action Creator. 
    return { // this is the action itself or object
        type: "EDIT_ITEM", 
        payload: item
    }
}

