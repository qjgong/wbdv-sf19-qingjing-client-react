import React from "react";
const ImageWidget = ({widget, upBtn, downBtn, typeChange, sizeChange, nameChange, textChange}) =>
<div className="mb-5 card p-1">
    <div className="widget row ml-sm-2 col-sm-12">
        <h4 className="mr-auto">Image Widget</h4>
        <button className="btn btn-xs btn-warning mr-1"><i
            className="fa fa-arrow-up"></i></button>
        <button className="btn btn-xs btn-warning mr-1"><i
            className="fa fa-arrow-down"></i></button>
        <select className="form-control col-sm-2">
            <option>Image</option>
            <option>Heading</option>
            <option>Paragraph</option>
            <option>List</option>
            <option>Link</option>
        </select>
        <button onClick={() => this.props.deleteWidget(this.props.widget.id)} className="btn btn-xs btn-danger ml-1">X
        </button>
    </div>
    <div className="widget row ml-sm-2 col-sm-12">
        <input className="form-control" placeholder="http://lorempixel.com/300/150/"/>
    </div>
    <div className="widget row ml-sm-2 col-sm-12">
        <input className="form-control" placeholder="Widget name"/>
    </div>
    <div className="widget row ml-sm-2 col-sm-12">
        <h4>Preview</h4>
    </div>
    <div className="widget row ml-sm-2 col-sm-12">
        <img className="img" height="150" src="http://lorempixel.com/300/150/" width="300"/>
    </div>
</div>

export default ImageWidget