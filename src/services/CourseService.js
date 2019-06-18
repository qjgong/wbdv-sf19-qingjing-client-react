
import React from "react";


let url = "http://localhost:8080" + "/api/courses";
export default class CourseService {
    constructor() {
        if (!!CourseService.instance) {
            return CourseService.instance;
        }
        CourseService.instance = this;
        return this;
    }


    createCourse = course =>
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {'content-type': 'application/json'}
        });


    findAllCourses = () =>
        fetch(url).then(response => response.json());


    findCourseById = (id) =>
        fetch(url + '/' + id).then(response => response.json());


    updateCourse(id, course) {
        return fetch(url + "/" + id,
            {
                method: "PUT",
                body: JSON.stringify(course),
                headers: {
                    "content-type": "application/json"
                }
            })
            .then(response => response.json());
    };

    deleteCourse = (id) => fetch(url+'/'+id, {
        method: 'DELETE',
        body: JSON.stringify(id),
        headers: {
            'content-type': 'application/json',
        }
    });
}
