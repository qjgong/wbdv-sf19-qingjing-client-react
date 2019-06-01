import React from 'react'
import WidgetList from './WidgetList'

export default class WidgetListComponent extends React.Component {
    constructor(props) {
        super(props)

        console.log(this.props.widgets);
        this.props.findWidgets(this.topicId)
    }

    render() {
        return (
            <div>


                <h1>Widget List ({this.props.widgets}) </h1>
                <ul>
                    {
                        this.props.widgets.map(widget =>
                            <WidgetList
                                key={widget.id}
                                updateWidget={this.props.updateWidget}
                                widget={widget}
                                deleteWidget={this.props.deleteWidget}/>)
                    }
                </ul>
                <button onClick={this.props.createWidget}>Create</button>
            </div>

        )
    }
}
