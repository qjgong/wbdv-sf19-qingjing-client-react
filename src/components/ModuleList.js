import React from 'react'
import ModuleItem from './ModuleItem'

export default class ModuleList extends React.Component {
    constructor() {
        super();
        this.state = {
            module: {id: -1, title: 'New Module'},
            modules: [
                {id: 123, title: "Module 1 - jQuery"},
                {id: 234, title: "Module 2 - React"},
                {id:345,title:"Module 3 - Redux"},
                {id:456,title:"Module 4 - Angular"},
                {id:567,title:"Module 5 - Node.js"},
                {id:678,title:"Module 6 - MongoDB"},

            ]

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
        this.setState({
            modules: [this.state.module, ...this.state.modules]
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
                    {
                        this.state.modules.map(module =>
                            <ModuleItem
                                deleteModule={this.deleteModule}
                                selectModule={this.selectModule}
                                selectedModel={this.selectedModule}
                                module={module}
                                key={module.id}/>
                        )
                    }

                </ul>
            </div>
        )
    }


}