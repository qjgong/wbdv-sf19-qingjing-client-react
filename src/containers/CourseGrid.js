import React from "react";
import CourseCard from "../components/CourseCard";


export default class CourseGrid
    extends React.Component {

    render() {
        return (
            <div className="card-deck">
                {this.props.courses.map((course, selectCourse, key) =>
                    <CourseCard course={course}
                                selectCourse={selectCourse}
                                key={key}/>)}
            </div>
        )
    }
}