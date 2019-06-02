import React from 'react'
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget";
import LinkWidget from "./LinkWidget";


const WidgetListComponent = ({
                                 widgets, IsPreview, togglePreview, topicId, findWidgets, update_widget_type,
                                 update_heading_size, update_widget_text, deleteWidget, update_widget_name, addWidget,
                                 updateWidget, createWidget, moveUp, moveDown
                             }) =>


    <div>

        <div className="row mb-sm-3">
            <button className="btn btn-success btn-sm ml-sm-auto mr-sm-2"
                    id="moduleSaveBtn"
                    type="submit">Save
            </button>
            <label className="mr-sm-2"><b>Preview</b></label>
            <div className="custom-control custom-switch col-sm-2">
                <input className="custom-control-input"
                       id="customSwitch"
                       type="checkbox" onClick={togglePreview}/>
                <label className="custom-control-label"
                       htmlFor="customSwitch"/>
            </div>
        </div>


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
                            update_widget_text={update_widget_text}
                            update_widget_name={update_widget_name}
                            update_heading_size={update_heading_size}
                            IsPreview={IsPreview}
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
                            update_widget_type={update_widget_type}
                            update_widget_text={update_widget_text}
                            update_widget_name={update_widget_name}
                            update_heading_size={update_heading_size}
                            IsPreview={IsPreview}/>
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
                            update_widget_type={update_widget_type}
                            update_widget_text={update_widget_text}
                            update_widget_name={update_widget_name}
                            update_heading_size={update_heading_size}
                            IsPreview={IsPreview}/>
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
                            update_widget_type={update_widget_type}
                            update_widget_text={update_widget_text}
                            update_widget_name={update_widget_name}
                            update_heading_size={update_heading_size}
                            IsPreview={IsPreview}/>
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
                                           update_widget_type={update_widget_type}
                                           update_widget_text={update_widget_text}
                                           update_widget_name={update_widget_name}
                                           update_heading_size={update_heading_size}
                                           IsPreview={IsPreview}/>
                    }
                })}


        </ul>
    </div>

export default WidgetListComponent



