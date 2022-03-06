import React, {useState, useEffect, useContext} from 'react';
import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "../../common/Button/Button";
import Header from "../Header/Header";
import {useNavigate} from "react-router-dom";

import { handleGetCoursesList } from '../../store/courses/thunk';
import { getCoursesListAction } from '../../store/courses/actionCreators';
import { handleGetAuthorsList } from '../../store/authors/thunk';
import { getAuthorsListAction } from '../../store/authors/actionCreators';

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { getParseData } from '../../helpers/getParseData';
import { getCurrentUser } from '../../store/user/thunk';


function Courses() {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [data, setData] = React.useState([]);

    const getCourseFromStore = useSelector((state) => state.courses.courses);
    const getAuthorsFromStore = useSelector((state) => state.authors.authors);
    const getUser = useSelector((state) => state.user.user);
    console.log(getCourseFromStore, "getCourseFromStore");
    const token = localStorage.getItem('token');


    useEffect(() => {
        setData(getParseData(getCourseFromStore, getAuthorsFromStore));
    }, [getAuthorsFromStore, getCourseFromStore, handleGetCoursesList]);

    useEffect(() => {
        dispatch(handleGetCoursesList(getCoursesListAction));
        dispatch(handleGetAuthorsList(getAuthorsListAction));
    }, []);

    useEffect(() => {
        dispatch(getCurrentUser(token));
    }, [token]);

    function redirectClick() {
        navigate('/courses/add')
    }

    return (
        <>
            <Header/>
            <div className="courses-wrapper">
                <SearchBar data={data} setData={setData} />
                {data.map((course) => <CourseCard
                    key={course.id}
                    value={course}
                    title={course.title}
                    id={course.id}
                    description={course.description}
                    authors={course.names}
                    duration={course.duration}
                    created={course.creationDate}
                />)}
                <Button onClick={redirectClick} title = 'Add new course' />
            </div>
        </>
    );
};

export default Courses;