import React, {useContext} from 'react';
import Button from "../../../../common/Button/Button";
import { useNavigate,  useParams} from "react-router-dom";
import {CoursesContext} from "../../../../App";

const CourseInfo = () => {
    let navigate = useNavigate();
    let {id}  = useParams();
    const { mockedCourses, mockedAuthors } = useContext(CoursesContext);
    const [mockedCoursesState] = mockedCourses;
    const [mockedAuthorsState] = mockedAuthors;
    const courseInfo = mockedCoursesState.find((el) => el.id === id)

    function redirectBack() {
        navigate('/courses/')
    }

    return (
        <div className="course-card">
            <div>
                <div className="course-card-title">{courseInfo.title}</div>
                <div className="course-card-description">{courseInfo.description}</div>
            </div>
            <div className="course-card-additional">
                <div>{courseInfo.duration}</div>
            </div>
            <div>
                <Button onClick={redirectBack} title = 'Back' />
            </div>
        </div>
    )
};

export default CourseInfo;