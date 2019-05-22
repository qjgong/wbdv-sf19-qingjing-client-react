import React from 'react'

const LessonTabItem =
    ({lesson, selectedLesson, selectLesson}) =>

        <li className="nav-item"
            onClick={() => selectLesson}>
            <a className={lesson===selectedLesson?
                "nav-link active":"nav-link"}>{lesson.title}</a>
        </li>

export default LessonTabItem