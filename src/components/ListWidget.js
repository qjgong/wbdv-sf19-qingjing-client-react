import React from "react";
import WidgetSharedComponents from "./WidgetSharedComponents";


const ListWidget = ({index, widget, IsPreview,widgets, deleteWidget, updateWidget, moveUp, moveDown,}) =>
    <div className="mb-5 card p-1">
        {!IsPreview && <div>
            <div className="form-group row ml-sm-2 col-sm-12 d-flex justify-content-between">
                <h4 className="mr-auto">List Widget</h4>
                <WidgetSharedComponents
                    index={index}
                    widget={widget}
                    widgets={widgets}
                    moveUp={moveUp}
                    moveDown={moveDown}
                    deleteWidget={deleteWidget}
                    updateWidget={updateWidget}
                />
            </div>
            <div className="widget row ml-sm-2 col-sm-12">
                <label>List Items</label>
                        <textarea className="form-control"
                                  placeholder="Put each&#10;item in&#10;a separate row"
                                   defaultValue={widget.items.split(",").join("\n")}
                                  onChange={(event) => updateWidget(widget.id, {...widget,items:event.target.value})}
                                  rows="4"/>
            </div>

            <div className="widget row ml-sm-2 col-sm-12">
                <label>Widget Name</label>
                <select className="form-control"  onChange={(event)=> updateWidget(widget.id, {...widget,listType:event.target.value})}
                        defaultValue="unordered">
                    <option value="unordered">Unordered list</option>
                    <option value="ordered">Ordered list</option>
                </select>
            </div>

            <div className="widget row ml-sm-2 col-sm-12">
                <input className="form-control" placeholder="Widget name"
                       onChange={(event) => updateWidget(widget.id, {...widget,name:event.target.value})}
                       defaultValue={widget.name}/>
            </div>

            <div className="widget row ml-sm-2 col-sm-12">
                <h4>Preview</h4>
            </div>
        </div>}
        <div className="form-group row ml-sm-2 col-sm-12">
            {
                widget.items && ( widget.listType === "unordered"|| widget.listType === undefined ?
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
            {console.log(widget)}
        </div>
    </div>;

export default ListWidget