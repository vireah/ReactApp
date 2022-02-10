import React, {useState, useEffect} from 'react';
import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "../../common/Button/Button";
import CreateCourse from "../CreateCourse/CreateCourse";

const Courses = (props) => {
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

    console.log(props.mockedAuthorsList,"Couses1111111111")
    console.log(props.data,"data111111111")
    // if (isAddCourse) {
    //     return (
    //         <div>
    //             <CreateCourse setIsAddCourse={setIsAddCourse} mockedCoursesList={props.mockedCoursesList} setMockedCourses={props.setMockedCourses} mockedAuthorsList={props.mockedAuthorsList} setMockedAuthors={props.setMockedAuthors} data={data} />
    //         </div>
    //     )
    // } else {
        return (
            <div className="courses-wrapper">
                <SearchBar data={data} setData={setData} />
                {data.map((course) => <CourseCard key={course.id} value={course}  />)}
                <Button onClick={() => props.setShowCreateCourseComponent(true)} title = 'Add new course' />
            </div>
        );
    // }
};

export default Courses;