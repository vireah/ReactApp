import React, {useContext, useState} from 'react';
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { useNavigate } from "react-router-dom";
import {addCourse, addCourses} from "../../store/courses/actionCreators";

import {store} from "../../App";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { createNewCourse, editCourse } from '../../store/courses/thunk';

import {dateGeneration} from "../../helpers/dateGeneration";

const CreateCourse = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const token = localStorage.getItem('token');


    const [authorName, setNewAuthorInputValue] = useState({ name: '' });
    const [authorsData, setAuthorsData] = useState([]);
    const [selectedAuthors, setSelectedAuthors] = useState([]);

    const authorsList = useSelector((state) => state.authors.authors);
    const [courseList, setCourseList] = useState({
        title: '',
        description: '',
        duration: '',
        authors: [],
    });

    const getChooseAuthors = (id) => {
        setAuthorsData(authorsData.filter((item) => item.id !== id));
    };

    const handleChooseAuthors = (id, name) => {
        setSelectedAuthors([...selectedAuthors, { id, name }]);
        getChooseAuthors(id);
    };

    const getRemoveChooseAuthors = (id) => {
        setSelectedAuthors(selectedAuthors.filter((item) => item.id !== id));
    };

    const handleRemoveChooseAuthors = (id, name) => {
        setAuthorsData([...authorsData, { id, name }]);
        getRemoveChooseAuthors(id);
    };

    const setAuthorName = (e) => {
        const value = e.target.value;
        setAuthorName({ name: value });
    };

    const handleChangeDuration = (e) => {
        setCourseList({
            ...courseList,
            duration: +e.target.value,
        });
    };

    const getTitle = (e) => {
        setCourseList({
            ...courseList,
            title: e.target.value,
        });
    };

    const getDescription = (e) => {
        setCourseList({ ...courseList, description: e.target.value });
    };

    const setCourse = () => {
        let authorsId = selectedAuthors.map((item) => item.id);

        console.log(course, "course")

        if (id) {
            dispatch(
                editCourse({ ...courseList, authors: [...authorsId] }, token, id)
            );
        } else {
            dispatch(
                createNewCourse({ ...courseList, authors: [...authorsId] }, token)
            );
        }
        navigate('/courses')
    };

    const addAuthorName = () => {
        dispatch(createNewAuthor(authorName, token));
    };

    useEffect(() => {
        dispatch(handleGetAuthorsList(getAuthorsListAction));
    }, [dispatch]);

    useEffect(() => {
        setAuthorsData(authorsList);
    }, [authorsList]);

    return (
        <div className="create-course-wrapper">
            <div className="create-course-header">
                <div>
                    <label htmlFor="title">Title</label>
                    <Input id="title" onChange={getTitle} type="text" placeholder="Title"/>
                </div>
                <Button onClick={setCourse} title = 'Create Course' />
            </div>
            <div className="create-course-description">
                <label htmlFor="description">Description</label>
                <textarea id="description" onChange={getDescription} className="description"></textarea>
            </div>
            <div className="author-section-wrapper">
                <div className="item create-author">
                    <h4>Add Authors</h4>
                    <label htmlFor="create-author">Author name</label>
                    <Input id="create-author" onChange={setAuthorName} type="text" placeholder="Enter Author name.."/>
                    <Button  newAuthorInputValue={newAuthorInputValue} onClick={addAuthorName} title = 'Create Author' />
                </div>
                <div className="item all-course-authors">
                    <h4>Authors</h4>
                    {mockedAuthorsState.map((course) => course.name).map((author) => {
                        return   <div key={author} className="item">
                                        <div>{author}</div>
                                        <Button key={author} name={author} onClick={({e} )=> handleAuthor(author, e )} title = 'Add Author' />
                                </div>
                    })}
                </div>
                <div className="item current-course-section">
                    <div className='add-authors-content'>
                        <h4>Duration</h4>
                        <label htmlFor="duration">Duration time</label>
                        <Input
                            value={courseList.duration}
                            id="duration"
                            name='duration'
                            label='Duration'
                            placeholder='Enter duration in minutes...'
                            onChange={handleChangeDuration}
                        />
                        <span>
							<b>
								DURATION:
                                {dateGeneration(courseList.duration)}
							</b>
						</span>
                    </div>
                </div>
                <div className="item current-course-section">
                    <h4>Course Authors</h4>
                    {selectedAuthors.map((item) => {
                        return   <div key={item} className="item">
                                    <div>{item}</div>
                                    <Button key={item} name={item} onClick={({e} )=> deleteAuthor(item, e )} title = 'Delete Author' />
                                 </div>
                    })}
                </div>
            </div>
        </div>
    )
};

export default CreateCourse;