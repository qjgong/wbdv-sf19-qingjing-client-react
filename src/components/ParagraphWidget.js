import React from "react";
import WidgetSharedComponents from "./WidgetSharedComponents";

const ParagraphWidget = ({index, widget, IsPreview, widgets,updateWidget, update_widget_type, deleteWidget, moveUp, moveDown}) =>
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
                    update_widget_type={update_widget_type}
                    deleteWidget={deleteWidget}
                    updateWidget={updateWidget}
                />
            </div>
            <div className="widget row ml-sm-2 col-sm-12">
                        <textarea className="form-control"
                                  placeholder="Lorem ipsum"/>
            </div>
            <div className="widget row ml-sm-2 col-sm-12">
                <input className="form-control" placeholder="Widget name"/>
            </div>
            <div className="widget row ml-sm-2 col-sm-12">
                <h4>Preview</h4>
            </div>
        </div>}
        <div className="widget row ml-sm-2 col-sm-12">
            <label>Lorem ipsum</label>
        </div>
    </div>;

export default ParagraphWidget