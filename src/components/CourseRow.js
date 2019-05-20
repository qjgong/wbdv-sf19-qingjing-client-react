import React from 'react'

const CourseRow = ({course, selectCourse}) =>
    <i onClick={() => selectCourse(course)}
          to={`/course/edit/${course.id}`}>
        {course.title}
    </i>

export default CourseRow