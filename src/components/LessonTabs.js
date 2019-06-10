import React from 'react'
import LessonTabItem from "./LessonTabItem";


export default class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: this.props.lessons
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.lessons !== this.props.lessons) {
            this.setState({
                lessons: this.props.lessons
            })
        }
    }

    render() {
        return (
            <ul className="nav nav-tabs">
                {
                    this.state.lessons && this.state.lessons.map((lesson, key) =>
                        <LessonTabItem lesson={lesson} key={key}
                                       selectedLesson={this.props.selectedLesson}
                                       selectLesson={this.props.selectLesson}
                                       updateLesson={this.props.updateLesson}
                                       deleteLesson={this.props.deleteLesson}

                        />)
                }

                <li className="nav-item">
                    <input
                        onChange={this.props.lessonTitleChanged}
                        placeholder="New Lesson"
                        className="form-control"
                        id="add-lesson-input"/>
                    <button onClick={() => this.props.createLesson()} className="btn btn-secondary btn-block">Add Lesson
                    </button>
                </li>
            </ul>


        )
    }
}

