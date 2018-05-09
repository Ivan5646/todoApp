const inittialState = [];

export default function(state=inittialState, action) {
    switch(action.type) {
        case "ADD_ITEM": // type of the action. 
        return [
            ...state,
            action.payload
        ];
        case "DELETE_ITEM": 
        return state.filter((item) => {
                    if (item.id != action.payload) {
                        return true;
                    }
                    return false;
                });
        case "EDIT_ITEM": 
        return state.map((obj) => {
            if(obj.id == action.payload.id) {
                obj = action.payload;
            }
            return obj;
        });
        case "CHECK_COMPLETED":  // find the required item by id and change its completed property 
        return state.map((obj) => {
            if(obj.id == action.payload) { 
                obj.completed = !obj.completed;
            }
            return obj;
        });
        case "RECORD_DATE": 
        return state.map((obj) => {
            if (obj.id == action.id) {
                obj.complete_date = action.payload
            }
            return obj;
        });
        case "UPDATE_OVERDUE": 
        return state.map((obj) => {
            if (obj.id == action.payload) {
                obj.overdue = true
            }
            return obj;
        }); 
    }
    return state;
}