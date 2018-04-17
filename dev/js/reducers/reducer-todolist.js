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


// function checkItemId(item) {
//     if (item.id != itemId) {
//         return true;
//     }
//     return false;
// }


export default function(state=inittialState, action) {
    switch(action.type) {
        case "ADD_ITEM": // type of the action. 
        return [
            ...state,
            action.payload
        ];
        case "DELETE_ITEM": 
        return 
            state.filter((item) => {
                if (item.id != action.payload) {
                    return true;
                }
                return false;
            })

    }
    return state;
}