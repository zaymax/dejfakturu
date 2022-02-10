import { Component } from "react";
import "./form.scss";

export class Form extends Component {
  today = new Date();

  constructor(props) {
    super(props);
    this.state = { 
      value: "invoiceWithoutVat",
      invoiceNumber: 0,
      issueDate:  new Date(Date.UTC(this.today.getMonth(), this.today.getDay(), this.today.getFullYear())),
      // dueDate: this.issueDat,

    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  // handleOnSubmit(event) {
  //     return;
  // }

  render() {
    console.log(this.state.issueDate);
    console.log(this.state.dueDate);
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
                <input type={"number"} value={this.state.invoiceNumber}/>
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Evidenční číslo:</div>
              <div className="content-field__value">
                <input type={"number"} />
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Variabilní symbol:</div>
              <div className="content-field__value">
                <input type={"number"} />
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Konstantní symbol:</div>
              <div className="content-field__value">
                <input type={"number"} />
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Vystavil:</div>
              <div className="content-field__value">
                <input type={"text"} value={this.state.value}/>
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Datum vystavení:</div>
              <div className="content-field__value">
                <input type={"date"} value={"2011-09-29"} onChange={event => this.setState({issueDate: event.target.value})}/>
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
                <input type={"number"} />
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
                <input type={"number"} />
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Jméno:</div>
              <div className="content-field__value">
                <input type={"text"} />
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">DIČ:</div>
              <div className="content-field__value">
                <input type={"text"} />
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Ulice:</div>
              <div className="content-field__value">
                <input type={"text"} />
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Město:</div>
              <div className="content-field__value">
                <input type={"text"} />
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">PSČ:</div>
              <div className="content-field__value">
                <input type={"text"} />
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
                <input type={"number"} />
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Jméno:</div>
              <div className="content-field__value">
                <input type={"text"} />
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">DIČ:</div>
              <div className="content-field__value">
                <input type={"text"} />
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Ulice:</div>
              <div className="content-field__value">
                <input type={"text"} />
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">Město:</div>
              <div className="content-field__value">
                <input type={"text"} />
              </div>
            </div>

            <div className="content-field">
              <div className="content-field__label">PSČ:</div>
              <div className="content-field__value">
                <input type={"text"} />
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
