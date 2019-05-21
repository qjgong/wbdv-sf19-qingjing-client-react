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
                <Link to={`/course-editor/${this.props.course.id}`}><td onClick={() => this.selectCourse(this.props.course)}>
                    <i className="fas fa-file-alt" style={{color: "dodgerblue"}}></i>{this.props.course.title}
                </td></Link>
                <td style={{color: "gray"}}>me</td>
                <td style={{color: "gray"}}>6:54PM</td>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
                <td>
                    <i className="fa fa-times"></i>
                </td>
            </tr>
        )
    }
}
