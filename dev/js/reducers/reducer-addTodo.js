export default function(state=[], action) {
    switch(action.type) {
        case "ADD_NAME": // type of the action. It was created in actions
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}