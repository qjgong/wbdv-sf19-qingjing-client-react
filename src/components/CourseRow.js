import React from 'react'
import {Link} from 'react-router-dom'

export default class CourseRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            title: this.props.course.title
        }
    }

    update = () => {
        this.setState({
            editing: !this.state.editing
        });
        this.props.updateCourse(this.props.course.id, {
            ...this.props.course,
            title: this.state.title
        });
    };

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

                {
                    !this.state.editing&&
                    <td>
                        <button className={"btn btn-xs btn-success"}
                                onClick={() => this.setState({
                                    editing: !this.state.editing
                                })}><i className={"fa fa-edit"}/></button>
                    </td>
                }
                {
                    this.state.editing &&
                    <td className={"d-flex"}>
                        <input className={"form-control"}
                               placeholder={"New Title"}
                               value={this.state.title || ""}
                               onChange={(event) => this.setState({title: event.target.value})}/>
                        <button className={"btn btn-xs btn-primary"}
                                onClick={() => {
                                    this.update()
                                }}>Done</button>
                    </td>
                }
                <td>
                    <button onClick={() => this.props.deleteCourse(this.props.course.id)}
                            className="fa fa-times"/>
                </td>

            </tr>
        )
    }
}
