import React from 'react'

const ModuleItem = ({module, deleteModule, selectModule, selectedModule}) =>
    <li className={module === selectedModule ? "list-group-item active" : "list-group-item"} >
        {module.title}

        <i onClick={() => deleteModule(module.id)} className="fa fa-trash"></i>
        <i onClick={()=>selectModule(module.id)} className="fa fa-pencil"></i></li>
        export default ModuleItem

