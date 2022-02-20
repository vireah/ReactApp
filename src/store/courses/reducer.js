import * as actions from "./actionTypes"
const coursesReducer = (state = [], action) => {
    console.log(state,"state")
    switch(action.type) {
        case actions.ADD_COURSE :
            console.log(action,"action222")
                return [...state, action.payload]
            break;
        case actions.FETCH_REMOTE_DATA_SUCCESS :
            console.log(action.payload !== state ,"action")
            if (action.payload !== state ) {
                return action.payload
            }
        break;
        default :
            return state;
    }
    console.log(state,"state")
    // return state;
}

export default coursesReducer;