import React, {Component, ReactNode} from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Icon, Menu} from "semantic-ui-react";

interface MenuNavState {
    activeItem: string;
    active: boolean;
}

interface RouterProps {
    history?: string;
}

interface MenuNavProps extends RouteComponentProps<RouterProps> {
    mobile?: boolean;
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
    state = {activeItem: MenuItem.HOME.link, active: false};

    handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, {name}: any) => {
        this.setState({activeItem: name});
        this.props.history.push(name);
    };

    renderMobile(): ReactNode {
        if (!this.state.active) {
            return (
                <Menu className="menu-nav" fixed="top" inverted stackable>
                    <Menu.Item onClick={() => this.setState({active: !this.state.active})}>
                        <Icon name="bars"/>
                    </Menu.Item>
                </Menu>
            )
        }

        return (
            <Menu className="menu-nav" fixed="top" inverted stackable>
                <Menu.Item
                    onClick={() => this.setState({active: !this.state.active})}>
                    <Icon name="bars"/>
                </Menu.Item>
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

    renderDesktop(): ReactNode {
        return (
            <Menu className="menu-nav" fixed="top" inverted>
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

    render() {
        return (
            <div>
                {(this.props.mobile) ? this.renderMobile() : this.renderDesktop()}
            </div>
        )
    }
}

export default withRouter(MenuNav);