import { Component } from "react";
import { withTranslation } from "react-i18next";
import "./invoice-item.scss";

class InvoiceItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.item.id,
      count: this.props.item.count,
      description: this.props.item.description,
      price: this.props.item.price,
      totalPrice: this.props.item.totalPrice
    };

    this.handleOnChangeCount = this.handleOnChangeCount.bind(this);
    this.handleOnChangeDescription = this.handleOnChangeDescription.bind(this);
    this.handleOnChangePrice = this.handleOnChangePrice.bind(this);
    this.handleOnChangeTotalPrice = this.handleOnChangeTotalPrice.bind(this);
  }

  handleOnChangeCount(event) {
    this.setState({
      count: Number(event.target.value)
    });
    this.props.updateStateInvoiceItemCount(Number(event.target.value), this.state.id);
  }

  handleOnChangeDescription(event) {
    this.setState({
      description: event.target.value
    });
    this.props.updateStateInvoiceItemDescription(event.target.value, this.state.id);
  }

  handleOnChangePrice(event) {
    this.setState({
      price: Number(event.target.value)
    });
    this.props.updateStateInvoiceItemPrice(Number(event.target.value), this.state.id);
  }

  handleOnChangeTotalPrice(event) {
    this.setState({
      totalPrice: Number(event.target.value)
    });
    this.props.updateStateInvoiceItemTotalPrice(Number(event.target.value), this.state.id);
  }

  

  render() {
    const { t } = this.props;
    return (
      <div className="invoice-item">
        <input
          type="number"
          value={this.state.count}
          className="invoice-item__value"
          onChange={this.handleOnChangeCount}
          placeholder={t("Count")}
        />
        <input
          type="string"
          value={this.state.description}
          className="invoice-item__value"
          onChange={this.handleOnChangeDescription}
          placeholder={t("Description")}
        />
        <input
          type="number"
          value={this.state.price}
          className="invoice-item__value"
          onChange={this.handleOnChangePrice}
          placeholder={t("Price")}
        />
        <input
          type="number"
          value={this.state.totalPrice}
          className="invoice-item__value"
          onChange={this.handleOnChangeTotalPrice}
          placeholder={t("Total price")}
        />
      </div>
    );
  }
}

export default withTranslation()(InvoiceItem);