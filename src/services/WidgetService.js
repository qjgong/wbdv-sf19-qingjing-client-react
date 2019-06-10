import myData from './courses';
import React from "react";

let url = "http://localhost:8080" + "/api/widgets";

export default class WidgetService {
    constructor() {
        if (!!WidgetService.instance) {
            return WidgetService.instance;
        }
        WidgetService.instance = this;
        this.courses = myData;
        return this;
    }

    // static myInstance=null;
    // getInstance(){
    //     if(WidgetService.myInstance==null){
    //         WidgetService.myInstance=new WidgetService();
    //     }
    //     return this.myInstance;
    // }


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

        // let i;
        // for (i = 0; i < this.courses.length; i++) {
        //     let modules = this.courses[i].modules;
        //     let j;
        //     for (j = 0; j < modules.length; j++) {
        //         let lessons = modules[j].lessons;
        //         let k;
        //         for (k = 0; k < lessons.length; k++) {
        //             let topics = lessons[k].topics;
        //             let m;
        //             for (m = 0; m < topics.length; m++) {
        //                 let widgets = topics[m].widgets;
        //                 return widgets.find(x => x.id === widgetId);
        //             }
        //
        //
        //         }
        //     }
        //
        // }
        //
        // return null;
    }


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

    // for (let i = 0; i < this.courses.length; i++) {
    //     let course = this.courses[i];
    //     for (let j = 0; j < course.modules.length; j++) {
    //         let module = course.modules[j];
    //         for (let k = 0; k < module.lessons.length; k++) {
    //             let lesson = module.lessons[k];
    //             for (let m = 0; m < lesson.topics.length; m++) {
    //                 let topic = lesson.topics[m];
    //                 topic.widgets = topic.widgets.map(w => w.id === widgetId ? widget : w);
    //             }
    //         }
    //     }
    // }

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



    // createWidget(topicId, widget) {
    //     this.courses.forEach(c => {
    //         c && c.modules.forEach(m => {
    //             m && m.lessons.forEach(l => {
    //                 l && l.topics.forEach(t => {
    //                     if (t.id === topicId) {
    //                         t.widgets = [...t.widgets, widget]
    //                     }
    //                 })
    //             })
    //         })
    //     });
    // }

    deleteWidget(widgetId) {
        return fetch(url + '/' + widgetId, {
            method: 'DELETE',
            body: JSON.stringify(widgetId),
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    //     for (let i = 0; i < this.courses.length; i++) {
    //         let course = this.courses[i];
    //         for (let j = 0; j < course.modules.length; j++) {
    //             let module = course.modules[j];
    //             for (let k = 0; k < module.lessons.length; k++) {
    //                 let lesson = module.lessons[k];
    //                 for (let m = 0; m < lesson.topics.length; m++) {
    //                     lesson.topics[m].widgets = lesson.topics[m].widgets.filter(w => w.id !== widgetId);
    //                 }
    //             }
    //         }
    //     }
    // }
}