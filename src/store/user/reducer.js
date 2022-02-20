import * as actions from "./actionTypes"
const initialState = {
    isAuth: false,
    name: '',
    email: '',
    token: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.ADD_TOKEN :
            return [...state,  action.payload.token]
            break;
        default :
            return state;
    }
    return state;
}

export default userReducer;