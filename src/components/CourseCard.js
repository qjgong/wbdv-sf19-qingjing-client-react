import React from 'react'
import {Link} from "react-router-dom";


export default class CourseCard
    extends React.Component {

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
            <td className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <Link to={`/course-editor/${this.props.course.id}`}><h5 className="card-title">
                        {this.props.course.title}
                    </h5></Link>
                    <p className="card-text"> {this.props.course.id}</p>
                    <Link to={`/course-editor/${this.props.course.id}`}
                          className="btn btn-primary" onClick={() => this.props.selectCourse(this.props.course)}>
                        More...
                    </Link>

                    {
                        !this.state.editing &&

                        <button className={"btn btn-xs btn-success"}
                                onClick={() => this.setState({
                                    editing: !this.state.editing
                                })}><i className={"fa fa-edit"}/></button>
                    }
                    {
                        this.state.editing &&
                        <div className={"d-flex"}>
                            <input className={"form-control"}
                                   placeholder={"New Title"}
                                   value={this.state.title || ""}
                                   onChange={(event) => this.setState({title: event.target.value})}/>
                            <button className={"btn btn-xs btn-primary"}
                                    onClick={() => {
                                        this.update()
                                    }}>Done
                            </button>
                        </div>
                    }

                    <button onClick={() => this.props.deleteCourse(this.props.course.id)}
                            className="btn btn-danger ml-1">Delete
                    </button>
                </div>
            </td>
        )
    }

}