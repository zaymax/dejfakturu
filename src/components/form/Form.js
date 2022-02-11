import { Component } from "react";
import { DateInput } from "../inputs/DateInput";
import { NumberInput } from "../inputs/NumberInput";
import { StringInput } from "../inputs/StringInput";
import { Section } from "../section/Section";
import "./form.scss";

export class Form extends Component {

  constructor(props) {
    super(props);
    this.state = { 

      //Basic information of invoice
      invoiceNumber: null,
      registrationNumber: null,
      variableSymbol: "",
      constantSymbol: "",
      createdBy: "",
      issueDate:  null,
      dueDate: null,
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

    this.handleOnChangeInvoiceNumber = this.handleOnChangeInvoiceNumber.bind(this);
    this.handleOnChangeRegistrationNumber = this.handleOnChangeRegistrationNumber.bind(this);
    this.handleOnChangeVariableSymbol = this.handleOnChangeVariableSymbol.bind(this);
    this.handleOnChangeConstantSymbol = this.handleOnChangeConstantSymbol.bind(this);
    this.handleOnChangeCreatedBy = this.handleOnChangeCreatedBy.bind(this);
    this.handleOnChangeIssueDate = this.handleOnChangeIssueDate.bind(this);
    this.handleOnChangeDueDate = this.handleOnChangeDueDate.bind(this);
    this.handleOnChangeAccountNumber = this.handleOnChangeAccountNumber.bind(this);

    this.handleOnChangeIdentifierNumberOfSupplier = this.handleOnChangeIdentifierNumberOfSupplier.bind(this);
    this.handleOnChangeNameOfSupplier = this.handleOnChangeNameOfSupplier.bind(this);
    this.handleOnChangeVatIdentifierNumberOfSupplier = this.handleOnChangeVatIdentifierNumberOfSupplier.bind(this);
    this.handleOnChangeStreetOfSupplier = this.handleOnChangeStreetOfSupplier.bind(this);
    this.handleOnChangeCityOfSupplier = this.handleOnChangeCityOfSupplier.bind(this);
    this.handleOnChangeZipCodeOfSupplier = this.handleOnChangeZipCodeOfSupplier.bind(this);

    this.handleOnChangeIdentifierNumberOfClient = this.handleOnChangeIdentifierNumberOfClient.bind(this);
    this.handleOnChangeNameOfClient = this.handleOnChangeNameOfClient.bind(this);
    this.handleOnChangeVatIdentifierNumberOfClient = this.handleOnChangeVatIdentifierNumberOfClient.bind(this);
    this.handleOnChangeStreetOfClient = this.handleOnChangeStreetOfClient.bind(this);
    this.handleOnChangeCityOfClient = this.handleOnChangeCityOfClient.bind(this);
    this.handleOnChangeZipCodeOfClient = this.handleOnChangeZipCodeOfClient.bind(this);
  }

  handleOnChangeInvoiceNumber(event) {
    this.setState({invoiceNumber: event.target.value});
  }

  handleOnChangeRegistrationNumber(event) {
    this.setState({registrationNumber: event.target.value});
  }

  handleOnChangeVariableSymbol(event) {
    this.setState({variableSymbol: event.target.value});
  }

  handleOnChangeConstantSymbol(event) {
    this.setState({constantSymbol: event.target.value});
  }

  handleOnChangeCreatedBy(event) {
    this.setState({createdBy: event.target.value});
  }

  handleOnChangeIssueDate(event) {
    this.setState({issueDate: event.target.value});
  }

  handleOnChangeDueDate(event) {
    this.setState({dueDate: event.target.value});
  }

  handleOnChangeAccountNumber(event) {
    this.setState({accountNumber: event.target.value});
  }

  handleOnChangeIdentifierNumberOfSupplier(event) {
    this.setState({identifierNumberOfSupplier: event.target.value});
  }

  handleOnChangeNameOfSupplier(event) {
    this.setState({nameOfSupplier: event.target.value});
  }

  handleOnChangeVatIdentifierNumberOfSupplier(event) {
    this.setState({vatIdentifierNumberOfSupplier: event.target.value});
  }

  handleOnChangeStreetOfSupplier(event) {
    this.setState({streetOfSupplier: event.target.value});
  }

  handleOnChangeCityOfSupplier(event)  {
    this.setState({cityOfSupplier: event.target.value});
  }

  handleOnChangeZipCodeOfSupplier(event) {
    this.setState({zipCodeOfSupplier: event.target.value});
  }
  
  handleOnChangeIdentifierNumberOfClient(event) {
    this.setState({identifierNumberOfClient: event.target.value});
  }

  handleOnChangeNameOfClient(event) {
    this.setState({nameOfClient: event.target.value});
  }

  handleOnChangeVatIdentifierNumberOfClient(event) {
    this.setState({vatIdentifierNumberOfClient: event.target.value});
  }

  handleOnChangeStreetOfClient(event) {
    this.setState({streetOfClient: event.target.value});
  }

  handleOnChangeCityOfClient(event)  {
    this.setState({cityOfClient: event.target.value});
  }

  handleOnChangeZipCodeOfClient(event) {
    this.setState({zipCodeOfClient: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>

        <h2>Vystavení nové faktury</h2>

        <Section header={"Zakladni udaje"}>
          <NumberInput label={"Číslo"} value={this.state.invoiceNumber} handler={this.handleOnChangeInvoiceNumber}/>
          <NumberInput label={"Evidenční číslo"} value={this.state.registrationNumber} handler={this.handleOnChangeRegistrationNumber}/>
          <NumberInput label={"Variabilní symbol"} value={this.state.variableSymbol} handler={this.handleOnChangeVariableSymbol}/>
          <NumberInput label={"Konstantní symbol"} value={this.state.constantSymbol} handler={this.handleOnChangeConstantSymbol}/>
          <StringInput label={"Vystavil"} value={this.state.createdBy} handler={this.handleOnChangeCreatedBy} />
          <DateInput label={"Datum vystavení"} value={this.state.issueDate} handler={this.handleOnChangeIssueDate} />
          <DateInput label={"Splatnost"} value={this.state.dueDate} handler={this.handleOnChangeDueDate} />
          <NumberInput label={"Cislo uctu"} value={this.state.accountNumber} handler={this.handleOnChangeAccountNumber} />
        </Section>

        <Section header={"Dodavatel"}>
          <NumberInput label={"IČO"} value={this.state.identifierNumberOfSupplier} handler={this.handleOnChangeIdentifierNumberOfSupplier} />
          <StringInput label={"Jmeno"} value={this.state.nameOfSupplier} handler={this.handleOnChangeNameOfSupplier} />
          <StringInput label={"DIČ"} value={this.state.vatIdentifierNumberOfSupplier} handler={this.handleOnChangeVatIdentifierNumberOfSupplier} />
          <StringInput label={"Ulice"} value={this.state.streetOfSupplier} handler={this.handleOnChangeStreetOfSupplier} />
          <StringInput label={"Město"} value={this.state.cityOfSupplier} handler={this.handleOnChangeCityOfSupplier} />
          <StringInput label={"PSČ"} value={this.state.zipCodeOfSupplier}  handler={this.handleOnChangeZipCodeOfSupplier} />
        </Section>

        <Section header={"Odběratel"}>
        <NumberInput label={"IČO"} value={this.state.identifierNumberOfClient} handler={this.handleOnChangeIdentifierNumberOfClient} />
          <StringInput label={"Jmeno"} value={this.state.nameOfClient} handler={this.handleOnChangeNameOfClient} />
          <StringInput label={"DIČ"} value={this.state.vatIdentifierNumberOfClient} handler={this.handleOnChangeVatIdentifierNumberOfClient} />
          <StringInput label={"Ulice"} value={this.state.streetOfClient} handler={this.handleOnChangeStreetOfClient} />
          <StringInput label={"Město"} value={this.state.cityOfClient} handler={this.handleOfChangeCityOfClient} />
          <StringInput label={"PSČ"} value={this.state.zipCodeOfClient}  handler={this.handleOnChangeZipCodeOfClient} />
        </Section>

        <Section header={"Položky faktury"} />

        <Section header={"Poznámka"}>
            <input type={"text"} />
        </Section>

      </form>
    );
  }
}
