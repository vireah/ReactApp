import React  from 'react';
import Button from "../../../../common/Button/Button";
import { useNavigate,  useParams} from "react-router-dom";

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const CourseCard = (props) => {
    let navigate = useNavigate();
    const user = useSelector(getUser);
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    const onDelete = () => {
        dispatch(deleteCourse(id, token));
    }

    return (
        <div className="course-card">
            <div>
                <div className="course-card-title">{props.value.title}</div>
                <div className="course-card-description">{props.value.description}</div>
            </div>
            <div className="course-card-additional">
                <div>{props.value.duration}</div>
                <div>{props.value.creationDate}</div>
                <div>{props.value.names}</div>
            </div>
            <div>
                <Button onClick={() => navigate( `/courses/${props.id}`)} title = 'Show course' />
                <Button onClick={showCourseClick} title = 'Show course' />
                <Button title = 'Show course' />

                {user.role === 'admin' && (
                    <>
                        <Button
                            icon
                            src={editIcon}
                            onClick={() =>
                                history.push(`${'/course/update/'}${id}`, {
                                    id,
                                    title,
                                    description,
                                    allCurAuthors,
                                    duration,
                                })
                            }
                        />
                        <Button icon src={deleteIcon} onClick={onDelete} />
                    </>
                )}
            </div>
        </div>
    )
};

export default CourseCard;