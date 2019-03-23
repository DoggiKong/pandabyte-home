import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import 'semantic-ui-css/semantic.min.css'
import './style/index.scss'

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Home}/>
            </Router>
        );
    }
}

export default App;
