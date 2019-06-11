import myData from './courses';
import React from "react";

let url = "https://whispering-ravine-77480.herokuapp.com/" + "/api/widgets";

export default class WidgetService {
    constructor() {
        if (!!WidgetService.instance) {
            return WidgetService.instance;
        }
        WidgetService.instance = this;
        this.courses = myData;
        return this;
    }

    createWidget = (topicId, widget) =>
        fetch(url, {
            method: "POST",
            body: JSON.stringify(widget),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => {
            return response.json();
        });


    findWidgets = () =>
        fetch(url).then(response => response.json());


    findWidget(widgetId) {
        return fetch(url + '/' + widgetId, {
            method: 'GET',
            // body: JSON.stringify(userId),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    };


    updateWidget(widgetId, widget) {
        return fetch(url + "/" + widgetId,
            {
                method: "PUT",
                body: JSON.stringify(widget),
                headers: {
                    "content-type": "application/json"
                }
            })
            .then(response => response.json());
    }

    updateOrder(widgets) {
        return fetch(url,
            {
                method: "PUT",
                body: JSON.stringify(widgets),
                headers: {
                    "content-type": "application/json"
                }
            })
            .then(response => response.json());
    }


    deleteWidget(widgetId) {
        return fetch(url + '/' + widgetId, {
            method: 'DELETE',
            body: JSON.stringify(widgetId),
            headers: {
                'content-type': 'application/json'
            }
        });
    }

}