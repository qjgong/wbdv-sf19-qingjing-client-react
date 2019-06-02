import React from "react";
import WidgetSharedComponents from "./WidgetSharedComponents";


const LinkWidget = ({index, IsPreview, widget, widgets, deleteWidget, moveUp, update_widget_type, moveDown,  update_widget_href,update_widget_title,update_widget_name}) =>

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
                <label>Link URL</label>
                <input className="form-control"  placeholder="Link URL"
                       defaultValue={widget.href}
                       onChange={(event) => update_widget_href(widget, event.target.value)}/>
            </div>
            <div className="widget row ml-sm-2 col-sm-12">
                <input className="form-control" placeholder="Link text"
                       defaultValue={widget.title}
                       onChange={(event) => update_widget_title(widget, event.target.value)}/>
            </div>
            <div className="widget row ml-sm-2 col-sm-12">
                <input className="form-control" placeholder="https://www.youtube.com/user/jannunzi"/>
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
        <div className="widget row ml-sm-2 col-sm-12">
            <a href={widget.href}>{widget.title}</a>
        </div>
    </div>

export default LinkWidget
