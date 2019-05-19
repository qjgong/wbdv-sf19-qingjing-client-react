import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WhiteBoard from "./containers/WhiteBoard";


function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function App() {
  return (
      <Router>
        <div>

          <Route path="/" exact component={WhiteBoard} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
  );
}

export default App;