import moment from "moment";
import { Component } from "react";
import "./date-input.scss";

export class DateInput extends Component {
  render() {
    return (
      <div className="date-input-field">
        <div className="date-input-field__label">{this.props.label}:</div>
        <div className="date-input-field__value">
          <input
            type="date"
            name={this.props.name}
            value={
              this.props.value
                ? moment(new Date(this.props.value)).format("YYYY-MM-DD")
                : ""
            }
            onChange={this.props.handler}
          />
        </div>
      </div>
    );
  }
}
