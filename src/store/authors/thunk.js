import axios from 'axios';

import { getAuthorsListAction } from './actionCreators';

export const handleGetAuthorsList = (action) => async (dispatch, getState) => {
    const response = await axios({
        method: 'GET',
        url: 'http://localhost:3000/authors/all',
    });

    if (response.status === 200) {
        dispatch(action(response.data.result));
    }
};

export const createNewAuthor =
	(author, token) => async (dispatch, getState) => {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3000/authors/add',
            data: author,
            headers: { Authorization: token },
        });

        if (response.status === 201) {
            dispatch(handleGetAuthorsList(getAuthorsListAction));
        }
	};
