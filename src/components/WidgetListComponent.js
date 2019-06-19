import React from 'react'
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget";
import LinkWidget from "./LinkWidget";


class WidgetListComponent extends React.Component {
    //widgetService = new WidgetService();

    constructor(props) {
        super(props);
        this.props.findWidgets(this.props.topicId);
    }

    state = {
        IsPreview: false
    };

    togglePreview = () =>
        this.setState({
            IsPreview: !this.state.IsPreview
        });


    render() {
        return (
            <div>

                <div className="row mb-sm-3">
                    <button className="btn btn-success btn-sm ml-sm-auto mr-sm-2"
                            id="moduleSaveBtn"
                            type="submit">Save
                    </button>
                    <label className="mr-sm-2"><b>Preview</b></label>
                    <div className="custom-control custom-switch col-sm-2">
                        <input className="custom-control-input"
                               id="customSwitch"
                               type="checkbox" onClick={this.togglePreview}/>
                        <label className="custom-control-label"
                               htmlFor="customSwitch"/>
                    </div>
                </div>


                <button className="btn btn-danger floating" onClick={() => this.props.createWidget(this.props.topicId, {
                    type: "HEADING",
                    name: "New Widget",
                    text: "",
                    size: "h1",
                    ord:this.props.widgets.length+1,
                })}>

                    <i className="fa fa-plus" style={{color: "white"}}/>
                </button>

                <ul>
                    {


                        this.props.widgets.map((widget, key) => {
                            if (widget && widget.type === "HEADING") {
                                return <HeadingWidget
                                    key={key}
                                    widgets={this.props.widgets}
                                    index={this.props.widgets.indexOf(widget)}
                                    updateWidget={this.props.updateWidget}
                                    widget={widget}
                                    deleteWidget={this.props.deleteWidget}
                                    topicId={this.props.topicId}
                                    findWidgets={this.props.findWidgets}
                                    moveUp={this.props.moveUp}
                                    moveDown={this.props.moveDown}
                                    IsPreview={this.state.IsPreview}
                                />
                            } else if (widget && widget.type === "PARAGRAPH") {
                                return <ParagraphWidget
                                    key={key}
                                    widgets={this.props.widgets}
                                    index={this.props.widgets.indexOf(widget)}
                                    updateWidget={this.props.updateWidget}
                                    widget={widget}
                                    deleteWidget={this.props.deleteWidget}
                                    topicId={this.props.topicId}
                                    findWidgets={this.props.findWidgets}
                                    moveUp={this.props.moveUp}
                                    moveDown={this.props.moveDown}
                                    // update_heading_size={update_heading_size}
                                    IsPreview={this.state.IsPreview}/>
                            } else if (widget && widget.type === "LIST") {
                                return <ListWidget
                                    key={key}
                                    widgets={this.props.widgets}
                                    index={this.props.widgets.indexOf(widget)}
                                    updateWidget={this.props.updateWidget}
                                    widget={widget}
                                    deleteWidget={this.props.deleteWidget}
                                    topicId={this.props.topicId}
                                    findWidgets={this.props.findWidgets}
                                    moveUp={this.props.moveUp}
                                    moveDown={this.props.moveDown}
                                    IsPreview={this.state.IsPreview}/>
                            } else if (widget && widget.type === "IMAGE") {
                                return <ImageWidget
                                    key={key}
                                    widgets={this.props.widgets}
                                    index={this.props.widgets.indexOf(widget)}
                                    updateWidget={this.props.updateWidget}
                                    widget={widget}
                                    deleteWidget={this.props.deleteWidget}
                                    topicId={this.props.topicId}
                                    findWidgets={this.props.findWidgets}
                                    moveUp={this.props.moveUp}
                                    moveDown={this.props.moveDown}
                                    IsPreview={this.state.IsPreview}/>
                            } else if (widget && widget.type === "LINK") {
                                return <LinkWidget index={this.props.widgets.indexOf(widget)}
                                                   key={key}
                                                   widgets={this.props.widgets}
                                                   updateWidget={this.props.updateWidget}
                                                   widget={widget}
                                                   deleteWidget={this.props.deleteWidget}
                                                   topicId={this.props.topicId}
                                                   findWidgets={this.props.findWidgets}
                                                   moveUp={this.props.moveUp}
                                                   moveDown={this.props.moveDown}
                                                   IsPreview={this.state.IsPreview}/>
                            }
                        })}


                </ul>
            </div>
        )
    }
}


export default WidgetListComponent



