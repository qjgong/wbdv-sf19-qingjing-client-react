import React from "react";
import WidgetSharedComponents from "./WidgetSharedComponents";

const ParagraphWidget = ({index, widget, IsPreview, widgets, updateWidget, deleteWidget, moveUp, moveDown,topicId}) =>
    <div className="mb-5 card p-1">
        {!IsPreview && <div>
            <div className="row ml-sm-2 col-sm-12 d-flex justify-content-between">
                <h4 className="mr-auto">Paragraph Widget</h4>
                <WidgetSharedComponents
                    index={index}
                    widget={widget}
                    widgets={widgets}
                    moveUp={moveUp}
                    moveDown={moveDown}
                    topicId={topicId}
                    deleteWidget={deleteWidget}
                    updateWidget={updateWidget}
                />
            </div>
            <div className="widget row ml-sm-2 col-sm-12">
                        <textarea className="form-control"
                                  placeholder="Lorem ipsum"
                                  onChange={(event) => updateWidget(widget.id, {...widget, text: event.target.value})}/>
            </div>
            <div className="widget row ml-sm-2 col-sm-12">
                <input className="form-control" placeholder="Widget name"
                       onChange={(event) => updateWidget(widget.id, {...widget, name: event.target.value})}
                       defaultValue={widget.name}/>
            </div>
            <div className="widget row ml-sm-2 col-sm-12">
                <h4>Preview</h4>
            </div>
        </div>}
        <div className="widget row ml-sm-2 col-sm-12">
            <label>{widget.text}</label>
        </div>
        {console.log(widget)}
    </div>;

export default ParagraphWidget