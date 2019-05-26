import data from "./courses.json"
import React from "react";


export default class CourseService extends React.Component {


    createCourse(course) {
        data.add(course);
    }

    findAllCourses() {
        return data
    }

    findCourseById(id) {
        return data.map(course => course.id === id);
    }

    updateCourse(id, course) {
        data.map(x => x.id === id ? course : x)
    }

    deleteCourse(id) {
        data.removeIf(course => course.id === id)
    }
}
