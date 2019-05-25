import React from 'react'

export default class LessonTabItem extends React.Component {
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
                lesson:
                    {
                        title: event.target.value
                    }
            }
        )
    }


    render() {
        return (
            <li className="nav-item" onClick={() => this.props.selectLesson(this.props.lesson)}
                className={this.props.lesson === this.props.selectedLesson ? "nav-link active" : "nav-link"}>
                <a>{this.props.lesson.title}</a>

                <i onClick={() => this.props.deleteLesson(this.props.lesson.id)} className="fa fa-trash"/>

                <i onClick={() => this.toggleInput()} className="fa fa-edit"/>
                {
                    this.state.inputHidden ? "" :
                        <div><input type="text" onChange={this.titleChanged} placeholder={this.props.lesson.title}/>
                            <button onClick={() => {
                                this.props.updateLesson(this.props.selectedLesson, this.state.title);
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
