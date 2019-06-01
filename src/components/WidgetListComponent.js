import React from 'react'
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget";
import LinkWidget from "./LinkWidget";


const WidgetListComponent = ({widgets, topicId, findWidgets, deleteWidget, updateWidget, createWidget, moveUp,moveDown}) =>


    <div>

        <ul>
            {

                widgets.map(widget => {
                    if (widget && widget.type === "HEADING") {
                        return <HeadingWidget
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
                        />
                    } else if (widget && widget.type === "PARAGRAPH") {
                        return <ParagraphWidget
                            widgets={widgets}
                            index={widgets.indexOf(widget)}
                            updateWidget={updateWidget}
                            widget={widget}
                            deleteWidget={deleteWidget}
                            topicId={topicId}
                            findWidgets={findWidgets}
                            createWidget={createWidget}
                            moveUp={moveUp}
                            moveDown={moveDown}/>
                    } else if (widget && widget.type === "LIST") {
                        return <ListWidget
                            widgets={widgets}
                            index={widgets.indexOf(widget)}
                            updateWidget={updateWidget}
                            widget={widget}
                            deleteWidget={deleteWidget}
                            topicId={topicId}
                            findWidgets={findWidgets}
                            createWidget={createWidget}
                            moveUp={moveUp}
                            moveDown={moveDown}/>
                    } else if (widget && widget.type === "IMAGE") {
                        return <ImageWidget
                            widgets={widgets}
                            index={widgets.indexOf(widget)}
                            updateWidget={updateWidget}
                            widget={widget}
                            deleteWidget={deleteWidget}
                            topicId={topicId}
                            findWidgets={findWidgets}
                            createWidget={createWidget}
                            moveUp={moveUp}
                            moveDown={moveDown}/>
                    } else if (widget && widget.type === "LINK") {
                        return <LinkWidget  index={widgets.indexOf(widget)}
                                           widgets={widgets}
                                           updateWidget={updateWidget}
                                           widget={widget}
                                           deleteWidget={deleteWidget}
                                           topicId={topicId}
                                           findWidgets={findWidgets}
                                           createWidget={createWidget}
                                           moveUp={moveUp}
                                           moveDown={moveDown}/>
                    }
                })}


        </ul>
    </div>;

export default WidgetListComponent



