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
        widgetService
            .deleteWidget(widgetId)
            .then(widgets =>
                dispatch({
                    type: 'DELETE_WIDGET',
                    widgets: widgets
                })),
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
                }))
})

const WidgetListContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(WidgetListComponent)

export default WidgetListContainer