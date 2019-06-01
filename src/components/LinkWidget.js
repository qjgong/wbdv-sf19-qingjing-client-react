import React from "react";


const LinkWidget = ({index, widget, widgets, deleteWidget, moveUp, moveDown, typeChange, sizeChange, nameChange, textChange}) =>

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
            <select className="form-control col-sm-2">
                <option>Link</option>
                <option>Heading</option>
                <option>Paragraph</option>
                <option>List</option>
                <option>Image</option>
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
