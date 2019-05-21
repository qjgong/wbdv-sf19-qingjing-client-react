import React from 'react'

const CourseRow = ({course, selectCourse,module}) =>

    <tr>
        <td onClick={() => selectCourse(course)}
            to={`/course/edit/${course.id}`}>
            <i className="fas fa-file-alt" style={{color: "dodgerblue"}}></i>{course.title}
        </td>
        <td style={{color: "gray"}}>{course.owner}</td>
        <td style={{color: "gray"}}>{course.time}</td>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <td>
            <i className="fa fa-times"></i>
        </td>
    </tr>


export default CourseRow