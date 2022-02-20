import * as actions from "./actionTypes"

export const addAuthors = result => ({
    type: actions.FETCH_REMOTE_DATA_SUCCESS,
    payload: result
})
