import React from "react";
import WidgetSharedComponents from "./WidgetSharedComponents";


const ListWidget = ({index, widget, IsPreview,widgets, deleteWidget, update_widget_type, moveUp, moveDown, update_widget_name,update_list_items,update_list_type}) =>
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
                <label>List Items</label>
                        <textarea className="form-control"
                                  placeholder="Put each&#10;item in&#10;a separate row"
                                  defaultValue={widget.items.split(",").join("\n")}
                                  onChange={(event) => update_list_items(widget, event.target.value)}
                                  rows="4"/>
            </div>

            <div className="widget row ml-sm-2 col-sm-12">
                <label>Widget Name</label>
                <select className="form-control"  onChange={(event)=> update_list_type(widget, event.target.value)}
                        defaultValue={widget.type}>
                    <option value="unordered">Unordered list</option>
                    <option value="ordered">Ordered list</option>
                </select>
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
            {
                widget.items && ( widget.type === "unordered" ?
                    <ul>
                        {
                            widget.items.split(",").map((item, key) =>
                                <li key={key}>{item}</li>)
                        }
                    </ul> :
                    <ol>
                        {
                            widget.items.split(",").map((item, key) =>
                                <li key={key}>{item}</li>)
                        }
                    </ol>)
            }
        </div>
    </div>;

export default ListWidget