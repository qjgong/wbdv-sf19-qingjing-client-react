import React from 'react'
import ModuleItem from './ModuleItem'

export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            module: {id: -1, title: 'New Module'},
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
                        <button onClick={() => this.props.createModule()} className="btn btn-secondary btn-block">Add
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