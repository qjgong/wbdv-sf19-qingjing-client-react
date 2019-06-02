import React from 'react'
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget";
import LinkWidget from "./LinkWidget";


const WidgetListComponent = ({widgets, topicId, findWidgets, update_widget_type, deleteWidget, addWidget, updateWidget, createWidget, moveUp, moveDown}) =>


    <div>

        <button className="btn btn-danger floating" onClick={addWidget}>
            <i className="fa fa-plus" style={{color: "white"}}/>
        </button>

        <ul>
            {

                widgets.map((widget, key) => {
                    if (widget && widget.type === "HEADING") {
                        return <HeadingWidget
                            key={key}
                            widgets={widgets}
                            index={widgets.indexOf(widget)}
                            updateWidget={updateWidget}
                            widget={widget}
                            deleteWidget={deleteWidget}
                            topicId={topicId}
                            findWidgets={findWidgets}
                            createWidget={createWidget}
                            moveUp={moveUp}
                            moveDown={moveDown}
                            update_widget_type={update_widget_type}
                        />
                    } else if (widget && widget.type === "PARAGRAPH") {
                        return <ParagraphWidget
                            key={key}
                            widgets={widgets}
                            index={widgets.indexOf(widget)}
                            updateWidget={updateWidget}
                            widget={widget}
                            deleteWidget={deleteWidget}
                            topicId={topicId}
                            findWidgets={findWidgets}
                            createWidget={createWidget}
                            moveUp={moveUp}
                            moveDown={moveDown}
                            update_widget_type={update_widget_type}/>
                    } else if (widget && widget.type === "LIST") {
                        return <ListWidget
                            key={key}
                            widgets={widgets}
                            index={widgets.indexOf(widget)}
                            updateWidget={updateWidget}
                            widget={widget}
                            deleteWidget={deleteWidget}
                            topicId={topicId}
                            findWidgets={findWidgets}
                            createWidget={createWidget}
                            moveUp={moveUp}
                            moveDown={moveDown}
                            update_widget_type={update_widget_type}/>
                    } else if (widget && widget.type === "IMAGE") {
                        return <ImageWidget
                            key={key}
                            widgets={widgets}
                            index={widgets.indexOf(widget)}
                            updateWidget={updateWidget}
                            widget={widget}
                            deleteWidget={deleteWidget}
                            topicId={topicId}
                            findWidgets={findWidgets}
                            createWidget={createWidget}
                            moveUp={moveUp}
                            moveDown={moveDown}
                            update_widget_type={update_widget_type}/>
                    } else if (widget && widget.type === "LINK") {
                        return <LinkWidget index={widgets.indexOf(widget)}
                                           key={key}
                                           widgets={widgets}
                                           updateWidget={updateWidget}
                                           widget={widget}
                                           deleteWidget={deleteWidget}
                                           topicId={topicId}
                                           findWidgets={findWidgets}
                                           createWidget={createWidget}
                                           moveUp={moveUp}
                                           moveDown={moveDown}
                                           update_widget_type={update_widget_type}/>
                    }
                })}


        </ul>
    </div>;

export default WidgetListComponent



