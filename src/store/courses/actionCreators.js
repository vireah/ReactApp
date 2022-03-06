import { get_courses_list } from './actionTypes';
import { delete_current_course } from './actionTypes';
import { add_new_course } from './actionTypes';

export const getCoursesListAction = (payload) => {
	return {
		type: get_courses_list,
		payload: payload,
	};
};

export const deleteCurrentCourseAction = (payload) => {
	return {
		type: delete_current_course,
		payload: payload,
	};
};

export const addNewCourseAction = (payload) => {
	return {
		type: add_new_course,
		payload: payload,
	};
};
