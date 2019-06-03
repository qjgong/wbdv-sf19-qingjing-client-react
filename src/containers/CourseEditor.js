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
            topic: "",

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


    createTopic = () => {

        let topics = this.state.selectedLesson.topics;
        if (!topics) {
            topics = []
        }
        topics.push({
            title: this.state.topic.title ? this.state.topic.title : "New Topic",
            id: Math.random() * 1000,
            widgets: []
        });
        document.getElementById("add-topic-input").value = "";
        let lesson = this.state.selectedLesson;
        lesson.topics = topics;

        let lessons = this.state.selectedModule.lessons;
        lessons = lessons.map(x => x.id === lesson.id ? lesson : x);

        let module = this.state.selectedModule;
        module.lessons = lessons;
        this.setState({
            modules: this.state.modules.map(m => m.id === module.id ? module : m)
        });
    };

    createLesson = () => {
        let lesson = {
            title: this.state.lesson.title ? this.state.lesson.title : "New Lesson",
            id: Math.random() * 1000,
            topics: []
        };
        let lessons = this.state.selectedModule.lessons ? [...this.state.selectedModule.lessons] : [];
        lessons.push(lesson);
        let module = this.state.selectedModule;
        module.lessons = lessons;
        this.setState({
            modules: this.state.modules.map(m => m.id === module.id ? module : m),
        });
    };

    createModule = () => {
        let modules = this.state.modules ? this.state.modules : [];
        modules.push({
            id: Math.random() * 1000,
            title: this.state.module.title ? this.state.module.title : "New Module",
            lessons: []
        });
        this.setState({
            modules: modules,
        });
        console.log(this.state.modules)
    };


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
            })

        console.log(this.state.selectedModule)
    }


    selectLesson = lesson => {

        // if (lesson.length !== 0 && lesson.topics !== undefined) {
        //     selectedTopic = lesson.topics[0];
        // }

        this.setState({
            selectedLesson: lesson,
        })
        console.log(this.state.selectedLesson)
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
        this.setState({
            modules: this.state.modules.map(i => i.id === m.id ? m : i)
        })
    }

    updateLesson = (lesson, title) => {
        let newLesson = this.state.selectedLesson;
        newLesson.title = title;
        let module = this.state.selectedModule;
        let lessons = this.state.selectedModule.lessons;
        lessons = lessons.map(l => l.id === lesson.id ? newLesson : l);
        module.lessons = lessons;
        this.setState({
            modules: this.state.modules.map(m => m.id === module.id ? module : m)
        });
    };

    updateTopic = (topic, title) => {
        let newTopic = this.state.selectedTopic;
        newTopic.title = title;
        let topics = this.state.selectedLesson.topics;
        topics = topics.map(t => t.id === topic.id ? newTopic : t);
        let lesson = this.state.selectedLesson;
        lesson.topics = topics;
        let lessons = this.state.selectedModule.lessons;
        lessons = lessons.map(l => l.id === lesson.id ? lesson : l);
        let module = this.state.selectedModule;
        module.lessons = lessons;
        this.setState({
            modules: this.state.modules.map(m => m.id === module.id ? module : m)
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
        let i = this.state.modules.findIndex(m => m.id !== id);
        this.setState(
            {
                selectedModule: i === -1 ? "" : this.state.modules[i],
                selectedLesson: i !== -1 && this.state.modules[i].lessons ? this.state.modules[i].lessons[0] : "",
                modules: this.state.modules.filter(m => m.id !== id)
            }
        );
        console.log(this.state.modules)
    };

    deleteLesson = lesson => {
        if (this.state.selectedModule.lessons !== undefined) {
            let lessons = this.state.selectedModule.lessons;
            lessons = lessons.filter(l => l !== lesson);
            let module = this.state.selectedModule;
            module.lessons = lessons;
            this.setState({
                modules: this.state.modules.map(m => m.id === module.id ? module : m),
                selectedLesson: lessons.length === 0 ? "" : lessons[0]
            });
        }
    };

    deleteTopic = (topic) => {
        if (this.state.selectedLesson.topics !== undefined) {
            let topics = this.state.selectedLesson.topics;
            topics = topics.filter(t => t !== topic);
            let lesson = this.state.selectedLesson;
            lesson.topics = topics;
            let lessons = this.state.selectedModule.lessons;
            lessons = lessons.map(l => l.id === lesson.id ? lesson : l);
            let module = this.state.selectedModule;
            module.lessons = lessons;
            this.setState({
                modules: this.state.modules.map(m => m.id === module.id ? module : m)
            });
        }
    };


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
                                    createLesson={this.createLesson}
                                    lessonTitleChanged={this.LessonTitleChanged}
                                    deleteLesson={this.deleteLesson}
                        />
                    </nav>
                </div>
                <div className="row">

                    <div className="col-4 left">
                        <ModuleList selectedModule={this.state.selectedModule}
                                    selectModule={this.selectModule}
                                    updateModule={this.updateModule}
                                    modules={this.state.modules}
                                    createModule={this.createModule}
                                    moduleTitleChanged={this.moduleTitleChanged}
                                    deleteModule={this.deleteModule}
                        /></div>


                    <div className="col-8 right bg-light">
                        <TopicPills topics={this.state.selectedLesson.topics}
                                    selectedTopic={this.state.selectedTopic}
                                    updateTopic={this.updateTopic}
                                    selectTopic={this.selectTopic}
                                    createTopic={this.createTopic}
                                    topicTitleChanged={this.topicTitleChanged}
                                    deleteTopic={this.deleteTopic}/>

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