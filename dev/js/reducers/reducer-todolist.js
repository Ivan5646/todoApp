var testDate = new Date();
var testDueDate = new Date('2018-08-20T10:20:30Z');
var testDueDate2 = new Date('2018-03-20T10:20:30Z');
var testCompleteDate = new Date('2018-06-20T10:20:30Z');

const inittialState = [

];

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

    }
    return state;
}