import { Component } from "react";
import { withTranslation } from "react-i18next";
import InvoiceItem from "./InvoiceItem";

class InvoiceItems extends Component {
  render() {
    const { t } = this.props;
    const items = this.props.items.map((item) => (
      <div key={item.id.toString()} className="invoice-items__item">
        <InvoiceItem
          item={item}
          onDelete={this.props.handleDeleteItem}
          id={item.id}
          updateStateInvoiceItemCount={this.props.updateStateInvoiceItemCount}
          updateStateInvoiceItemDescription={
            this.props.updateStateInvoiceItemDescription
          }
          updateStateInvoiceItemPrice={this.props.updateStateInvoiceItemPrice}
          updateStateInvoiceItemTotalPrice={
            this.props.updateStateInvoiceItemTotalPrice
          }
        />
        {this.props.items.length > 1 && (
          <button
            type="button"
            onClick={() => this.props.handleDeleteItem(item.id)}
            className="invoice-item__button"
          >
            {t("Delete")}
          </button>
        )}
      </div>
    ));

    return (
      <div className="invoice-items">
        <div className="invoice-items__items">{items}</div>
        <div className="invoice-items__buttons">
          <button type="button" onClick={this.props.handleAddItem}>
            {t("Add another item")}
          </button>
        </div>
      </div>
    );
  }
}

export default withTranslation()(InvoiceItems);
