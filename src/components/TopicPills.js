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
            title: 'New Topic',
            id: Math.random() * 100
        }
        
        let topics = this.state.topics;
        if (!topics) {
            topics = []
        }
        topics.push(topic);
        this.setState({topics: topics})
    }

    titleChanged = (event) => {
        this.setState({
            topic: {
                title: event.target.value
            }
        })
    }

    deleteTopic=(id)=>{
        this.setState({
            topics:this.state.topics.filter(topic=>topic.id!==id)
        })
    }

    render() {
        return (
            <ul className="nav nav-pills">
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


                <li className="nav-item">
                    <input
                        onChange={this.titleChanged}
                        placeholder="New topic"
                        className="form-control"/>
                    <button onClick={()=>this.createTopic()} className="btn btn-primary">Add topic</button>
                </li>
            </ul>


        )
    }
}

