import React from 'react'
import LessonTabItem from "./LessonTabItem";

const LessonTabs =
    ({lessons, selectedLesson, selectLesson}) =>

        <ul className="nav nav-tabs">
            {
                lessons && lessons.map((lesson, key) =>
                <LessonTabItem lesson={lesson}
                key={key}
                selectedLesson={selectedLesson}
                selectLesson={selectLesson}/>)
            }
        </ul>

export default LessonTabs
