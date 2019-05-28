import React from 'react'
import TopicItem from "./TopicItem";


export default class TopicPills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: this.props.topics
        }
    }

    createTopic = () => {
        let topic = {
            title: this.state.topic.title,
            id: Math.random() * 100
        }

        let topics = this.state.topics;
        if (!topics) {
            topics = []
        }
        topics.push(topic);
        document.getElementById("add-topic-input").value = "";
        this.setState({topics: topics})
    }

    titleChanged = (event) => {
        this.setState({
            topic: {
                title: event.target.value
            }
        })
    }

    deleteTopic = (id) => {
        this.setState({
            topics: this.state.topics.filter(topic => topic.id !== id)
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.topics !== this.props.topics) {
            this.setState({
                topics: this.props.topics
            })
        }
    }

    render() {
        return (
            <ul className="nav nav-pills mt-3">
                {
                    this.state.topics && this.state.topics.map((topic, key) =>
                        <TopicItem topic={topic} key={key}
                                   selectedTopic={this.props.selectedTopic}
                                   selectTopic={this.props.selectTopic}
                                   updateTopic={this.props.updateTopic}
                                   titleChanged={this.titleChanged}
                                   deleteTopic={this.deleteTopic}
                        />)

                }


                <li className="nav-item ml-3">
                    <input
                        onChange={this.titleChanged}
                        placeholder="New topic"
                        className="form-control"
                        id="add-topic-input"/>
                    <button onClick={() => this.createTopic()} className="btn btn-secondary btn-block">Add topic
                    </button>
                </li>
            </ul>


        )
    }
}

