import React from "react";
import WidgetSharedComponents from "./WidgetSharedComponents";
//import {Linking} from'react-native'


const LinkWidget = ({index, IsPreview, widget, widgets, deleteWidget, updateWidget, moveUp, moveDown,}) =>


    <div className="mb-5 card p-1">
        {!IsPreview && <div>
            <div className="form-group row ml-sm-2 col-sm-12 d-flex justify-content-between">
                <h4 className="mr-auto">Link Widget</h4>
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
                <label>Link URL</label>
                <input className="form-control" placeholder="Link URL"
                       defaultValue={widget.href}
                       onChange={(event) => updateWidget(widget.id, {...widget, href: event.target.value})}/>
            </div>
            <div className="widget row ml-sm-2 col-sm-12">
                <input className="form-control" placeholder="Link text"
                       defaultValue={widget.title}
                       onChange={(event) => updateWidget(widget.id, {...widget, title: event.target.value})}/>
            </div>
            <div className="widget row ml-sm-2 col-sm-12">
                <input className="form-control" placeholder="https://www.youtube.com/user/jannunzi"
                       defaultValue={widget.href}/>
            </div>
            <div className="widget row ml-sm-2 col-sm-12">
                <input className="form-control" placeholder="Widget name"
                       onChange={(event) => updateWidget(widget.id, {...widget, name: event.target.value})}
                       defaultValue={widget.name}/>
            </div>
            <div className="widget row ml-sm-2 col-sm-12">
                <h4>Preview</h4>
            </div>
        </div>}
        {console.log(widget)}
        <div className="widget row ml-sm-2 col-sm-12">
            {/*<a onPress={()=>Linking.openURL(widget.href)} href={widget.href}>{widget.title}</a>*/}
            <a href={widget.href}>{widget.title}</a>
        </div>
    </div>;

export default LinkWidget
