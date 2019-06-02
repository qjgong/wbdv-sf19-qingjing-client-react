import React from 'react'
import {HEADING, IMAGE, LINK, LIST, PARAGRAPH} from "../constants/constants";


const HeadingWidget = ({index, widgets, widget, deleteWidget, moveUp, moveDown, update_widget_type, typeChange, sizeChange, nameChange, textChange}) =>

    <div className="mb-4 card p-1">
        <div className="form-group row ml-sm-2 col-sm-12">
            <h4 className="mr-auto">Heading Widget</h4>
            {
                (index != 0) && <button className={"btn btn-xs btn-warning mr-1"} onClick={() => moveUp(widget.id)}>
                    <i className={"fa fa-arrow-up fa-sm"}/>
                </button>
            }

            {
                (index !== widgets.length - 1) && <button className="btn btn-xs btn-warning mr-1"
                                                          onClick={() => moveDown(widget.id)}>
                    <i className="fa fa-arrow-down fa-sm"/>
                </button>}
            <select className="form-control col-sm-2"
                    id="type"
                    defaultValue={widget.type}
                    onChange={(event) => update_widget_type(widget, event.target.value)}>
                <option value={HEADING}>Heading</option>
                <option value={PARAGRAPH}>Paragraph</option>
                <option value={LIST}>List</option>
                <option value={IMAGE}>Image</option>
                <option value={LINK}>Link</option>
            </select>
            <button className="btn btn-xs btn-danger ml-1"

                    onClick={() => deleteWidget(widget.id)}>
                <i className="fa fa-times" style={{color: "white"}}/>
            </button>
        </div>
        <div className="form-group row ml-sm-2 col-sm-12">
            <input onChange={textChange} className="form-control" placeholder="Heading text"/>
        </div>
        <div className="form-group row ml-sm-2 col-sm-12">
            <select className="form-control" defaultValue={widget.size} onChange={sizeChange}>
                <option value="1">Heading 1</option>
                <option value="2">Heading 2</option>
                <option value="3">Heading 3</option>
            </select>
        </div>
        <div className="form-group row ml-sm-2 col-sm-12">
            <input onChange={nameChange} className="form-control" placeholder="Widget name"/>
        </div>
        <div className="form-group row ml-sm-2 col-sm-12">
            <h4>Preview</h4>
        </div>
        <div className="form-group row ml-sm-2 col-sm-12">
            {
                widget.size === 1 &&
                <h1>{widget.text}</h1>
            }
            {
                widget.size === 2 &&
                <h2>{widget.text}</h2>
            }
            {
                widget.size === 3 &&
                <h3>{widget.text}</h3>
            }
        </div>
    </div>;
export default HeadingWidget