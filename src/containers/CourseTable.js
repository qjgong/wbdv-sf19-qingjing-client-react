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
            <div className="container">


                <div className="navbar navbar-dark bg-primary navbar-expand-sm">


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
                        <th><Link to="/course-grid">Grid<i className="fa fa-grip-horizontal"/></Link></th>
                        <th><i className="fa fa-sort-alpha-down"/></th>
                        <th>&nbsp;</th>
                    </tr>

                    </thead>

                    <tbody>
                    {this.props.courses.map((course, key) =>
                        <CourseRow selectCourse={this.props.selectCourse}
                                    course={course} key={key}/>
                    )}

                    </tbody>

                </table>


            </div>
        )
    }
}