import React, {useState, useEffect} from 'react';

import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";

const CreateCourse = (props) => {
    const [newAuthorInputValue, setNewAuthorInputValue] = useState([]);
    const [selectedAuthors, setSelectedAuthors] = useState([]);

    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    // const [allAuthors, setAllAuthors] = useState([]);
    // const defaultAuthors = [...new Set([].concat(...props.data.map((course) => course.names)))]

    // console.log(props.mockedAuthorsList2,"1");
    // useEffect(() => {
    //     // setAllAuthors(props.mockedAuthorsList2.map((course) => course.name))
    //     props.setmockedAuthors2(props.mockedAuthorsList2)
    // }, [] )
    //
    // const getInputValue = () => {
    //     setNewAuthorInputValue([...props.mockedAuthorsList, {
    //         id: 'f762978b-61eb-4096-812b-ebsdfde22838167',
    //         name: 'Nidsfsdfacolas Kim'
    //     }] );
    // }
    const setAuthorName = (event) => {
        setNewAuthorInputValue(event.target.value);
        console.log(event.target.value,"te222st")
    }

    const addAuthorName = () => {
        props.setmockedAuthors([...props.mockedAuthorsList, {
            id: 'id + Math.random().toString(16).slice(2)',
            name: newAuthorInputValue
        }]);
    }

    const getTitle = (event) => {
        setTitle(event.target.value);
    }

    const getDescription = (event) => {
        setDescription(event.target.value);
    }

    const setCourseValues = () => {
        props.setMockedCourses([...props.mockedCoursesList, {
            id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c5512ba',
            title: title,
            description: description,
            creationDate: '10/11/2020',
            duration: 210,
            authors: ['dttttte4dc02882f', '095a1817-tttt7bcbf748']
        }]);
        props.setIsAddCourse(false)
        console.log(props.mockedCoursesList,"test")
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
                    <Input id="title" onChange={getTitle} placeholder="Title"/>
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
                    <Input id="create-author" onChange={setAuthorName} placeholder="Enter Author name.."/>
                    <Button  newAuthorInputValue={newAuthorInputValue} onClick={addAuthorName} title = 'Create Author' />
                </div>
                <div className="item all-course-authors">
                    <h4>Authors</h4>
                    {props.mockedAuthorsList.map((course) => course.name).map((author) => {
                        return   <div key={author} className="item">
                                        <div>{author}</div>
                                        <Button key={author} name={author} onClick={({e} )=> handleAuthor(author, e )} title = 'Add Author' />
                                </div>
                    })}
                </div>
                <div className="item current-course-section">
                    <h4>Duration time</h4>
                    <label htmlFor="duration">Description</label>
                    <input id="duration" className="duration"></input>
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