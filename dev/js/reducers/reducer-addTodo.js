export default function(state=[], action) {
    switch(action.type) {
        case "ADD_NAME": // type of the action. 
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}