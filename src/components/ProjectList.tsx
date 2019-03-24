import React, {Component, ReactNode} from "react";
import {Container, Grid, Header, Icon, Segment} from "semantic-ui-react";
import ProjectCard from "./common/ProjectCard";

class ProjectList extends Component {
    renderCard(header:string, meta:string, description:string, gitLink:string, image?:string, demoLink?:string):ReactNode {
        return (
            <ProjectCard
                header={header}
                meta={meta}
                description={description}
                gitLink={gitLink}
                image={image}
                demoLink={demoLink}/>
        )
    }

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
                    <Grid columns={3} container stackable>
                        <Grid.Column>
                            {this.renderCard("project1",
                                "meta",
                                "description",
                                "https://google.com",
                            undefined,
                            "https://google.com")}
                        </Grid.Column>
                        <Grid.Column>
                            {this.renderCard("project1",
                                "meta",
                                "description",
                                "https://google.com")}
                        </Grid.Column>
                        <Grid.Column>
                            {this.renderCard("project1",
                                "meta",
                                "description",
                                "https://google.com")}
                        </Grid.Column>
                    </Grid>
                </div>
            </Container>
        )
    }


}

export default ProjectList;