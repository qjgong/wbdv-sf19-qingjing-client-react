import React from 'react'
import ModuleItem from './ModuleItem'

export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modules: this.props.modules

        };
    }

    renderListOfModules() {
        let modules = this.state.modules
            .map(function (module) {
                return <ModuleItem
                    title={module.title} key={module.id}/>
            });
        return modules;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {


        if (prevProps.modules !== this.props.modules) {
            this.setState({
                modules: this.props.modules
            })
        }
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item bg-dark">
                        <input
                            onChange={this.props.moduleTitleChanged}
                            placeholder="New Module"
                            className="form-control"
                            id="add-module-input"/>
                        <button onClick={() => this.props.createModule(this.props.course.id,
                            {
                                title: this.props.module.title ? this.props.module.title : "New Module",
                            }
                        )} className="btn btn-secondary btn-block">Add
                            Module
                        </button>
                    </li>
                    {
                        this.state.modules && this.state.modules.map((module, key) =>
                            <ModuleItem
                                deleteModule={this.props.deleteModule}
                                selectModule={this.props.selectModule}
                                selectedModule={this.props.selectedModule}
                                module={module}
                                updateModule={this.props.updateModule}
                                key={key}/>
                        )
                    }

                </ul>
            </div>
        )
    }


}