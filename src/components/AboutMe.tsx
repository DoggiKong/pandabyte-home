import React, {Component} from "react";
import {Container, Grid, Header, Icon} from "semantic-ui-react";

class AboutMe extends Component {
    render() {
        return (
            <Container>
                <Grid columns={2} divided>
                    <Grid.Column>
                        <Header as="h2">
                            <Icon name="user"/>
                            <Header.Content>
                                About Me
                            </Header.Content>
                        </Header>

                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h2">
                            <Icon name="address book"/>
                            <Header.Content>
                                Contact Details
                            </Header.Content>
                        </Header>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default AboutMe;