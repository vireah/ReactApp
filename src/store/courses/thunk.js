import axios from 'axios';
import { getCoursesListAction } from './actionCreators';

export const handleGetCoursesList = (action) => async (dispatch, getState) => {
    const response = await axios({
        method: 'GET',
        url: 'http://localhost:3000/courses/all',
    });

    if (response.status === 200) {
        dispatch(action(response.data.result));
    }
};

export const createNewCourse =
	(course, token) => async (dispatch, getState) => {
        const response = await axios({
            method: 'POST',
            url: 'http://localhost:3000/courses/add',
            data: course,
            headers: { Authorization: token },
        });

        if (response.status === 201) {
            dispatch(handleGetCoursesList(getCoursesListAction));
        }
	};

export const deleteCourse = (id, token) => async (dispatch, getState) => {
    const response = await axios({
        method: 'DELETE',
        url: `http://localhost:3000/courses/${id}`,
        headers: {
            Authorization: token,
        },
    });

    if (response.status === 200) {
        dispatch(handleGetCoursesList(getCoursesListAction));
    }
};

export const editCourse = (course, token, id) => async (dispatch, getState) => {
    const response = await axios({
        method: 'put',
        url: `http://localhost:3000/courses/${id}`,
        data: course,
        headers: { Authorization: token },
    });

    if (response.status === 200) {
        dispatch(handleGetCoursesList(getCoursesListAction));
    }
};
