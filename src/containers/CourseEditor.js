import React from 'react'
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";

export default class CourseEditor
    extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            selectedModule:
                this.props.modules[0],
            selectedLesson:
                this.props.modules[0].lessons[0]
        }
    }

    selectModule = module =>
        this.setState({
            selectedModule: module,
            selectedLesson: module.lessons[0],
            selectedTopic: module.lessons[0].topics[0]
        })
    selectLesson = lesson =>
        this.setState({
            selectedLesson: lesson,
            selectedTopic: lesson.topics[0]
        })


    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <div className="row">
                    <div className="col-4 left">
                        <ModuleList selectedModule={this.state.selectedModule}
                                    selectModule={this.selectModule}
                                    modules={this.props.modules}/></div>

                </div>
                <div className="col-8 right">
                    <LessonTabs selectLesson={this.selectLesson}
                                selectedLesson={this.state.selectedLesson}
                                lessons={this.state.selectedModule.lessons}/>

                    <br/>
                    <TopicPills topics={"2"}/>

                </div>
            </div>

        )
    }
}