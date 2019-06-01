import React from "react";

const ParagraphWidget = ({widget, upBtn, downBtn, typeChange, sizeChange, nameChange, textChange}) =>
    <div className="mb-5 card p-1">
        <div className="widget row ml-sm-2 col-sm-12">
            <h4 className="mr-auto">Paragraph Widget</h4>
            <button className="btn btn-xs btn-warning mr-1"><i
                className="fa fa-arrow-up"></i></button>
            <button className="btn btn-xs btn-warning mr-1"><i
                className="fa fa-arrow-down"></i></button>
            <select className="form-control col-sm-2">
                <option>Paragraph</option>
                <option>Heading</option>
                <option>List</option>
                <option>Image</option>
                <option>Link</option>
            </select>
            <button className="btn btn-xs btn-danger ml-1">X
            </button>
        </div>
        <div className="widget row ml-sm-2 col-sm-12">
                        <textarea className="form-control"
                                  placeholder="Lorem ipsum"></textarea>
        </div>
        <div className="widget row ml-sm-2 col-sm-12">
            <input className="form-control" placeholder="Widget name"/>
        </div>
        <div className="widget row ml-sm-2 col-sm-12">
            <h4>Preview</h4>
        </div>
        <div className="widget row ml-sm-2 col-sm-12">
            <label>Lorem ipsum</label>
        </div>
    </div>

export default ParagraphWidget