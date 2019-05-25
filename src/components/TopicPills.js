import React from 'react'

export default class TopicPills extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return(
            <ul className="nav nav-pills">

                <li className="nav-item">
                    <a className="nav-link" href="#">{this.props.selectedTopic.title}</a>
                </li>

            </ul>
        )
    }
}