import React from 'react'
import CourseCard from '../components/CourseCard'
import ModuleList from "../components/ModuleList";
import CourseEditor from "./CourseEditor";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from "./CourseGrid";
import CourseList from "../components/CourseList";
import CourseTable from "./CourseTable";



export default class Whiteboard extends React.Component {
    courses = require("./course");


    constructor(props) {

        super(props);
        this.state = {
            selectedCourse: this.courses[0]
        }
    }

    selectCourse = course =>
        this.setState({selectedCourse: course})


    render() {

        return (
            <Router>
                <div className="container-fluid">
                    <Link to="/course-table">Table</Link>
                    <Link to="/course-grid">Grid</Link>
                    <Link to="/course-editor">Editor</Link>


                    <Route path="/course-table"
                           render={() => <CourseTable
                               selectCourse={this.selectCourse}
                               courses={this.courses}/>}/>
                    <Route path="/course-grid"
                           render={() => <CourseGrid
                               selectCourse={this.selectCourse}
                               courses={this.courses}/>}/>
                    <Route path="/course-editor"
                           render={() => <CourseEditor
                               selectCourse={this.selectCourse}
                               courses={this.courses}/>}/>



                </div>
            </Router>

        )
    }
}