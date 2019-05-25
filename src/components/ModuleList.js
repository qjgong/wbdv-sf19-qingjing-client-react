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
        let module={
            title: this.state.module.title,
            // id: (new Date()).getTime()
            id: Math.random()*50
        }
        console.log(module);
        let modules=this.state.modules;
        if (!modules) {modules=[]}
        modules.push(module);
        this.setState({
            modules: modules
        })
    }




    titleChanged = (event) => {
        this.setState({
            module: {
                title: event.target.value
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
        console.log(this.state.modules);
        return (
            <div>
                <h3>Module List</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input
                            onChange={this.titleChanged}
                            placeholder={this.state.module.title}
                             className="form-control"/>
                        <button onClick={()=>this.createModule()} className="btn btn-primary btn-block">Add Module</button>
                    </li>
                    {
                        this.state.modules && this.state.modules.map((module,key)=>
                            <ModuleItem
                                deleteModule={this.deleteModule}
                                selectModule={this.props.selectModule}
                                selectedModule={this.props.selectedModule}
                                module={module}
                                updateModule={this.props.updateModule}
                                // titleChanged={this.titleChanged}
                            key={key}/>
                        )
                    }

                </ul>
            </div>
        )
    }


}