import { Component } from "react";
import { InvoiceItem } from "./InvoiceItem";

export class InvoiceItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items,
    };

    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  handleClickDelete(item) {
    
    
  }

  render() {
    const items = this.state.items.map((item) => (
      <div key={item.id.toString()} className="invoice-items__item">
          <InvoiceItem item={item} />
          {this.state.items.length > 1 &&
            <button type="button" onClick={item => this.handleClickDelete({item})}>{"Delete"}</button>
          }    
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
        <div className="invoice-items">
          {items}
        </div>
        <div className="invoice-items__buttons">
          {/* <button>Add another item</button> */}
        </div>
      </div>
    );
  }
}
