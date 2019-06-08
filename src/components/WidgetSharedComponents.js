import React from 'react'
import {HEADING, IMAGE, LINK, LIST, PARAGRAPH} from "../constants/constants";

const WidgetSharedComponents=({index,widgets,moveDown,moveUp,widget,updateWidget,update_widget_type,deleteWidget})=>
    <div className="d-flex justify-content-around">
        {
            (index !== 0) && <button className={"btn btn-xs btn-warning mr-1"} onClick={() => moveUp(widget.id)}>
                <i className={"fa fa-arrow-up fa-sm"}/>
            </button>
        }

        {
            (index !== widgets.length - 1) && <button className="btn btn-xs btn-warning mr-1"
                                                      onClick={() => moveDown(widget.id)}>
                <i className="fa fa-arrow-down fa-sm"/>
            </button>}
        <select className="form-control"
                id="type"
                defaultValue={widget.type}
                onChange={(event) => updateWidget(widget.id, {...widget,type:event.target.value})}>
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

export default WidgetSharedComponents