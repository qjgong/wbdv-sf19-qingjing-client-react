import React from 'react'

const ModuleItem=({title,deleteModule})=>
    <li className="list-group-item">
        {title}
        <i onClick={()=>deleteModule(module.id)} className="fa fa-trash"></i>
        <button className="fa fa-pencil"></button></li>
export default ModuleItem

