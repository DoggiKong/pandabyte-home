import React, {Component} from "react";
import {Container, Grid, Header, Icon, Segment} from "semantic-ui-react";

class ItemList extends Component {
    render() {
        return (
            <Container>
                <Header as="h2">
                    <Icon name="book"/>
                    <Header.Content>
                        Projects
                    </Header.Content>
                </Header>
                <div className="itemList-container">
                    <Grid columns={2} container stackable>
                        <Grid.Column>
                            <Segment>Content</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Content</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Content</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Content</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Content</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Content</Segment>
                        </Grid.Column>
                    </Grid>
                </div>
            </Container>
        )
    }
}

export default ItemList;