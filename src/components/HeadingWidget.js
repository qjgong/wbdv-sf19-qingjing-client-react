import React from 'react'
import WidgetSharedComponents from "./WidgetSharedComponents";

const HeadingWidget = ({
                           index, IsPreview, widgets, widget, deleteWidget, moveUp, moveDown, updateWidget,
                       }) =>

    <div className="mb-5 card p-1">

        {!IsPreview && <div>
            <div className="row ml-sm-2 col-sm-12 d-flex justify-content-between">
                <h4 className="mr-auto">Heading Widget</h4>
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
            <div className="form-group row ml-sm-2 col-sm-12">
                <input onChange={(event) => updateWidget(widget.id, {
                    ...widget,
                    text: event.target.value
                })} className="form-control"
                       placeholder="Heading text"/>
            </div>
            <div className="form-group row ml-sm-2 col-sm-12">
                <select className="form-control" defaultValue={widget.size}
                        onChange={(event) => updateWidget(widget.id, {
                            ...widget, src: event.target.value
                        })}
                >
                    <option value="h1">Heading 1</option>
                    <option value="h2">Heading 2</option>
                    <option value="h3">Heading 3</option>
                </select>
            </div>
            <div className="form-group row ml-sm-2 col-sm-12">
                <input onChange={(event) => updateWidget(widget.id, {...widget, name: event.target.value})}
                       className="form-control"
                       placeholder="Widget name"/>
            </div>
            <div className="form-group row ml-sm-2 col-sm-12">
                <h4>Preview</h4>
            </div>
        </div>}
        <div className="form-group row ml-sm-2 col-sm-12">
            {console.log(widget)}
            {
                widget.size === "h1" &&
                <h1>{widget.text}</h1>
            }
            {
                widget.size === "h2" &&
                <h2>{widget.text}</h2>
            }
            {
                widget.size === "h3" &&
                <h3>{widget.text}</h3>
            }
        </div>
    </div>;
export default HeadingWidget