import React from 'react'
import WidgetListComponent from '../components/WidgetListComponent'
import {connect} from 'react-redux'
import WidgetService from '../services/WidgetService'

const widgetService = new WidgetService();

const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    topicId: state.topicId,
    IsPreview: state.IsPreview
})

const propertyToDispatchMapper = dispatch => ({

    updateWidget: newWidget =>
        widgetService
            .updateWidget(newWidget)
            .then(widgets =>
                dispatch({
                    type: 'UPDATE_WIDGET',
                    widgets: widgets
                })),
    deleteWidget: widgetId =>
        dispatch({
            type: 'DELETE_WIDGET',
            widgets: widgetService.deleteWidget(widgetId)
        }),

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

    createWidget: () => dispatch({
        type: 'CREATE_WIDGET'
    }),

    moveUp: (widgetId) => {
        dispatch({type: 'MOVE_UP', widgetId: widgetId})
    },

    moveDown: (widgetId) => {
        dispatch({type: 'MOVE_DOWN', widgetId: widgetId})
    },

    update_widget_type: (widget, type) => dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget,
        widgetType: type
    }),
    update_widget_text: (widget, text) => dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget,
        text: text
    }),
    update_widget_name: (widget, name) => dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget,
        name: name
    }),
    update_heading_size: (widget, size) => dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget,
        size: size
    }),
    togglePreview: () => dispatch({
        type: 'TOGGLE_PREVIEW'
    }),
    update_list_items: (widget, items) => dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget,
        items: items
    }),
    update_list_type: (widget, type) => dispatch({
        widget: widget,
        type: 'UPDATE_WIDGET',
        listType: type
    }),
    update_img_src: (widget, src) => dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget,
        src: src
    }),
    update_widget_href: (widget, href) => dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget,
        href: href
    }),
    update_widget_title:
        (widget, title) => dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget,
            title: title
        }),


})


const WidgetListContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper,
)(WidgetListComponent);

export default WidgetListContainer