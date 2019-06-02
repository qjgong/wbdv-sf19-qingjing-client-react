import React from 'react'
import {Link} from 'react-router-dom'

export default class CourseRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <tr>
                <td>
                    <Link to={`/course-editor/${this.props.course.id}`}><i
                        onClick={() => this.props.selectCourse(this.props.course)} className="fas fa-file-alt"
                        style={{color: "dodgerblue"}}>{this.props.course.title}
                    </i></Link></td>
                <td style={{color: "gray"}}>me</td>
                <td style={{color: "gray"}}>6:54PM</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>
                    <button onClick={() => this.props.deleteCourse(this.props.course.id)}
                            className="fa fa-times"/>
                </td>

            </tr>
        )
    }
}
