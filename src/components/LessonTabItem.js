import React from 'react'

const LessonTabItem =
    ({lesson, key, selectedLesson, selectLesson}) =>

        <li className="nav-item"
            onClick={() => selectLesson}
            key={key}>
            <a className={lesson===selectedLesson?
                "nav-link active":"nav-link"}>{lesson.title}</a>
        </li>

export default LessonTabItem