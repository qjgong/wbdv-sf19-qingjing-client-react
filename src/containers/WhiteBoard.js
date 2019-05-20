import React from 'react'
import CourseCard from '../components/CourseCard'
import ModuleList from "../components/ModuleList";
import CourseEditor from "./CourseEditor";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from "./CourseGrid";
import CourseList from "./CourseList";


export default class Whiteboard extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <Link to="/course-list">List</Link>
                    <Link to="/course-grid">Grid</Link>
                    <Link to="/course-editor">Editor</Link>

                    <Route path="/course-grid" exact component={CourseGrid}/>
                    <Route path="/course-list" exact component={CourseList}/>
                    <Route path="/course-editor" exact component={CourseEditor}/>


                </div>
            </Router>

        )
    }
}