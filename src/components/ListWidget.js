import React from "react";
import {HEADING, IMAGE, LINK, LIST, PARAGRAPH} from "../constants/constants";


const ListWidget = ({index, widget, IsPreview,widgets, deleteWidget, update_widget_type, moveUp, moveDown, typeChange, sizeChange, nameChange, textChange}) =>
    <div className="mb-5 card p-1">
        {!IsPreview && <div>
            <div className="widget row ml-sm-2 col-sm-12">
                <h4 className="mr-auto">List Widget</h4>
                {
                    (index != 0) && <button className={"btn btn-xs btn-warning mr-1"} onClick={() => moveUp(widget.id)}>
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
                        <textarea className="form-control"
                                  placeholder="Put each&#10;item in&#10;a separate row"
                                  rows="4"/>
            </div>

            <div className="widget row ml-sm-2 col-sm-12">
                <select className="form-control">
                    <option value="unordered">Unordered list</option>
                    <option value="ordered">Ordered list</option>
                </select>
            </div>

            <div className="widget row ml-sm-2 col-sm-12">
                <input className="form-control" placeholder="Widget name"/>
            </div>

            <div className="widget row ml-sm-2 col-sm-12">
                <h4>Preview</h4>
            </div>
        </div>}
        <div className="widget row ml-sm-2 col-sm-12">
            <ul style={{list: "circle"}}>
                <li>Put each</li>
                <li>item in</li>
                <li>a separate row</li>
            </ul>
        </div>
    </div>

export default ListWidget