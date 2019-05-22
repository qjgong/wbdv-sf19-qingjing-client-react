import React from 'react'

const ModuleItem = ({module, deleteModule, selectModule, selectedModule}) =>
    <li className={module === selectedModule ? "list-group-item active" : "list-group-item"} >
            <a>{module.title}</a>

        <i onClick={() => deleteModule(module.id)} className="fa fa-trash"/>
        <i onClick={()=>selectModule(module.id)} className="fa fa-pencil"/></li>
        export default ModuleItem

