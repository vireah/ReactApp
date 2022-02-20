import * as actions from "./actionTypes"

export const addCourses = result => ({
    type: actions.FETCH_REMOTE_DATA_SUCCESS,
    payload: result
})

export const addCourse = result => ({
    type: actions.ADD_COURSE,
    payload: result
})