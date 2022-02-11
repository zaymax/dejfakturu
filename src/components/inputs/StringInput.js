import { Component } from "react";

export class StringInput extends Component {

    render() {
        return(
            <div className="content-field">
                <div className="content-field__label">{this.props.label}:</div>
                <div className="content-field__value">
                    <input type={"text"} value={this.props.value} onChange={this.props.handler}/>
                </div>
            </div>
        );
    }
}