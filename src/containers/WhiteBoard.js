import React from 'react'
import CourseEditor from "./CourseEditor";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from "./CourseGrid";
import CourseTable from "./CourseTable";
import CourseService from "../services/CourseService";
import "./WhiteBoard.css"

export default class Whiteboard extends React.Component {
    courses= (new CourseService()).findAllCourses();



    constructor(props) {

        super(props);
        this.state = {
            selectedCourse: this.courses[0],
            courses:this.courses
        }
    }

    selectCourse = course =>
        this.setState({selectedCourse: course})

    deleteCourse=(id)=>{
        this.setState({
            courses:this.state.courses.filter(course=>course.id !==id)
        })
    }


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