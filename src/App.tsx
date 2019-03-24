import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import 'semantic-ui-css/semantic.min.css'
import './style/index.scss'
import {Container, Header, Image} from "semantic-ui-react";
import AboutMe from "./components/AboutMe";
import MenuNav from "./components/common/MenuNav";

class App extends Component {

    render() {
        return (
            <div>
                <div className="home-header">
                    <Header as="h2" icon textAlign="center" className="text-item">
                        <Header.Content>
                            <Image src="/images/myAvatar.svg" size="small" width="4em" alt="avatar" centered circular
                                   bordered/>
                        </Header.Content>
                        <Header.Content>Jerry Wang</Header.Content>
                        <Header.Content>(Software Engineer)</Header.Content>
                    </Header>
                </div>
                <Container>
                    <Router>
                        <MenuNav/>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" component={AboutMe}/>
                    </Router>

                </Container>
            </div>
        );
    }
}

export default App;
