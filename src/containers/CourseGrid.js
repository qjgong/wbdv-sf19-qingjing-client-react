import React from "react";
import CourseCard from "../components/CourseCard";
import {Link} from "react-router-dom";


export default class CourseGrid
    extends React.Component {
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


                        <th> Title</th>
                        <th>Owned by <i className="fa fa-caret-down"/></th>
                        <th id="small"> Last modified by me</th>
                        <th> <Link to="/course-table">List<i className="fas fa-grip-horizontal"/></Link></th>
                        <th><i className="fas fa-sort-alpha-down"/></th>
                        <th><i className="fas fa-folder"/></th>

                        <th>&nbsp;</th>


                    </thead>

                    <tbody>
            <div className="card-deck">
                {this.props.courses.map((course, key) =>
                    <CourseCard course={course}
                                selectCourse={this.props.selectCourse}
                                key={key}/>)}
            </div>
                    </tbody>
                </table>
            </div>
        )
    }
}