import React from 'react'
export default class CourseRow extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <tr>
                <td onClick={() => this.selectCourse(this.props.course)}
                    to={`/course/edit/${this.props.course.id}`}>
                    <i className="fas fa-file-alt" style={{color: "dodgerblue"}}></i>{this.props.course.title}
                </td>
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
