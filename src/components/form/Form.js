import { Component } from "react";
import "./form.scss";

export class Form extends Component {
  today = new Date();

  constructor(props) {
    super(props);
    this.state = { 
      //Basic information of invoice
      invoiceNumber: null,
      registrationNumber: null,
      variableSymbol: "",
      constantSymbol: "",
      createdBy: "",
      issueDate:  new Date(Date.UTC(this.today.getMonth(), this.today.getDay(), this.today.getFullYear())),
      dueDate: new Date(),
      accountNumber: "",

      //Supplier
      identifierNumberOfSupplier: "",
      nameOfSupplier: "",
      vatIdentifierNumberOfSupplier: "",
      streetOfSupplier: "",
      cityOfSupplier: "",
      zipCodeOfSupplier: "",

      //Client
      identifierNumberOfClient: "",
      nameOfClient: "",
      vatIdentifierNumberOfClient: "",
      streetOfClient: "",
      cityOfClient: "",
      zipCodeOfClient: "",

      //Invoice items:
      invoiceItems: [],


      //Note
      note: "",
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChangeInvoiceNumber  = this.handleOnChangeInvoiceNumber.bind(this);
  }

  handleOnChangeInvoiceNumber(event) {
    this.setState({invoiceNumber: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        {/* <div> -- ADD LATER
                    Druh faktury:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="invoiceWithoutVat">Faktura bez DPH (nejsem platce DPH)</option>
                        <option value="invoiceWithVat">Faktura s DPH (jsem platce DPH) - Danovy doklad</option>
                    </select>
                </div> */}

        <h2>Vystavení nové faktury</h2>

        <div className="section">
          <div className="section__header">
            <h3>Zakladni udaje:</h3>
          </div>
          <div className="section__content">
            <div className="content-field">
              <div className="content-field__label">Číslo:</div>
              <div className="content-field__value">
                <input type={"number"} value={this.state.invoiceNumber} onChange={this.handleOnChangeInvoiceNumber}/>
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Evidenční číslo:</div>
              <div className="content-field__value">
                <input type={"number"} value={this.state.registrationNumber} />
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Variabilní symbol:</div>
              <div className="content-field__value">
                <input type={"number"} value={this.state.variableSymbol} />
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Konstantní symbol:</div>
              <div className="content-field__value">
                <input type={"number"} value={this.state.constantSymbol} />
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Vystavil:</div>
              <div className="content-field__value">
                <input type={"text"} value={this.state.createdBy} />
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Datum vystavení:</div>
              <div className="content-field__value">
                <input type={"date"} value={this.state.issueDate} onChange={event => this.setState({issueDate: event.target.value})}/>
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Splatnost:</div>
              <div className="content-field__value">
                <input type={"date"} value={this.state.dueDate}/>
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Cislo uctu:</div>
              <div className="content-field__value">
                <input type={"number"} value={this.state.accountNumber} />
              </div>
            </div>
          </div>

          <hr />
        </div>

        <div className="section">
          <div className="section__header">
            <h3>Dodavatel:</h3>
          </div>
          <div className="section__content">
            <div className="content-field">
              <div className="content-field__label">IČO:</div>
              <div className="content-field__value">
                <input type={"number"} value={this.state.identifierNumberOfSupplier}/>
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Jméno:</div>
              <div className="content-field__value">
                <input type={"text"} value={this.state.nameOfSupplier}/>
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">DIČ:</div>
              <div className="content-field__value">
                <input type={"text"} value={this.state.vatIdentifierNumberOfSupplier}/>
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Ulice:</div>
              <div className="content-field__value">
                <input type={"text"} value={this.state.streetOfSupplier}/>
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Město:</div>
              <div className="content-field__value">
                <input type={"text"} value={this.state.cityOfSupplier}/>
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">PSČ:</div>
              <div className="content-field__value">
                <input type={"text"} value={this.state.zipCodeOfSupplier}/>
              </div>
            </div>
          </div>

          <hr />
        </div>

        <div className="section">
          <div className="section__header">
            <h3>Odběratel:</h3>
          </div>
          <div className="section__content">
            <div className="content-field">
              <div className="content-field__label">IČO:</div>
              <div className="content-field__value">
                <input type={"number"} value={this.state.identifierNumberOfClient}/>
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Jméno:</div>
              <div className="content-field__value">
                <input type={"text"} value={this.state.nameOfClient}/>
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">DIČ:</div>
              <div className="content-field__value">
                <input type={"text"} value={this.state.vatIdentifierNumberOfClient}/>
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Ulice:</div>
              <div className="content-field__value">
                <input type={"text"} value={this.state.streetOfClient}/>
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Město:</div>
              <div className="content-field__value">
                <input type={"text"} value={this.cityOfClient}/>
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">PSČ:</div>
              <div className="content-field__value">
                <input type={"text"} value={this.state.zipCodeOfClient}/>
              </div>
            </div>
          </div>

          <hr />
        </div>

        <div className="section">
          <div className="section__header">
            <h3>Položky faktury:</h3>
          </div>
          <div className="section__content"></div>

          <hr />
        </div>

        <div className="section">
          <div className="section__header">
            <h3>Poznámka:</h3>
          </div>
          <div className="section__content">
            <input type={"text"} />
          </div>

          <hr />
        </div>
      </form>
    );
  }
}
