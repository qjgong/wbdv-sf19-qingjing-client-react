import data from "./courses.json"
import React from "react";
import WidgetService from "./WidgetService";

let url = "http://localhost:8080" + "/api/courses";
export default class CourseService {
    constructor() {
        if (!!CourseService.instance) {
            return CourseService.instance;
        }
        CourseService.instance = this;
        this.courses = data;
        return this;
    }



    createCourse=course=> {
        fetch(url,{
            method:'POST',
            body:JSON.stringify(course),
            headers:{'content-type':'application/json'}
        })
            .then(response=>response.json())

        //this.courses.push(course);
    }

    findAllCourses=() =>
        fetch(url).then(response => response.json());
       // return this.courses;


    findCourseById=(id)=>
        fetch(url+'/'+id).then(response => response.json());


    updateCourse(id, course) {
        let this_course = this.findCourseById(id);
        this_course.title = course.title;
        this_course.modules = course.modules;
    }

    deleteCourse(id) {
        this.courses = this.courses.filter(x => x.id !== id);
    }
}
