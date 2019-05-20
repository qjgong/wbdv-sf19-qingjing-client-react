import React from 'react'
import CourseRow from "../components/CourseRow";


export default class CourseTable extends React.Component {

    render() {
        return (
            <div className="container">
                <table className="table">
                    <tbody>
                    {this.courses.map((course, selectCourse, key) =>
                        <CourseRow selectCourse={selectCourse}
                                   course={course} key={key}/>
                    )}

                    </tbody>
                </table>
            </div>
        )
    }}