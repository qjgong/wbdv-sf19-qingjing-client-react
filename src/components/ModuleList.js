import React from 'react'
import ModuleItem from './ModuleItem'

export default class ModuleList extends React.Component {
    render() {
        return (
            <div>
                <h3>Module List</h3>
                <ul className="list-group">
                    <ModuleItem title="Module 1 - jQuery"/>
                    <ModuleItem title="Module 2 - React"/>
                    <ModuleItem title="Module 3 - Redux"/>
                    <ModuleItem title="Module 4 - Angular"/>
                    <ModuleItem title="Module 5 - Node.js"/>
                    <ModuleItem title="Module 6 - MongoDB"/>

                </ul>
            </div>
        )
    }
}