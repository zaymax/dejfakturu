import { Component } from "react";
import "./section.scss";

export class Section extends Component {

    render() {
        return (
            <div className="section">
                <div className="section__header">
                    <h3>{this.props.header}:</h3>
                </div>
                <div className="section__content"></div>
                    {this.props.children}
                <hr />
            </div>
        );
    }
}