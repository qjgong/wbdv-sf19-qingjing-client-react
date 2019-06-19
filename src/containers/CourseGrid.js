import React from "react";
import CourseCard from "../components/CourseCard";
import {Link} from "react-router-dom";


export default class CourseGrid
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    titleChanged = (event) => {
        this.setState({
            title: event.target.value

        })
    };

    render() {
        return (
            <div className="container-fluid">


                <nav className="navbar navbar-dark bg-primary navbar-expand-md">
                    <div className="navbar-nav">

                        <li className="nav-link" href="#">
                            <button type="button" className="btn btn-primary btn-lg">
                                <i className="fa fa-bars"></i></button>
                        </li>

                        <li className="navbar-brand" href="#">Course Manager</li>


                        <li className="collapse navbar-collapse" id="navbarTogglerDemo01">

                            <input type="text" className="form-control" placeholder="New Course Title"
                                   onChange={this.titleChanged}

                            /></li>

                        <li className="nav-link" href="#">
                            <button type="button" className="btn btn-danger btn-lg" onClick={() => this.props.createCourse({
                                title:  this.state.title?this.state.title:"New Course"})}>
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
                            <th><Link to="/course-table"><i className="fa fa-bars"/></Link></th>
                            <th><i className="fa fa-sort-alpha-asc"/></th>
                            <th><i className="fa fa-folder"/></th>

                            <th>&nbsp;</th>
                        </tr>

                        </thead>

                        <tbody>
                        <tr className="card-deck grid-container">
                            {this.props.courses.map((course, key) =>
                                <CourseCard course={course}
                                            selectCourse={this.props.selectCourse}
                                            deleteCourse={this.props.deleteCourse}
                                            updateCourse={this.props.updateCourse}
                                            key={key}/>)}
                        </tr>
                        </tbody>
                    </table>
                </div>

                <button className="btn btn-danger floating" onClick={() => this.props.createCourse({
                    title: "New Course",
                })}>
                    <i className="fa fa-plus" style={{color: "white"}}></i>
                </button>
            </div>
        )
    }
}