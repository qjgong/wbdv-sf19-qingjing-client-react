import React from 'react'
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";
import {Link} from "react-router-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import widgetReducer from '../reducers/WidgetReducer'
import WidgetListContainer from "./WidgetListContainer";
import WidgetService from "../services/WidgetService";

export default class CourseEditor
    extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            modules: this.props.course.modules,
            selectedModule: "",
            selectedLesson: "",
            selectedTopic: "",
            module: "",
            lesson: "",
            topic: ""
        }
        // if (this.props.course.modules !== undefined && this.props.course.modules.length !== 0) {
        //     this.state.selectedModule = this.props.course.modules[0];
        //     if (this.props.course.modules[0].lessons !== undefined) {
        //         this.state.selectedLesson = this.props.course.modules[0].lessons[0];
        //         if (this.props.course.modules[0].lessons[0].topics !== undefined) {
        //             this.state.selectedTopic = this.props.course.modules[0].lessons[0].topics[0];
        //         }
        //     }
        // }


        this.widgetService = new WidgetService();
        // let widgets=this.widgetService.findWidgets(this.state.selectedTopic.id);
        //
        // this.store = createStore(widgetReducer, {topicId:this.state.selectedTopic.id, widgets:widgets, IsPreview:false})

    }


    selectModule = module => {

        // if (module.lessons !== undefined && module.lessons.length !== 0) {
        //     selectedLesson = module.lessons[0];
        //
        //     if (selectedLesson.length !== 0 && selectedLesson.topics !== undefined) {
        //         selectedTopic = module.lessons[0].topics[0];
        //     }
        // }

        this.setState(
            {
                selectedModule: module,
                selectedLesson: "",
                selectedTopic: "",
            })
    }


    selectLesson = lesson => {

        // if (lesson.length !== 0 && lesson.topics !== undefined) {
        //     selectedTopic = lesson.topics[0];
        // }

        this.setState({
            selectedLesson: lesson,
            selectedTopic: "",
        })
    }

    selectTopic = topic => {


        // if (topic.length !== 0 && topic !== undefined) {
        //     selectedTopic = topic;
        // }

        this.setState({
            selectedTopic: topic,
        })

        let widgets = this.widgetService.findWidgets(topic.id);

        this.store = createStore(widgetReducer, {topicId: topic.id, widgets: widgets, IsPreview: false})


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
        console.log(title);
        let m = lesson;
        m.title = title;
        this.setState({
            lessons: this.state.selectedModule.lessons.map(i => i.id === m.id ? m : i)
        })
    }

    updateTopic = (topic, title) => {
        let m = topic;
        m.title = title;
        this.setState({
            lessons: this.state.selectedLesson.topics.map(i => i.id === m.id ? m : i)
        })
    }


    render() {

        return (
            <div className="container-fluid bg-dark">
                <div className="row bg-dark">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="navbar-header ml-5">
                            <Link to="/">
                                <li className="fa fa-times" style={{color: "white"}}/>
                            </Link>
                            <a className="navbar-brand ml-3">
                                {this.props.course.title}
                            </a>
                        </div>

                        <LessonTabs selectLesson={this.selectLesson}
                                    selectedLesson={this.state.selectedLesson}
                                    lessons={this.state.selectedModule.lessons}
                                    updateLesson={this.updateLesson}
                        />
                    </nav>
                </div>
                <div className="row">

                    <div className="col-4 left">
                        <ModuleList selectedModule={this.state.selectedModule}
                                    selectModule={this.selectModule}
                                    updateModule={this.updateModule}
                                    modules={this.state.modules}/></div>


                    <div className="col-8 right bg-light">
                        <TopicPills topics={this.state.selectedLesson.topics}
                                    selectedTopic={this.state.selectedTopic}
                                    updateTopic={this.updateLesson}
                                    selectTopic={this.selectTopic}/>

                        <br/>
                        {this.state.selectedTopic && this.store && <Provider store={this.store}>
                            <WidgetListContainer/>
                        </Provider>}
                    </div>

                </div>


            </div>

        )
    }
}