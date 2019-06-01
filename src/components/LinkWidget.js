import React from "react";


const LinkWidget = ({widget, upBtn, downBtn, typeChange, sizeChange, nameChange, textChange}) =>

<div className="mb-5 card p-1">
    <div className="widget row ml-sm-2 col-sm-12">
        <h4 className="mr-auto">Link Widget</h4>
        <button className="btn btn-xs btn-warning mr-1"><i
            className="fa fa-arrow-up"></i></button>
        <button className="btn btn-xs btn-warning mr-1"><i
            className="fa fa-arrow-down"></i></button>
        <select className="form-control col-sm-2">
            <option>Link</option>
            <option>Heading</option>
            <option>Paragraph</option>
            <option>List</option>
            <option>Image</option>
        </select>
        <button className="btn btn-xs btn-danger ml-1">X
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
