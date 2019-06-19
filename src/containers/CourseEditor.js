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
import CourseService from "../services/CourseService";
import LessonService from "../services/LessonService";
import ModuleService from "../services/ModuleService";
import TopicService from "../services/TopicService";


export default class CourseEditor
    extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        const paths = window.location.pathname.split('/')
        const courseId = paths[paths.length - 1]
        if (this.state.course && this.state.course.id != courseId)
            this.service.findCourseById(courseId)
                .then(course => this.setState({
                    course: course
                }))
    }

    constructor(props) {
        super(props)

        this.service = new CourseService();

        this.state = {
            course: {title: "", id: -1, modules: []},
            modules: [],
            selectedModule: "",
            selectedLesson: "",
            selectedTopic: "",
            module: "",
            lesson: "",
            topic: "",
            store: null,

        };
        this.widgetService = new WidgetService();
        this.lessonService = new LessonService();
        this.moduleService = new ModuleService();
        this.topicService = new TopicService();
    }

    componentWillMount() {
        this.moduleService.findModulesforCourse(this.props.course.id)
            .then(modules => this.setState({
                modules: modules,
            }));
    }

    createTopic = (lessonId, topic) => {
        this.topicService.createTopic(lessonId, topic)
            .then(topics => this.setState({
                topics: topics
            }));
        document.getElementById("add-topic-input").value = "";
    };

    createLesson = (moduleId, lesson) => {
        this.lessonService.createLesson(moduleId, lesson)
            .then(lessons =>
                this.setState({
                    lessons: lessons
                }));
        document.getElementById("add-lesson-input").value = "";

    };


    createModule = (cId, module) => {
        this.moduleService.createModule(cId, module)
            .then(modules => this.setState({
                modules: modules
            }));
        document.getElementById("add-module-input").value = "";
    };


    selectModule = module => {

        this.lessonService.findAllLessonsforModule(module.id)
            .then(l => this.setState({
                lessons: l,
                selectedModule: module
            }));

    };


    selectLesson = lesson => {
        this.topicService.findAllTopicsforLesson(lesson.id).then(
            topics=>
        this.setState({
            topics:topics,
            selectedLesson: lesson,
        }))
    };

    selectTopic = topic => {
        this.widgetService.findWidgetsForTopic(topic.id).then(response => this.setState({
            selectedTopic: topic,
            store: createStore(widgetReducer, {widgets: response, topicId: topic.id}),
        }))

    };

    componentDidMount() {
        this.widgetService.findWidgets()
            .then((widgets) => this.setState(
                {
                    widgets: widgets
                }
            ))
    }

    updateModule = (module, title) => {
        let m = module;
        m.title = title;
        this.setState({
            modules: this.state.modules.map(i => i.id === m.id ? m : i)
        });
        this.moduleService.updateModule(m.id, m)
    };

    updateLesson = (lesson, title) => {
        let l=lesson;
        l.title=title;
        this.setState({
            lessons:this.state.lessons.map(i=>i.id===l.id?l:i)
        });
        this.lessonService.updateLesson(l.id,l)

    };

    updateTopic = (topic, title) => {
       let t=topic;
       t.title=title;
        this.setState({
            topics: this.state.topics.map(m => m.id === t.id ? t : m)
        });
    };

    topicTitleChanged = (event) => {
        this.setState({
                topic: {
                    title: event.target.value
                }
            }
        )
    };

    moduleTitleChanged = (event) => {
        this.setState({
            module: {
                title: event.target.value
            }
        })
    };

    LessonTitleChanged = (event) => {
        this.setState({
            lesson: {
                title: event.target.value
            }
        })
    };

    deleteModule = id => {
        this.moduleService.deleteModule(id)
            .then(() => this.moduleService.findModulesforCourse(this.props.course.id))
            .then(response => this.setState({
                modules: response
            }));
    };

    deleteLesson = lesson => {
        this.lessonService.deleteLesson(lesson.id)
            .then(() => this.lessonService.findAllLessonsforModule(this.state.selectedModule.id))
            .then(response => this.setState({
                lessons: response
            }))
    }

    deleteTopic = (topic) => {
        this.topicService.deleteTopic(topic.id)
            .then(() => this.topicService.findAllTopicsforLesson(this.state.selectedLesson.id))
            .then(response => this.setState({
                topics: response
            }))

    };


    render() {
        console.log(this.state.selectedTopic)

        return (
            <div className="container-fluid bg-dark">
                <div className="row bg-dark">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="navbar-header ml-5">
                            <Link to="/">
                                <li className="fa fa-times" style={{color: "white"}}/>
                            </Link>
                            <a className="navbar-brand ml-3">
                                {this.state.course.title}
                            </a>
                        </div>

                        <LessonTabs selectLesson={this.selectLesson}
                                    module={this.state.selectedModule}
                                    lesson={this.state.lesson}
                                    selectedLesson={this.state.selectedLesson}
                                    lessons={this.state.lessons}
                                    updateLesson={this.updateLesson}
                                    createLesson={this.createLesson}
                                    lessonTitleChanged={this.LessonTitleChanged}
                                    deleteLesson={this.deleteLesson}
                        />
                    </nav>
                </div>
                <div className="row">

                    <div className="col-4 left">
                        <ModuleList selectedModule={this.state.selectedModule}
                                    course={this.props.course}
                                    module={this.state.module}
                                    selectModule={this.selectModule}
                                    updateModule={this.updateModule}
                                    modules={this.state.modules}
                                    createModule={this.createModule}
                                    moduleTitleChanged={this.moduleTitleChanged}
                                    deleteModule={this.deleteModule}
                        /></div>


                    <div className="col-8 right bg-light">
                        <TopicPills topics={this.state.topics}
                                    selectedTopic={this.state.selectedTopic}
                                    lesson={this.state.selectedLesson}
                                    topic={this.state.topic}
                                    updateTopic={this.updateTopic}
                                    selectTopic={this.selectTopic}
                                    createTopic={this.createTopic}
                                    topicTitleChanged={this.topicTitleChanged}
                                    deleteTopic={this.deleteTopic}/>

                        <br/>
                        {this.state.selectedTopic && this.state.store &&
                        <Provider store={this.state.store}>
                            <WidgetListContainer/>
                        </Provider>}

                    </div>

                </div>
            </div>

        )
    }
}