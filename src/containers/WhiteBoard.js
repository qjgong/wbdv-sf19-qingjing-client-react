import React from 'react'
import CourseCard from '../components/CourseCard'
import ModuleList from "../components/ModuleList";
import CourseEditor from "./CourseEditor";

export default class Whiteboard extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <CourseEditor/>
                <div>
                    <nav clasName="navbar navbar-dark bg-primary">

                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarTogglerDemo01">
                            <span className="navbar-toggler-icon"></span>
                        </button>


                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Course Manager </a>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                            <div className="input-group">
                                <input/>
                                <div className="input-group-btn">
                                    <a href="#">
                                        <button type="button" className="btn btn-danger btn-lg"><i
                                            className="fa fa-plus"
                                        ></i></button>
                                    </a>
                                </div>
                            </div>
                        </div>


                    </nav>
                </div>

                <table className="table table-hover table-responsive">
                    <thead className="thead-light">
                    <tr>
                        <th>Title</th>
                        <th>Owned by <i className="fas fa-caret-down"></i></th>
                        <th id="small">Last modified by me</th>
                        <th><i className="fas fa-grip-horizontal"></i></th>
                        <th><i className="fas fa-sort-alpha-down"></i></th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td><i className="fas fa-file-alt" style={{color: "dodgerblue", marginRight: "5px"}}></i> CS5500
                            Software Engineering Graduate
                        </td>
                        <td style={{color:"gray"}}>me</td>
                        <td style={{color:"gray"}}>6:45 PM</td>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <td>
                            <button type="button"><i className="fa fa-times"></i></button>
                        </td>
                    </tr>

                    <tr>
                        <td><i className="fas fa-file-alt" style={{color: "dodgerblue"}}></i> CS4550 Software Engineering
                            Undergraduate
                        </td>
                        <td style={{color:"gray"}}>me</td>
                        <td style={{color:"gray"}}>6:45 PM</td>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <td>
                            <button type="button"><i className="fa fa-times"></i></button>
                        </td>
                    </tr>

                    <tr>
                        <td><i className="fas fa-file-alt" style={{color: "dodgerblue"}}></i> CS4500 WebDev Undergraduate
                        </td>
                        <td style={{color:"gray"}}>me</td>
                        <td style={{color:"gray"}}>6:45 PM</td>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <td>
                            <button type="button"><i className="fa fa-times"></i></button>
                        </td>
                    </tr>

                    <tr>
                        <td><i className="fas fa-file-alt" style={{color: "dodgerblue"}}></i> CS4500 WebDev Graduate</td>
                        <td style={{color:"gray"}}>me</td>
                        <td style={{color:"gray"}}>1:00 PM</td>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <td>
                            <button type="button"><i className="fa fa-times"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td><i className="fas fa-file-alt" style={{color: "dodgerblue"}}></i> CS5200 Intro to Databases
                        </td>
                        <td style={{color:"gray"}}>me</td>
                        <td style={{color:"gray"}}>1:00 PM</td>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <td>
                            <button type="button"><i className="fa fa-times"></i></button>
                        </td>
                    </tr>
                    <tr className="row1" bgcolor="#e9ecef">
                        <td> Yesterday</td>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                    </tr>

                    <tr>
                        <td><i className="fas fa-file-alt" style={{color: "dodgerblue"}}></i> WEBDEV2 - React <i
                            className="fas fa-users" style={{color: "gray"}}></i></td>
                        <td style={{color:"gray"}}>me</td>
                        <td style={{color:"gray"}}>May4,2018</td>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <td>
                            <button type="button"><i className="fa fa-times"></i></button>
                        </td>
                    </tr>

                    <tr className="row2" bgcolor="#e9ecef">
                        <td> Previous 7 days</td>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                    </tr>

                    <tr>
                        <td><i className="fas fa-file-alt" style={{color: "dodgerblue"}}></i> WEBDEV Syllabus <i
                            className="fas fa-users" style={{color: "gray"}}></i></td>
                        <td style={{color:"gray"}}>me</td>
                        <td style={{color:"gray"}}>May3,2018</td>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <td>
                            <button type="button"><i className="fa fa-times"></i></button>
                        </td>
                    </tr>

                    <tr>
                        <td><i className="fas fa-file-alt" style={{color: "dodgerblue"}}></i>
                            WEBDEV1 - JavaScript,Java,SQL
                            <i className="fas fa-users" style={{color: "gray"}}></i></td>
                        <td style={{color:"gray"}}>me</td>
                        <td style={{color:"gray"}}>May4,2018</td>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <td>
                            <button type="button"><i className="fa fa-times"></i></button>
                        </td>
                    </tr>
                    </tbody>
                </table>


                <button className="btn btn-danger floating">
                    <i className="fa fa-plus" style={{color: "white"}}></i>
                </button>


            </div>

        )
    }
}