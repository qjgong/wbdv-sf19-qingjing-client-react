import React from 'react'


import {Link} from "react-router-dom";

import CourseRow from "../components/CourseRow";


export default class CourseTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    titleChanged = (event) => {
        this.setState({
            title: event.target.value

        })
    };
    render() {
        return (
            <div>


                <nav className="navbar navbar-dark bg-primary navbar-expand-md">
                    <div className="navbar-nav">

                        <li className="nav-link" href="#">
                            <button type="button" className="btn btn-primary btn-lg">
                                <i className="fa fa-bars"></i></button>
                        </li>

                        <li className="navbar-brand" href="#">Course Manager</li>


                        <li className="collapse navbar-collapse" id="navbarTogglerDemo01">

                            <input type="text" className="form-control" placeholder="New Course Title"
                                   onChange={this.titleChanged}/></li>

                        <li className="nav-link" href="#">
                            <button type="button" className="btn btn-danger btn-lg"
                                    onClick={() => this.props.createCourse({
                                        id: 0,
                                        title: this.state.title,
                                        widgets: []
                                    })}>
                                <i className="fa fa-plus"></i></button>
                        </li>
                    </div>

                </nav>

                <div className="container">
                    <table className="table table-hover table-responsive">


                        <thead className="thead-light">

                        <tr>
                            <th> Title</th>
                            <th>Owned by <i className="fa fa-caret-down"/></th>
                            <th id="small"> Last modified by me</th>
                            <th><Link to="/course-grid"><i className="fa fa-th"/></Link></th>
                            <th><i className="fa fa-sort-alpha-asc"/></th>
                            <th>&nbsp;</th>
                        </tr>

                        </thead>

                        <tbody className="ml-5">
                        {this.props.courses.map((course) =>
                            <CourseRow selectCourse={this.props.selectCourse}
                                       deleteCourse={this.props.deleteCourse}
                                       course={course} key={course.id}/>
                        )}

                        </tbody>

                    </table>
                </div>

                <button className="btn btn-danger floating" onClick={() => this.props.createCourse({
                    id: 0,
                    title: "New Course",
                    widgets: []
                })}>
                    <i className="fa fa-plus" style={{color: "white"}}></i>
                </button>

            </div>
        )
    }
}