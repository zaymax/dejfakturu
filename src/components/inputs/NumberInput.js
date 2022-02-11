import { Component } from "react";

export class NumberInput extends Component {

    render() {
        return(
            <div className="section__content">
                <div className="content-field">
                    <div className="content-field__label">{this.props.label}:</div>
                    <div className="content-field__value">
                        <input type={"number"} value={this.props.value} onChange={this.props.handler}/>
                    </div>
                </div>
            </div>
        )
    }
}