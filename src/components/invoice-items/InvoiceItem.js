import { Component } from "react";
import "./invoice-item.scss";

export class InvoiceItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            item: this.props.item
        }
    }

    render() {
        return(
            <div className="invoice-item">
                <input type={"number"}  value={this.state.item.count} className="invoice-item__value" />
                <input  type={"string"} value={this.props.item.description} className="invoice-item__value" />
                <input type={"number"} value={this.props.item.price} className="invoice-item__value" />
                <input type={"number"} value={this.props.item.totalPrice} className="invoice-item__value" />
            </div>
        );
    }
}