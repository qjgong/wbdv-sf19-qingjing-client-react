import React from 'react'
import {Link} from "react-router-dom";


export default class CourseCard
    extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <Link to={`/course-editor/${this.props.course.id}`}><h5 className="card-title">
                        {this.props.course.title}
                    </h5></Link>
                    <p className="card-text"> {this.props.course.id}</p>
                    <Link to={`/course-editor/${this.props.course.id}`}><a href="#"
                       className="btn btn-primary" onClick={()=> this.props.selectCourse(this.props.course)}>
                        More...
                    </a></Link>

                    <button onClick={() => this.props.deleteCourse(this.props.course.id)} className="btn btn-danger">Delete</button>
                </div>
            </div>
        )
    }

}