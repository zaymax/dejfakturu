import { Component } from "react";
import { InvoiceItem } from "./InvoiceItem";

export class InvoiceItems extends Component {
  render() {
    const items = this.props.items.map((item) => (
      <div key={item.id.toString()} className="invoice-items__item">
        <InvoiceItem
          item={item}
          onDelete={this.props.handleDeleteItem}
          id={item.id}
          updateStateInvoiceItemCount={this.props.updateStateInvoiceItemCount}
          updateStateInvoiceItemDescription={this.props.updateStateInvoiceItemDescription}
          updateStateInvoiceItemPrice={this.props.updateStateInvoiceItemPrice}
          updateStateInvoiceItemTotalPrice={this.props.updateStateInvoiceItemTotalPrice}
        />
        {this.props.items.length > 1 && (
          <button
            type="button"
            onClick={() => this.props.handleDeleteItem(item.id)}
          >
            {"Delete"}
          </button>
        )}
      </div>
    ));

    return (
      <div>
        <div className="invoice-item__labels">
          <div className="invoice-item__label">
            <label>Počet:</label>
          </div>
          <div className="invoice-item__label">
            <label>Popis:</label>
          </div>
          <div className="invoice-item__label">
            <label>Cena:</label>
          </div>
          <div className="invoice-item__label">
            <label>Celková cena:</label>
          </div>
        </div>
        <div className="invoice-items">{items}</div>
        <div className="invoice-items__buttons">
          <button type="button" onClick={this.props.handleAddItem}>
            Add another item
          </button>
        </div>
      </div>
    );
  }
}
