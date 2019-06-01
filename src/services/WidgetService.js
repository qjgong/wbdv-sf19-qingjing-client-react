import myData from './courses';
import React from "react";

export default class WidgetService {
    constructor() {
        if (!!WidgetService.instance) {
            return WidgetService.instance;
        }
        WidgetService.instance = this;
        this.courses = myData;
        return this;
    }


    createWidget(topicId, widget) {
        let i;
        for (i = 0; i < this.courses.length; i++) {
            let modules = this.courses[i].modules;
            let j;
            for (j = 0; j < modules.length; j++) {
                let lessons = modules[j].lessons;
                let k;
                for (k = 0; k < lessons.length; k++) {
                    let topics = lessons[k].topics;
                    let topic = topics.find(x => x.id === topicId);

                    topic.widgets.push(widget);
                    return

                }
            }

        }

    }


    findWidgets(topicId) {


        let i;
        for (i = 0; i < this.courses.length; i++) {
            let modules = this.courses[i].modules;
            let j;
            for (j = 0; j < modules.length; j++) {
                let lessons = modules[j].lessons;
                let k;
                for (k = 0; k < lessons.length; k++) {
                    let topics = lessons[k].topics;
                    let topic = topics.find(x => x.id === topicId);

                    return topic.widgets;

                }
            }

        }

        return null;
    }


    findWidget(widgetId) {

        let i;
        for (i = 0; i < this.courses.length; i++) {
            let modules = this.courses[i].modules;
            let j;
            for (j = 0; j < modules.length; j++) {
                let lessons = modules[j].lessons;
                let k;
                for (k = 0; k < lessons.length; k++) {
                    let topics = lessons[k].topics;
                    let m;
                    for (m = 0; m < topics.length; m++) {
                        let widgets = topics[m].widgets;
                        let widget = widgets.find(x => x.id === widgetId);
                        return widget;
                    }


                }
            }

        }

        return null;
    }


    updateWidget(widgetId, widget) {
        let current=this.findWidget(widgetId);
        current.id=widget.id;
        current.type=widget.type;
        current.name=widget.name;



    }

    deleteWidget(widgetId) {
        let i;
        for (i = 0; i < this.courses.length; i++) {
            let modules = this.courses[i].modules;
            let j;
            for (j = 0; j < modules.length; j++) {
                let lessons = modules[j].lessons;
                let k;
                for (k = 0; k < lessons.length; k++) {
                    let topics = lessons[k].topics;
                    let m;
                    for (m = 0; m < topics.length; m++) {
                        let widgets = topics[m].widgets;

                        return widgets.filter(x=>x.id!==widgetId);
                    }


                }
            }

        }
        return null;
    }
}