import React, {useState, useEffect, useContext} from 'react';
import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "../../common/Button/Button";
import Header from "../Header/Header";
import {useNavigate} from "react-router-dom";
import  {CoursesContext}  from "../../App"
import {addCourses} from "../../store/courses/actionCreators";
import getCourses from "../../servisces";
import {addAuthors} from "../../store/authors/actionCreators";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Courses = (props) => {
    let navigate = useNavigate();
    const { mockedCourses, mockedAuthors } = useContext(CoursesContext);
    const [mockedCoursesState] = mockedCourses;
    const [mockedAuthorsState] = mockedAuthors;
    const [data, setData] = useState([]);

    const dispatch = useDispatch();
    const courses = useSelector((store) => store.courses)
    const authors = useSelector((store) => store.authors)


    const getCourses = async () => {
        const response = await fetch('http://localhost:3000/courses/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const result = await response.json();
        if(response.ok) {
            dispatch(addCourses(result.result));
        }
    }

    const getAuthors = async () => {
        const response = await fetch('http://localhost:3000/authors/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const result = await response.json();
        console.log(result, "auth")
        if(response.ok) {
            dispatch(addAuthors(result.result));
        }
    }

    const parsedata = mockedCoursesState.reduce((acc, item) => {
        const users = mockedAuthorsState.filter((el) =>
            item.authors.some((id) => id === el.id)
        );
        const formattedNames = users.map((el) => el.name);
        return [...acc, { ...item, names: formattedNames }];
    }, []);

    useEffect(() => {
        const da = getCourses();
        const da2 = getAuthors();
    }, [mockedCoursesState])

    function redirectClick() {
        navigate('/courses/add')
    }

    return (
        <>
            <Header loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}/>
            <div className="courses-wrapper">
                <SearchBar data={data} setData={setData} />
                {courses.map((course) => <CourseCard key={course.id} value={course} id={course.id} />)}
                <Button onClick={redirectClick} title = 'Add new course' />
            </div>
        </>
    );
};

export default Courses;