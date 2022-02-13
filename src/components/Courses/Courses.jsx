import React, {useState, useEffect} from 'react';
import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "../../common/Button/Button";
import CreateCourse from "../CreateCourse/CreateCourse";
import Header from "../Header/Header";
import { Navigate  } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./components/Login/Login";

const Courses = (props) => {
    let navigate = useNavigate();
    const [data, setData] = useState([]);
    const parsedata = props.mockedCoursesList.reduce((acc, item) => {
        const users = props.mockedAuthorsList.filter((el) =>
            item.authors.some((id) => id === el.id)
        );
        const formattedNames = users.map((el) => el.name);
        return [...acc, { ...item, names: formattedNames }];
    }, []);

    useEffect(() => {
        setData(parsedata)
    }, [props.mockedCoursesList])

    function redirectClick() {
        navigate('/courses/add')
    }

        return (
            <>
                <Header loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}/>
                <div className="courses-wrapper">
                    <SearchBar data={data} setData={setData} />
                    {data.map((course) => <CourseCard key={course.id} value={course}  />)}
                    {/*<Button onClick={() => props.setShowCreateCourseComponent(true)} title = 'Add new course' />*/}
                    <Button onClick={redirectClick} title = 'Add new course' />
                </div>
            </>
        );
    // }
};

export default Courses;