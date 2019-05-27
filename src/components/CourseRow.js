import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
export default class CourseRow extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <tr>
                <Link to={`/course-editor/${this.props.course.id}`}><li onClick={() => this.props.selectCourse(this.props.course)}>
                    <i className="fas fa-file-alt" style={{color: "dodgerblue"}}></i>{this.props.course.title}
                </li></Link>
                <th style={{color: "gray"}}>me</th>
                <th style={{color: "gray"}}>6:54PM</th>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
                <th>
                    <li onClick={()=>this.props.deleteCourse(this.props.course.id)} className="fa fa-times"></li>
                </th>
            </tr>
        )
    }
}
