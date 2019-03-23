import React, {Component} from "react";
import {Header, Image} from "semantic-ui-react";
import ItemList from "./ItemList";
import AboutMe from "./AboutMe";

class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-header">
                    <Header as="h2" icon textAlign="center">
                        <Header.Content>
                            <Image src="images/myAvatar.svg" size="small" width="4em" alt="avatar" centered circular
                                   bordered/>
                        </Header.Content>
                        <Header.Content>Jerry Wang</Header.Content>
                        <Header.Content>(Software Engineer)</Header.Content>
                    </Header>
                </div>
                <AboutMe/>
                <ItemList/>

            </div>
        )
    }
}

export default Home;