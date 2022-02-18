import { Component } from "react";
import "./number-input.scss";

export class NumberInput extends Component {
  render() {
    return (
      <div className="number-input-field">
        <div className="number-input-field__label">{this.props.label}:</div>
        <div className="number-input-field__value">
          <input
            type="number"
            value={this.props.value || ""}
            onChange={this.props.handler}
            name={this.props.name}
          />
        </div>
      </div>
    );
  }
}
