import React from 'react'
import LessonTabItem from "./LessonTabItem";


export default class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: this.props.lessons
        }
    }

    createLesson = () => {
        let lesson = {
            title: this.state.lesson.title,
            id: Math.random() * 100
        }
        console.log(lesson)
        let lessons = this.state.lessons;
        if (!lessons) {
            lessons = []
        }
        lessons.push(lesson);
        this.setState({lessons: lessons})
    }

    titleChanged = (event) => {
        this.setState({
            lesson: {
                title: event.target.value
            }
        })
    }

    deleteLesson=(id)=>{
        this.setState({
            lessons:this.state.lessons.filter(lesson=>lesson.id!==id)
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.lessons !== this.props.lessons){
            this.setState({
                lessons:this.props.lessons
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
                                       titleChanged={this.titleChanged}
                                       deleteLesson={this.deleteLesson}
                        />)
                }


                <li className="nav-item">
                    <input
                        onChange={this.titleChanged}
                        placeholder="New Lesson"
                        className="form-control"/>
                    <button onClick={()=>this.createLesson()} className="btn btn-secondary btn-block">Add Lesson</button>
                </li>
            </ul>


        )
    }
}

