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

    createModule = () => {
        this.state.module.id = (new Date()).getTime()
        let modules=this.state.modules;
        if (!modules) {modules=[]}
        modules.push(this.state.module);
        this.setState({
            modules: modules
        })
    }
    titleChanged = (event) => {
        console.log(event.target.value)
        this.setState({
            module: {
                title: event.target.value,
                id: (new Date()).getTime()
            }
        })
    }
    deleteModule=(id)=>{
        console.log('deleteModule'+id)
        this.setState({
            modules:this.state.modules.filter(module=>module.id !==id)
        })
    }

    render() {
        return (
            <div>
                <h3>Module List</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input
                            onChange={this.titleChanged}
                            defaultValue={this.state.module.title}
                            value={this.state.module.title} className="form-control"/>
                        <button onClick={this.createModule} className="btn btn-primary btn-block">Add Module</button>
                    </li>
                    <li>
                    {
                        this.state.modules && this.state.modules.map(module =>
                            <ModuleItem
                                deleteModule={this.deleteModule}
                                selectModule={this.props.selectModule}
                                selectedModel={this.props.selectedModule}
                                module={module}
                                key={module.id}/>
                        )
                    }
                    </li>

                </ul>
            </div>
        )
    }


}