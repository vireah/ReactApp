import React , {useEffect}  from 'react';
import Button from "../../../../common/Button/Button";
import { useNavigate,  useParams} from "react-router-dom";

const CourseCard = (props) => {
    let navigate = useNavigate();
    // let { id } = useParams();

    // const showCourseClick = () => {
    //     navigate( `/courses/:id`)
    // }

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
                {/*<Button onClick={showCourseClick} title = 'Show course' />*/}
                {/*<Button title = 'Show course' />*/}
            </div>
        </div>
    )
};

export default CourseCard;