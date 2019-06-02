import React from "react";
import {HEADING, IMAGE, LINK, LIST, PARAGRAPH} from "../constants/constants";


const LinkWidget = ({index, widget, widgets, deleteWidget, moveUp, update_widget_type,moveDown, typeChange, sizeChange, nameChange, textChange}) =>

    <div className="mb-5 card p-1">
        <div className="widget row ml-sm-2 col-sm-12">
            <h4 className="mr-auto">Link Widget</h4>
            {
                (index!=0) && <button className={"btn btn-xs btn-warning mr-1"} onClick={() => moveUp(widget.id)}>
                    <i className={"fa fa-arrow-up fa-sm"}/>
                </button>
            }

            {(index !== widgets.length - 1) && <button className="btn btn-xs btn-warning mr-1"
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
                    onClick={() => deleteWidget(widget.id)}><i className="fa fa-times" style={{color: "white"}}/>
            </button>
        </div>
        <div className="widget row ml-sm-2 col-sm-12">
            <input className="form-control" placeholder="https://www.youtube.com/user/jannunzi"/>
        </div>
        <div className="widget row ml-sm-2 col-sm-12">
            <input className="form-control" placeholder="Link text"/>
        </div>
        <div className="widget row ml-sm-2 col-sm-12">
            <input className="form-control" placeholder="https://www.youtube.com/user/jannunzi"/>
        </div>
        <div className="widget row ml-sm-2 col-sm-12">
            <input className="form-control" placeholder="Widget name"/>
        </div>
        <div className="widget row ml-sm-2 col-sm-12">
            <h4>Preview</h4>
        </div>
        <div className="widget row ml-sm-2 col-sm-12">
            <a href="#">Link text</a>
        </div>
    </div>

export default LinkWidget
