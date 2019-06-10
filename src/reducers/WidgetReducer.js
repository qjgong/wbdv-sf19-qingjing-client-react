import WidgetService from "../services/WidgetService";
import {HEADING, IMAGE, LINK, LIST, PARAGRAPH} from "../constants/constants";

let widgetService=new WidgetService();

function SwapItems(items, firstIndex, secondIndex) {
    let results = items.slice();
    let firstItem = items[firstIndex];
    results[firstIndex] = items[secondIndex];
    results[secondIndex] = firstItem;
    return results;
}

const widgetReducer = (state = {widgets: [], IsPreview:false, topicId:123}, action) => {
    let newState = Object.assign({}, state);


    switch (action.type) {
        case "DELETE_WIDGET":
        case "CREATE_WIDGET":
        case "FIND_ALL_WIDGETS":
        case "UPDATE_WIDGET":
        case "FIND_WIDGET":
        case "MOVE_UP":
        case "MOVE_DOWN":
            newState.widgets = action.widgets;
            return newState;


        // case "DELETE_WIDGET":
        //     widgetService.deleteWidget(action.widgetId);
        //     newState.widgets = widgetService.findWidgets();
        //     return newState;

        // case 'TOGGLE_PREVIEW':
        //
        //
        //     newState.IsPreview = !newState.IsPreview;
        //     return newState;



        // case "MOVE_DOWN":
        //     let index2 = state.widgets.indexOf(state.widgets.find(x=>x.id===action.widgetId));
        //     newState.widgets=SwapItems(state.widgets, index2, index2 +1)
        //     return newState;

        // case "UPDATE_WIDGET":
        //
        //
        //     let widget = action.widget;
        //     //console.log(widget.listType)
        //     console.log(action.listType);
        //     if (action.text !== undefined) {
        //         widget.text = action.text;
        //     }
        //     if (action.name !== undefined) {
        //         widget.name = action.name;
        //     }
        //     if (action.size !== undefined) {
        //         widget.size = action.size;
        //     }
        //
        //     if (action.items !== undefined) {
        //         widget.items = action.items.split("\n").join(",");
        //     }
        //     if (action.listType !== undefined) {
        //         widget.listType = action.listType;
        //     }
        //     if (action.src !== undefined) {
        //         widget.src = action.src;
        //     }
        //     if (action.href !== undefined) {
        //         widget.href = action.href;
        //     }
        //     if (action.title !== undefined) {
        //         widget.title = action.title;
        //     }
        //     if (action.widgetType) {
        //         let newWidget = {
        //             id: widget.id,
        //             type:action.widgetType,
        //             name:""
        //         };
        //         switch(action.widgetType){
        //             case HEADING:
        //                 newWidget = {...newWidget, size:"h1", text:"",};
        //                 break;
        //             case PARAGRAPH:
        //                 newWidget={...newWidget, text:""};
        //                 break;
        //             case LIST:
        //                 newWidget={...newWidget, items:"",listType: "unordered"};
        //                 break;
        //             case IMAGE:
        //                 newWidget={...newWidget, src:""};
        //                 break;
        //             default:
        //                 newWidget={...newWidget, title:"", href:""};
        //         }
        //         widget = newWidget;
        //     }
        //     widgetService.updateWidget(widget.id, widget);
        //     newState.widgets = widgetService.findWidgets(state.topicId);
        //     return newState;


        default:
            return state;
    }
}

export default widgetReducer;