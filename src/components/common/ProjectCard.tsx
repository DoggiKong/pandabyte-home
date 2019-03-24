import React, {Component, ReactNode} from "react";
import {Button, Card, Icon} from "semantic-ui-react";

interface ProjectCardProps {
    header: string;
    meta: string;
    description: string;
    gitLink: string;
    image?: string;
    demoLink?: string;
}

class ProjectCard extends Component<ProjectCardProps> {
    render() {
        return (
            <Card
                image={(this.props.image !== undefined) ? this.props.image : "/images/image-placeholder.png"}
                header={this.props.meta}
                meta={this.props.meta}
                description={this.props.description}
                extra={this.extra()}
                centered
            />
        )
    }

    extra(): ReactNode {
        return (
            <div className='ui two buttons'>
                <Button basic color='green' animated onClick={() => window.open(this.props.gitLink, "_blank")}>
                    <Button.Content visible>
                        <Icon name="github" size="large"/>
                    </Button.Content>
                    <Button.Content hidden>
                        Github
                    </Button.Content>
                </Button>
                <Button basic color="orange" animated disabled={this.props.demoLink === undefined}
                        onClick={() => window.open(this.props.demoLink, "_blank")}>
                    <Button.Content visible>
                        <Icon name="play" size="large"/>
                    </Button.Content>
                    <Button.Content hidden>
                        Demo
                    </Button.Content>
                </Button>
            </div>
        )
    }
}

export default ProjectCard;