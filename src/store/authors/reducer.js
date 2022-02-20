import * as actions from "./actionTypes"
const authorsReducer = (state = [], action) => {
    switch(action.type) {
        case actions.FETCH_REMOTE_DATA_SUCCESS :
            if (action.payload) {
                return action.payload
            }
            break;
        default :
            return state;
    }
    return state;
}

export default authorsReducer;