import React from 'react';
import Button from "../../../../common/Button/Button";

const CourseCard = (props) => {
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
                <Button title = 'Show course' />
            </div>
        </div>
    )
};

export default CourseCard;