import React from 'react'

export default class TopicItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputHidden: true,
            title: ""
        };
    }

    toggleInput = () => {
        this.setState({
            inputHidden: !this.state.inputHidden
        })
    }

    titleChanged = (event) => {
        this.setState({
                title: event.target.value
            }
        )
    }

    render() {
        return (
            <li className="nav-item" onClick={() => this.props.selectTopic(this.props.topic)}
                className={this.props.topic === this.props.selectedTopic ? "nav-link active" : "nav-link"}>
                <a>{this.props.topic.title}</a>

                <i onClick={() => this.props.deleteTopic(this.props.topic.id)} className="fa fa-trash"/>

                <i onClick={() => this.toggleInput()} className="fa fa-edit"/>
                {
                    this.state.inputHidden ? "" :
                        <div><input type="text" onChange={this.titleChanged} placeholder={this.props.topic.title}/>
                            <button onClick={() => {
                                this.props.updateTopic(this.props.selectedTopic, this.state.title);
                                this.toggleInput()
                            }}
                                    className="btn btn-primary">Save
                            </button>
                        </div>


                }
            </li>
        )
    }
}
