import React, {useState, useEffect, useContext} from 'react';
import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "../../common/Button/Button";
import Header from "../Header/Header";
import {useNavigate} from "react-router-dom";
import  {CoursesContext}  from "../../App"

const Courses = (props) => {
    let navigate = useNavigate();
    const { mockedCourses, mockedAuthors } = useContext(CoursesContext);
    const [mockedCoursesState] = mockedCourses;
    const [mockedAuthorsState] = mockedAuthors;
    const [data, setData] = useState([]);

    const parsedata = mockedCoursesState.reduce((acc, item) => {
        const users = mockedAuthorsState.filter((el) =>
            item.authors.some((id) => id === el.id)
        );
        const formattedNames = users.map((el) => el.name);
        return [...acc, { ...item, names: formattedNames }];
    }, []);

    useEffect(() => {
        setData(parsedata)
    }, [mockedCoursesState])

    function redirectClick() {
        navigate('/courses/add')
    }

    return (
        <>
            <Header loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}/>
            <div className="courses-wrapper">
                <SearchBar data={data} setData={setData} />
                {data.map((course) => <CourseCard key={course.id} value={course} id={course.id} />)}
                <Button onClick={redirectClick} title = 'Add new course' />
            </div>
        </>
    );
};

export default Courses;