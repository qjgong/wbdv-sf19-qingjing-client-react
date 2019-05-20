import React from 'react'


export default class ModuleList extends React.Component {
    render() {
        return(
            <div>
                <h3>Module List</h3>
                <ul className="list-group">
                    <li className="list-group-item"> HTML</li>
                    <li className="list-group-item"> JavaScript</li>

                </ul>
            </div>
        )
    }
}