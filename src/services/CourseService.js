import data from "./courses.json"
import React from "react";


export default class CourseService {
    constructor() {
        if (!!CourseService.instance) {
            return CourseService.instance;
        }
        CourseService.instance = this;
        this.courses = data;
        return this;
    }

    createCourse(course) {
        this.courses.push(course);
    }

    findAllCourses() {
        return this.courses;
    }

    findCourseById(id) {
        return this.courses.find(x => x.id == id);
    }

    updateCourse(id, course) {
        let this_course = this.findCourseById(id);
        this_course.title = course.title;
        this_course.modules = course.modules;
    }

    deleteCourse(id) {
        this.courses = this.courses.filter(x => x.id !== id);
    }
}
