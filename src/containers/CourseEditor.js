import React from 'react'
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";

export default class CourseEditor
    extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            modules: this.props.course.modules,
            selectedModule: "",
            selectedLesson: ""
        }
        if (this.props.course.modules !== undefined && this.props.course.modules.length !== 0) {
            this.state.selectedModule = this.props.course.modules[0];
            if (this.props.course.modules[0].lessons !== undefined) {
                this.state.selectedLesson = this.props.course.modules[0].lessons[0];
                if (this.props.course.modules[0].lessons[0].topics !== undefined) {
                    this.state.selectedTopic = this.props.course.modules[0].lessons[0].topics[0];
                }
            }
        }
    }


    selectModule = module => {
        let selectedLesson = "";
        let selectedTopic = "";
        if (module.lessons !== undefined && module.lessons.length !== 0) {
            selectedLesson = module.lessons[0];

            if (selectedLesson.length !== 0 && selectedLesson.topics !== undefined) {
                selectedTopic = module.lessons[0].topics[0];
            }
        }

        this.setState(
            {

                selectedModule: module,
                selectedLesson: selectedLesson,
                selectedTopic: selectedTopic,
            })
    }


    selectLesson = lesson => {
        let selectedTopic = "";
        if (lesson.length!==0 && lesson.topics !== undefined) {
            selectedTopic = lesson.topics[0];
        }

        this.setState({
            selectedLesson: lesson,
            selectedTopic: selectedTopic,
        })
    }

    updateModule = (module, title) => {
        let m = module;
        m.title = title;
        console.log(m);
        this.setState({
            modules: this.state.modules.map(i => i.id === m.id ? m : i)
        })
    }

    updateLesson = (lesson, title) => {
        let m = lesson;
        m.title = title;
        this.setState({
            lessons: this.state.lessons.map(i => i.id === m.id ? m : i)
        })
    }


    render() {
        return (
            <div>
                <h2>{this.props.course.title}</h2>
                <div className="row">
                    <div className="col-4 left">
                        <ModuleList selectedModule={this.state.selectedModule}
                                    selectModule={this.selectModule}
                                    updateModule={this.updateModule}
                                    modules={this.state.modules}/></div>


                    <div className="col-8 right">
                        <h2>Lessons</h2>
                        <LessonTabs selectLesson={this.selectLesson}
                                    selectedLesson={this.state.selectedLesson}
                                    lessons={this.state.selectedModule.lessons}
                                    updateLesson={this.updateLesson}
                        />

                        <br/>
                        <TopicPills topics={this.state.selectedLesson.topics}
                                    selectedTopic={this.state.selectedTopic}/>

                    </div>
                </div>
            </div>

        )
    }
}