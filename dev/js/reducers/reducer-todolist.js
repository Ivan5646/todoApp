const inittialState = [
    {
        id: 1,
        name: "Learn React.js",
        description: "learn react.js and redux, build an app",
        due_date: "05.05.18",
        complete_date: "",
        priority: "high",
    },
    {
        id: 2,
        name: "Learn Node.js",
        description: "create a server app",
        due_date: "20.06.18",
        complete_date: "",
        priority: "normal",
    }
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
    }
    return state;
}