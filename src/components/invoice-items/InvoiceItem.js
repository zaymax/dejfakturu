import { Component } from "react";
import "./invoice-item.scss";

export class InvoiceItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            item: this.props.item
        }

        this.handleOnChangeCount = this.handleOnChangeCount.bind(this);
        this.handleOnChangeDescription = this.handleOnChangeDescription.bind(this);
        this.handleOnChangePrice = this.handleOnChangePrice.bind(this);
        this.handleOnChangeTotalPrice = this.handleOnChangeTotalPrice.bind(this);
    }

    handleOnChangeCount(event) {
        this.setState({
            count: event.target.value
        });
    }

    handleOnChangeDescription(event) {
        this.setState({
            description: event.target.value
        });
    }

    handleOnChangePrice(event) {
        this.setState({
            price: event.target.value
        });
    }

    handleOnChangeTotalPrice(event) {
        this.setState({
            totalPrice: event.target.value
        });
    }

    

    render() {
        return(
            <div className="invoice-item">
                <input type="number" value={this.state.item.count} className="invoice-item__value" onChange={this.handleOnChangeCount} />
                <input type="string" value={this.props.item.description} className="invoice-item__value" onChange={this.handleOnChangeDescription} />
                <input type="number" value={this.props.item.price} className="invoice-item__value" onChange={this.handleOnChangePrice} />
                <input type="number" value={this.props.item.totalPrice} className="invoice-item__value" onChange={this.handleOnChangeTotalPrice} />
            </div>
        );
    }
}