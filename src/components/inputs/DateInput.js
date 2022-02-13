import moment from "moment";
import { Component } from "react";

export class DateInput extends Component {
  render() {
    return (
      <div className="content-field">
        <div className="content-field__label">{this.props.label}:</div>
        <div className="content-field__value">
          <input
            type="date"
            name="date"
            value={this.props.value ? moment(new Date(this.props.value)).format("YYYY-MM-DD") : ""}
            onChange={this.props.handler}
          />
        </div>
      </div>
    );
  }
}
