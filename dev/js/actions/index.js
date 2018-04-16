export const onAddItem = (item) => { // this is an Action Creator. How is the argument referred to user object?
    return { // this is the action itself or object
        type: "ADD_NAME", // what is this?
        payload: item
    }
}
