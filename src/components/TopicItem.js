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
    };
    componentDidUpdate(prevProps) {
        if (prevProps.selectedTopic !== this.props.selectedTopic) {
            this.setState({
                selectedTopic: this.props.selectedTopic
            })
        }
    }

    render() {
        return (
            <li className="nav-item mr-3" onClick={() => this.props.selectTopic(this.props.topic)}
                className={this.props.topic === this.state.selectedTopic ? "nav-link active bg-secondary" : "nav-link bg-dark"}>
                <a>{this.props.topic.title}</a>

                <button className="btn btn-danger btn-sm ml-3">
                    <i onClick={() => this.props.deleteTopic(this.props.topic)} className="fa fa-trash"/></button>

                <button className="btn btn-success btn-sm ml-3">
                    <i onClick={() => this.toggleInput()} className="fa fa-edit"/></button>
                {
                    this.state.inputHidden ? "" :
                        <div><input type="text" onChange={this.titleChanged} placeholder={this.props.topic.title}
                                    defaultValue={this.props.topic.title}/>
                            <button onClick={() => {
                                this.props.updateTopic(this.state.selectedTopic, this.state.title);
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
