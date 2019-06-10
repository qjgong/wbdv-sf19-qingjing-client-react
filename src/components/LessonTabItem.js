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
    };

    titleChanged = (event) => {
        this.setState({
                title: event.target.value

            }
        )
    };

    render() {
        return (
            <li onClick={() => this.props.selectLesson(this.props.lesson)}
                className={this.props.lesson === this.props.selectedLesson ? "nav-link active bg-secondary" : "nav-link"}>
                <i>{this.props.lesson.title}</i>
                <button className="btn btn-danger btn-sm ml-3">
                    <i onClick={() => this.props.deleteLesson(this.props.lesson)} className="fa fa-trash"/></button>
                <button className="btn btn-success btn-sm ml-3">
                    <i onClick={() => this.toggleInput()} className="fa fa-edit"/></button>
                {
                    this.state.inputHidden ? "" :
                        <div><input type="text" onChange={this.titleChanged} placeholder={this.props.lesson.title}
                                    defaultValue={this.props.lesson.title}/>
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
