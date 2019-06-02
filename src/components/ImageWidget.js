import React from "react";

import WidgetSharedComponents from "./WidgetSharedComponents";

const ImageWidget = ({index, IsPreview,widget, widgets, deleteWidget, moveUp, update_widget_type, moveDown,
                         update_img_src,update_widget_name}) =>
    <div className="mb-5 card p-1">
        {!IsPreview && <div>
            <div className="form-group row ml-sm-2 col-sm-12 d-flex justify-content-between">
                <h4 className="mr-auto">Heading Widget</h4>
                <WidgetSharedComponents
                    index={index}
                    widget={widget}
                    widgets={widgets}
                    move_up={moveUp}
                    move_down={moveDown}
                    update_widget_type={update_widget_type}
                    delete_widget={deleteWidget}
                />
            </div>
            <div className="widget row ml-sm-2 col-sm-12">
                <input className="form-control" placeholder="http://lorempixel.com/300/150/"
                       defaultValue={widget.src}
                       onChange={(event) => update_img_src(widget, event.target.value)}/>
            </div>
            <div className="widget row ml-sm-2 col-sm-12">
                <input className="form-control" placeholder="Widget name"
                       onChange={(event) => update_widget_name(widget, event.target.value)}
                       defaultValue={widget.name}/>
            </div>
            <div className="widget row ml-sm-2 col-sm-12">
                <h4>Preview</h4>
            </div>
        </div>}
        < div className="widget row ml-sm-2 col-sm-12">
            <img className="img" height="150" src={widget.src} width="300"/>
        </div>
    </div>

export default ImageWidget