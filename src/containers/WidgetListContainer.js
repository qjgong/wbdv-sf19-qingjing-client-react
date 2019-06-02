import React from 'react'
import WidgetListComponent from '../components/WidgetListComponent'
import {connect} from 'react-redux'
import WidgetService from '../services/WidgetService'

const widgetService = new WidgetService();

const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    topicId: state.topicId
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
    createWidget: () =>
        widgetService
            .createWidget({
                id: (new Date()).getTime(),
                name: 'New Widget',
                type: 'HEADING'
            })
            .then(widgets =>
                dispatch({
                    type: 'CREATE_WIDGET',
                    widgets: widgets
                })),
    findWidgets: topicId =>
        widgetService
            .findWidgets({topicId})
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

    addWidget: ()=>dispatch({
        type:'ADD_WIDGET'
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
    })
})


const WidgetListContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper,
)(WidgetListComponent)

export default WidgetListContainer