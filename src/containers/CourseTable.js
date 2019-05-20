import React from 'react'

export default class CourseTable extends React.Component {
    render() {
        return (
            <div className="container">
                <table className="table">
                    <tbody>
                    {courses.map((course, key) =>
                        <CourseRow course={course} key={key}/>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }}