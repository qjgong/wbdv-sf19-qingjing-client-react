import React from 'react'

const LessonTabs =
    ({key,lesson, selectedLesson, selectLesson}) =>

        <li className="nav-item"
            onClick={() => selectLesson(lesson)}
            key={key}>
            <a className={lesson===selectedLesson?
                "nav-link active":"nav-link"}>{lesson.title}</a>
        </li>

export default LessonTabs
