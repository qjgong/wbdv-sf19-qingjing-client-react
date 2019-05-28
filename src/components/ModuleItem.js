import React from 'react'


export default class ModuleItem extends React.Component {
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

        })
    }


    render() {
        return (

            <li onClick={() => this.props.selectModule(this.props.module)}
                className={this.props.module === this.props.selectedModule ? "list-group-item active bg-secondary" : "list-group-item bg-dark"}>
                <a>{this.props.module.title}</a>

                <button className="btn btn-danger btn-sm ml-3">
                    <i onClick={() => this.props.deleteModule(this.props.module.id)} className="fa fa-trash"/></button>

                <button className="btn btn-success btn-sm ml-3">
                    <i onClick={() => this.toggleInput()} className="fa fa-edit"/></button>
                {
                    this.state.inputHidden ? "" :
                        <div><input type="text" onChange={this.titleChanged} placeholder={this.props.module.title}
                                    defaultValue={this.props.module.title}/>
                            <button onClick={() => {
                                this.props.updateModule(this.props.selectedModule, this.state.title);
                                this.toggleInput()
                            }}
                                    className="btn btn-primary btn-block">Save
                            </button>
                        </div>


                }
            </li>

        )
    }
}

