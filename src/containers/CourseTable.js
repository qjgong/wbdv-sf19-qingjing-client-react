import React from 'react'

import CourseList from "../components/CourseList";
import {Link} from "react-router-dom";
import CourseGrid from "./CourseGrid";
import CourseRow from "../components/CourseRow";


export default class CourseTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="container-fluid">


                <div className="navbar navbar-dark bg-primary navbar-expand">


                    <a className="nav-link" href="#">
                        <button type="button" className="btn btn-primary btn-lg">
                            <i className="fa fa-bars"></i></button>
                    </a>

                    <a className="navbar-brand" href="#">Course Manager </a>


                    <a className="collapse navbar-collapse" id="navbarTogglerDemo01">

                        <input type="text" className="form-control" placeholder="New Course Title"/></a>

                    <a className="nav-link" href="#">
                        <button type="button" className="btn btn-danger btn-lg">
                            <i className="fa fa-plus"></i></button>
                    </a>

                </div>


                <table className="table table-hover">

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

                    <tbody>
                    {this.props.courses.map((course) =>
                        <CourseRow selectCourse={this.props.selectCourse}
                                   deleteCourse={this.props.deleteCourse}
                                    course={course} key={course.id}/>
                    )}

                    </tbody>

                </table>

                <button className="btn btn-danger floating">
                    <i className="fa fa-plus" style={{color:"white"}}></i>
                </button>

            </div>
        )
    }
}