import { Component } from "react";
import { InvoiceItem } from "./InvoiceItem";

export class InvoiceItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items,
    };
  }

  render() {
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
        {this.state.items.map((item) => (
          <div className="invoice-items">
            <div className="invoice-items__item">
                <InvoiceItem item={item} />
                {this.state.items.length > 1 &&
                    <button>{"Delete"}</button>
                }    
            </div>
          </div>
        ))}
      </div>
    );
  }
}
