import React, {Component} from "react";
import AboutPage from "./AboutPage";
import Education from "./Education";

class AboutMe extends Component {
    render() {
        return (
            <div>
                <AboutPage/>
                <Education/>
            </div>
        )
    }
}

export default AboutMe;