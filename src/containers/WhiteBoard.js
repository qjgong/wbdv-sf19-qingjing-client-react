import React from 'react'
import CourseEditor from "./CourseEditor";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from "./CourseGrid";
import CourseTable from "./CourseTable";
import CourseService from "../services/CourseService";
import "./WhiteBoard.css"

export default class Whiteboard extends React.Component {
    courseService = new CourseService();


    constructor(props) {

        super(props);
        this.state = {
            selectedCourse: null,
            courses: []

        }
    }

    componentDidMount() {
        this.courseService.findAllCourses()
            .then(courses =>
                this.setState({
                    courses: courses,
                    selectedCourse: courses.length>0?courses[0]:null
                })
            )
        console.log(this.state.courses)
    }

    selectCourse = course =>{
        this.courseService.findCourseById(course.id)
            .then(()=>{
                this.setState({
                    selectedCourse:course,
                })
            })
    };


    deleteCourse = (id) => {
        this.courseService.deleteCourse(id)
            .then(response => {
                return this.courseService.findAllCourses()
            })
            .then(courses => {
                this.setState({
                    courses: courses,
                })
            })
    };




    render() {

        return (

            <Router>
                <div>

                    <Route path="/(course-table|)"
                           render={() => <CourseTable
                               selectCourse={this.selectCourse}
                               deleteCourse={this.deleteCourse}
                               courses={this.state.courses}/>}/>
                    <Route path="/course-grid"
                           render={() => <CourseGrid
                               selectCourse={this.selectCourse}
                               deleteCourse={this.deleteCourse}
                               courses={this.state.courses}/>}/>
                    <Route path={"/course-editor/" + this.state.selectedCourse.id}
                           render={() => <CourseEditor
                               selectCourse={this.selectCourse}
                               course={this.state.selectedCourse}/>}/>


                </div>
            </Router>

        )
    }
}