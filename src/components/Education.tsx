import React, {Component} from "react";
import {Container, Header, Icon, List} from "semantic-ui-react";

class Education extends Component {
    render() {
        return (
            <Container>
                <Header as="h2">
                    <Icon name="university"/>
                    <Header.Content>
                        Education
                    </Header.Content>
                </Header>
                <List>
                    <List.Item>
                        <List.Icon name='angle right'/>
                        Bachelor of Engineering (Honours) (Major: Software) at University of Queensland
                    </List.Item>
                    <List.Item>
                        <List.Icon name='angle right'/>
                        International Baccalaureate (High School) at Queensland Academy for Science Mathematics and
                        Technology
                    </List.Item>
                </List>
            </Container>

        )
    }
}

export default Education;