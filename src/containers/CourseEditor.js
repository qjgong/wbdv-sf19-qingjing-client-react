import React from 'react'
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";

export default class CourseEditor
    extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            selectedModule: "",
            selectedLesson: ""
        }
        if (this.props.course.modules !== undefined && this.props.course.modules.length !== 0) {
            this.state.selectedModule = this.props.course.modules[0];
            if (this.props.course.modules[0].lessons !== undefined) {
                this.state.selectedLesson = this.props.course.modules[0].lessons[0];
            }
        }
    }


    selectModule = module => {
        let selectedLesson = module.lessons === undefined ? "" : module.lessons[0];
        let selectedTopic = "";
        if (selectedLesson.length !== 0 && selectedLesson.topics !== undefined) {
            selectedTopic = module.lessons[0].topics[0];
        }
        ;
        this.setState(
            {

                selectedModule: module,
                selectedLesson: selectedLesson,
                selectedTopic: selectedTopic,
            })
    }


    selectLesson = lesson =>
        this.setState({
            selectedLesson: lesson,
            selectedTopic: lesson.topics[0]
        })


    render() {
        return (
            <div>
                <h2>{this.props.course.title}</h2>
                <div className="row">
                    <div className="col-4 left">
                        <ModuleList selectedModule={this.state.selectedModule}
                                    selectModule={this.selectModule}
                                    modules={this.props.modules}/></div>


                    <div className="col-8 right">
                        <h2>Lessons</h2>
                        <LessonTabs selectLesson={this.selectLesson}
                                    selectedLesson={this.state.selectedLesson}
                                    lessons={this.state.selectedModule.lessons}
                        />

                        <br/>
                        <TopicPills topics={"2"}/>

                    </div>
                </div>
            </div>

                )
                }
                }