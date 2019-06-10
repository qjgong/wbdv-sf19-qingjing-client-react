import React from 'react'
import WidgetListComponent from '../components/WidgetListComponent'
import {connect} from 'react-redux'
import WidgetService from '../services/WidgetService'

const widgetService = new WidgetService();

function SwapItems(items, firstIndex, secondIndex) {
    let results = items.slice();
    let firstItem = items[firstIndex];
    results[firstIndex] = items[secondIndex];
    results[secondIndex] = firstItem;
    return results;
}


const stateToPropertyMapper = (state) => {
    console.log(state.widgets);
    return {
        widgets: state.widgets,
        topicId: state.topicId,
        IsPreview: state.IsPreview
    }
};


const propertyToDispatchMapper = dispatch => ({

    updateWidget: (wid, newWidget) => {
        return widgetService
            .updateWidget(wid, newWidget)
            .then(response =>
                widgetService.findWidgets())
            .then(widgets =>
                dispatch({
                    type: 'UPDATE_WIDGET',
                    widgets: widgets
                }))
    },
    deleteWidget: widgetId =>
        widgetService.deleteWidget(widgetId)
            .then(response => widgetService.findWidgets())
            .then(widgets =>
                dispatch({
                    type: 'DELETE_WIDGET',
                    widgets: widgets
                })),

    findWidgets: () =>
        widgetService
            .findWidgets()
            .then(widgets =>
                dispatch({
                    type: 'FIND_ALL_WIDGETS',
                    widgets: widgets
                })),


    findWidget: widgetId =>
        widgetService
            .findWidgets({widgetId})
            .then(widget =>
                dispatch({
                    type: 'FIND_WIDGET',
                    widget: widget
                })),

    createWidget: (topicId, widget) =>
        widgetService
            .createWidget(topicId, widget)
            .then(widgets =>
                dispatch({
                    type: 'CREATE_WIDGET',
                    widgets: widgets
                })),

    moveUp: (widgets,widgetId) => {
        let index = widgets.indexOf(widgets.find(x=>x.id===widgetId));
        let new_widgets=SwapItems(widgets, index, index - 1);
        widgetService.updateOrder(new_widgets)
            .then(widgets => dispatch({type: 'MOVE_UP', widgets: widgets}))


        /*dispatch({type: 'MOVE_UP', widgetId: widgetId})
            .then(widgetService.moveUp())
            .then(widgetService.findWidgets())*/
    },

    moveDown: (widgets,widgetId) => {
        let index2 = widgets.indexOf(widgets.find(x=>x.id===widgetId));
        let new_widgets=SwapItems(widgets, index2, index2 +1);
        widgetService.updateOrder(new_widgets).then(widgets=>
        dispatch({type: 'MOVE_DOWN', widgets: widgets}))
    },

    // update_widget_type: (widget, type) => dispatch({
    //     type: 'UPDATE_WIDGET',
    //     widget: widget,
    //     widgetType: type
    // }),
    // update_widget_text: (widget, text) => dispatch({
    //     type: 'UPDATE_WIDGET',
    //     widget: widget,
    //     text: text
    // }),
    // update_widget_name: (widget, name) => dispatch({
    //     type: 'UPDATE_WIDGET',
    //     widget: widget,
    //     name: name
    // }),
    // update_heading_size: (widget, size) => dispatch({
    //     type: 'UPDATE_WIDGET',
    //     widget: widget,
    //     size: size
    // }),
    // togglePreview: () => dispatch({
    //     type: 'TOGGLE_PREVIEW'
    // }),
    // update_list_items: (widget, items) => dispatch({
    //     type: 'UPDATE_WIDGET',
    //     widget: widget,
    //     items: items
    // }),
    // update_list_type: (widget, type) => dispatch({
    //     widget: widget,
    //     type: 'UPDATE_WIDGET',
    //     listType: type
    // }),
    // update_img_src: (widget, src) => dispatch({
    //     type: 'UPDATE_WIDGET',
    //     widget: widget,
    //     src: src
    // }),
    // update_widget_href: (widget, href) => dispatch({
    //     type: 'UPDATE_WIDGET',
    //     widget: widget,
    //     href: href
    // }),
    // update_widget_title:
    //     (widget, title) => dispatch({
    //         type: 'UPDATE_WIDGET',
    //         widget: widget,
    //         title: title
    //     }),


});


const WidgetListContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper,
)(WidgetListComponent);

export default WidgetListContainer