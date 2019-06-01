import React from 'react'
import WidgetList from './WidgetList'

const WidgetListComponent = ({widgets,topicId,findWidgets,deleteWidget,updateWidget,createWidget})=>

            <div>


                <h1>Widget List </h1>
                <ul>
                    {
                        widgets.map(widget =>
                            <WidgetList
                                key={widget.id}
                                updateWidget={updateWidget}
                                widget={widget}
                                deleteWidget={deleteWidget}
                                topicId={topicId}
                                findWidgets={findWidgets}
                                createWidget={createWidget}/>)
                    }
                </ul>
                {/*<button onClick={this.props.createWidget}>Create</button>*/}
            </div>;

    export default WidgetListComponent



