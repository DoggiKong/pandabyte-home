import React, {Component} from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Menu} from "semantic-ui-react";

interface MenuNavState {
    activeItem: string;
}

interface RouterProps {
    history?: string;
}

interface MenuNavProps extends RouteComponentProps<RouterProps> {

}

const MenuItem = {
    HOME: {
        name: "Home",
        link: "/"
    },
    ABOUT: {
        name: "About",
        link: "/about"
    }
};

class MenuNav extends Component<MenuNavProps, MenuNavState> {
    state = {activeItem: MenuItem.HOME.link};

    handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, {name}: any) => {
        this.setState({activeItem: name});
        this.props.history.push(name);
    };

    render() {
        return (
            <Menu inverted>
                <Menu.Item
                    name={MenuItem.HOME.link}
                    active={this.state.activeItem === MenuItem.HOME.link}
                    onClick={this.handleItemClick}>
                    {MenuItem.HOME.name}
                </Menu.Item>
                <Menu.Item
                    name={MenuItem.ABOUT.link}
                    active={this.state.activeItem === MenuItem.ABOUT.link}
                    onClick={this.handleItemClick}>
                    {MenuItem.ABOUT.name}
                </Menu.Item>
            </Menu>
        )
    }
}

export default withRouter(MenuNav);