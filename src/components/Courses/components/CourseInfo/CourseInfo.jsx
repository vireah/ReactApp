import React, {useContext, useEffect} from 'react';

import Button from "../../../../common/Button/Button";
import { useNavigate,  useParams} from "react-router-dom";
import {getParseData} from "../../../../helpers/getParseData";
import {handleGetCoursesList} from "../../../../store/courses/thunk";
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux'
import {getCoursesListAction} from "../../../../store/courses/actionCreators";
import {handleGetAuthorsList} from "../../../../store/authors/thunk";
import {getAuthorsListAction} from "../../../../store/authors/actionCreators";

const CourseInfo = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    let {id} = useParams();
    const [data, setData] = React.useState([]);


    const getCourseFromStore = useSelector((state) => state.courses.courses);
    const getAuthorsFromStore = useSelector((state) => state.authors.authors);

    useEffect(() => {
        setData(getParseData(getCourseFromStore, getAuthorsFromStore));
    }, [getAuthorsFromStore, getCourseFromStore, handleGetCoursesList]);

    useEffect(() => {
        dispatch(handleGetCoursesList(getCoursesListAction));
        dispatch(handleGetAuthorsList(getAuthorsListAction));
    }, []);

    const courseInfo = data.find((el) => el.id === id)


    function redirectBack() {
        navigate('/courses/')
    }

    if (courseInfo !== undefined) {
        return (
            <div className="course-card">
                <div>
                    <div className="course-card-title">{courseInfo.title}</div>
                    <div className="course-card-description">{courseInfo.description}</div>
                </div>
                <div className="course-card-additional">
                    <div>{courseInfo.created}</div>
                    <div>{courseInfo.duration}</div>
                    <div>{courseInfo.authors}</div>
                </div>
                <div>
                    <Button onClick={redirectBack} title='Back'/>
                </div>
            </div>
        )
    } else return <></>
}

export default CourseInfo;