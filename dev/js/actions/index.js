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

export const checkCompleted = (itemId) => { 
    return { 
        type: "CHECK_COMPLETED", 
        payload: itemId
    }
}

export const recordDate = (date, itemId) => { 
    return { 
        type: "RECORD_DATE", 
        payload: date,
        id: itemId
    }
}

// filter
export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

// export const toggleTodo = (id) => {
//   return {
//     type: 'TOGGLE_TODO',
//     id
//   }
// }
