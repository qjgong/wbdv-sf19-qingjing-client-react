import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import WhiteBoard from "./containers/WhiteBoard";


function App() {
    return (
        <Router>
            <div>

                <Route path="/" exact component={WhiteBoard}/>
            </div>
        </Router>
    );
}

export default App;