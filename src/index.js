import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import WhiteBoard from "./containers/WhiteBoard";
import {createStore} from "redux";
import {Provider, connect,} from "react-redux";

//reducer=>state=>store=>provider=>container=>connect=>mapStateToProps=>component
//component=>propEventHandler=>mapPropsToDispatcher=>connect=>container=>reducer

// const initialState = {
//     a: 2, b: 3,
//     widgets: [
//         {id: 123, type: "HEADING"},
//         {id: 234, type: "YOUTUBE"},
//         {id: 345, type: "IMAGE"},
//         {id: 456, type: "LINK"}
//     ]
// }
// const reducer = (state = initialState, action) => {//calculates new state
//     if (action.type === 'A_CHANGED') {
//         return {
//             a: action.newValueOfA,
//             b: state.b
//         }
//     } else if (action.type === 'B_CHANGED') {
//         return {
//             a: state.a,
//             b: action.newValueOfB,
//         }
//     } else if (action.type === 'DELETE_WIDGET') {
//         return {
//             ...state,
//             widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
//         }
//     }
//
//     return initialState
// }
// const store = createStore(reducer)
//
//
// const AddComponent = ({widgets, paramA, paramB, paramAchanged, paramBchanged, deleteWidget}) =>
//     <div>
//         <ul>
//             {widgets.map(widget =>
//                 <li key={widget.id}>{widget.type}
//                     <button onClick={() => deleteWidget(widget.id)}>Delete</button>
//                 </li>)}
//         </ul>
//         <input onChange={e => paramAchanged(e.target.value)} value={paramA}/>+
//         <input onChange={e => paramBchanged(e.target.value)} value={paramB}/>={paramA + paramB}
//     </div>
//
// const mapStateToProperties = state => {
//     return {
//         paramA: state.a,
//         paramB: state.b,
//         widgets: state.widgets,
//     }
// }
//
// const mapProsToDispatcher = dispatch => {
//     return {
//         paramAchanged: (newA) => {
//             dispatch({type: 'A_CHANGED', newValueOfA: parseInt(newA)})
//         },
//         paramBchanged: (newB) => {
//             dispatch({type: 'B_CHANGED', newValueOfB: parseInt(newB)})
//         },
//         deleteWidget: widgetId => {
//             dispatch({type: 'DELETE_WIDGET', widgetId: widgetId})
//         }
//     }
// }
// const AddContainer = connect(mapStateToProperties, mapProsToDispatcher)(AddComponent)

ReactDOM.render(
    <div className="container-fluid">

            <WhiteBoard/>

    </div>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
