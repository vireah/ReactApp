import React, {useContext, useState} from 'react';
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { useNavigate } from "react-router-dom";
import {CoursesContext} from "../../App";
// import {createNewCourse} from "../../store/courses/thunk";
// import getCourses from "../../servisces";
import {store} from "../../App";
import { createNewCourse, editCourse } from '../../store/courses/thunk';
import { useDispatch } from 'react-redux'

const CourseForm = () => {
    let navigate = useNavigate();
    const { mockedCourses, mockedAuthors } = useContext(CoursesContext);

    const [newAuthorInputValue, setNewAuthorInputValue] = useState([]);
    const [selectedAuthors, setSelectedAuthors] = useState([]);

    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const dispatch = useDispatch();

    const setAuthorName = (event) => {
        setNewAuthorInputValue(event.target.value);
    }

    const addAuthorName = () => {
        // setMockedAuthors([...mockedAuthorsState, {
        //     id: 'id + Math.random().toString(16).slice(2)',
        //     name: newAuthorInputValue
        // }]);
    }

    const getTitle = (event) => {
        setTitle(event.target.value);
    }

    const getDescription = (event) => {
        setDescription(event.target.value);
    }

    const item = {
        "title": title,
        "description": description,
        "duration": 60,
        "authors": [
            "5e0b0f18-32c9-4933-b142-50459b47f09e"
        ]
    };

    const setCourseValues = () => {
        dispatch(createNewCourse(item));
        navigate('/courses')
    }

    const handleAuthor = (author,event) => {
        const newSelectedAuthors = selectedAuthors.filter(item => author !== item)
            return setSelectedAuthors([...newSelectedAuthors, author]);
    }

    const deleteAuthor = (author,event) => {
        const newSelectedAuthors = selectedAuthors.filter(item => author !== item)
            return setSelectedAuthors([...newSelectedAuthors]);
    }

    return (
        <div className="create-course-wrapper">
            <div className="create-course-header">
                <div>
                    <label htmlFor="title">Title</label>
                    <Input id="title" onChange={getTitle} type="text" placeholder="Title"/>
                </div>
                <Button onClick={setCourseValues} title = 'Create Course' />
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
                    <h4>Duration time</h4>
                    <label htmlFor="duration">Description</label>
                    <input id="duration" type="text" className="duration"></input>
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

export default CourseForm;