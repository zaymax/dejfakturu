import { Component } from "react";
import "./string-input.scss";

export class StringInput extends Component {
  render() {
    return (
      <div className="string-input-field">
        <div className="string-input-field__label">{this.props.label}:</div>
        <div className="string-input-field__value">
          <input
            type="text"
            value={this.props.value || ""}
            onChange={this.props.handler}
            name={this.props.name}
          />
        </div>
      </div>
    );
  }
}
