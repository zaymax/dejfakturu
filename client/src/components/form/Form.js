import { Component } from "react";
import { DateInput } from "../inputs/DateInput";
import { NumberInput } from "../inputs/NumberInput";
import { StringInput } from "../inputs/StringInput";
import InvoiceItems from "../invoice-items/InvoiceItems";
import { Section } from "../section/Section";
import axios from 'axios';
import { saveAs } from 'file-saver';
import "./form.scss";
import { withTranslation } from "react-i18next";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Basic information of invoice
      invoiceNumber: null,
      registrationNumber: null,
      variableSymbol: null,
      constantSymbol: null,
      createdBy: "Admin",
      issueDate: new Date(),
      dueDate: null,
      accountNumber: "285969/0800",

      //Supplier
      identifierNumberOfSupplier: null,
      nameOfSupplier: "CCC",
      vatIdentifierNumberOfSupplier: "CZ545144545",
      streetOfSupplier: "Streeetttt",
      cityOfSupplier: "City",
      zipCodeOfSupplier: "180 00",

      //Client
      identifierNumberOfClient: null,
      nameOfClient: "Admin",
      vatIdentifierNumberOfClient: "CZ4444444",
      streetOfClient: "Street admin",
      cityOfClient: "City admin",
      zipCodeOfClient: "41515",

      //Invoice items:
      invoiceItems: [
        {
          id: 0,
          count: 4,
          description: "IT Sluzby",
          price: 100,
          totalPrice: 400,
        },
        {
          id: 1,
          count: 1,
          description: "IT Sluzby",
          price: 100,
          totalPrice: 100,
        },
      ],

      //Note
      note: "",
    };

    this.handleOnChangeInvoiceNumber =
      this.handleOnChangeInvoiceNumber.bind(this);
    this.handleOnChangeRegistrationNumber =
      this.handleOnChangeRegistrationNumber.bind(this);
    this.handleOnChangeVariableSymbol =
      this.handleOnChangeVariableSymbol.bind(this);
    this.handleOnChangeConstantSymbol =
      this.handleOnChangeConstantSymbol.bind(this);
    this.handleOnChangeCreatedBy = this.handleOnChangeCreatedBy.bind(this);
    this.handleOnChangeIssueDate = this.handleOnChangeIssueDate.bind(this);
    this.handleOnChangeDueDate = this.handleOnChangeDueDate.bind(this);
    this.handleOnChangeAccountNumber =
      this.handleOnChangeAccountNumber.bind(this);

    this.handleOnChangeIdentifierNumberOfSupplier =
      this.handleOnChangeIdentifierNumberOfSupplier.bind(this);
    this.handleOnChangeNameOfSupplier =
      this.handleOnChangeNameOfSupplier.bind(this);
    this.handleOnChangeVatIdentifierNumberOfSupplier =
      this.handleOnChangeVatIdentifierNumberOfSupplier.bind(this);
    this.handleOnChangeStreetOfSupplier =
      this.handleOnChangeStreetOfSupplier.bind(this);
    this.handleOnChangeCityOfSupplier =
      this.handleOnChangeCityOfSupplier.bind(this);
    this.handleOnChangeZipCodeOfSupplier =
      this.handleOnChangeZipCodeOfSupplier.bind(this);

    this.handleOnChangeIdentifierNumberOfClient =
      this.handleOnChangeIdentifierNumberOfClient.bind(this);
    this.handleOnChangeNameOfClient =
      this.handleOnChangeNameOfClient.bind(this);
    this.handleOnChangeVatIdentifierNumberOfClient =
      this.handleOnChangeVatIdentifierNumberOfClient.bind(this);
    this.handleOnChangeStreetOfClient =
      this.handleOnChangeStreetOfClient.bind(this);
    this.handleOnChangeCityOfClient =
      this.handleOnChangeCityOfClient.bind(this);
    this.handleOnChangeZipCodeOfClient =
      this.handleOnChangeZipCodeOfClient.bind(this);

    this.setStateOfInvoiceItems = this.setStateOfInvoiceItems.bind(this);
    this.handleOnChangeNote = this.handleOnChangeNote.bind(this);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);

    this.calculationTotal = this.calculationTotal.bind(this);

    this.updateStateInvoiceItemCount = this.updateStateInvoiceItemCount.bind(this);
    this.updateStateInvoiceItemDescription = this.updateStateInvoiceItemDescription.bind(this);
    this.updateStateInvoiceItemPrice = this.updateStateInvoiceItemPrice.bind(this); 
    this.updateStateInvoiceItemTotalPrice = this.updateStateInvoiceItemTotalPrice.bind(this);
    
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChangeInvoiceNumber(event) {
    this.setState({ invoiceNumber: event.target.value });
  }

  handleOnChangeRegistrationNumber(event) {
    this.setState({ registrationNumber: event.target.value });
  }

  handleOnChangeVariableSymbol(event) {
    this.setState({ variableSymbol: event.target.value });
  }

  handleOnChangeConstantSymbol(event) {
    this.setState({ constantSymbol: event.target.value });
  }

  handleOnChangeCreatedBy(event) {
    this.setState({ createdBy: event.target.value });
  }

  handleOnChangeIssueDate(event) {
    this.setState({ issueDate: event.target.value });
  }

  handleOnChangeDueDate(event) {
    this.setState({ dueDate: event.target.value });
  }

  handleOnChangeAccountNumber(event) {
    this.setState({ accountNumber: event.target.value });
  }

  handleOnChangeIdentifierNumberOfSupplier(event) {
    this.setState({ identifierNumberOfSupplier: event.target.value });
  }

  handleOnChangeNameOfSupplier(event) {
    this.setState({ nameOfSupplier: event.target.value });
  }

  handleOnChangeVatIdentifierNumberOfSupplier(event) {
    this.setState({ vatIdentifierNumberOfSupplier: event.target.value });
  }

  handleOnChangeStreetOfSupplier(event) {
    this.setState({ streetOfSupplier: event.target.value });
  }

  handleOnChangeCityOfSupplier(event) {
    this.setState({ cityOfSupplier: event.target.value });
  }

  handleOnChangeZipCodeOfSupplier(event) {
    this.setState({ zipCodeOfSupplier: event.target.value });
  }

  handleOnChangeIdentifierNumberOfClient(event) {
    this.setState({ identifierNumberOfClient: event.target.value });
  }

  handleOnChangeNameOfClient(event) {
    this.setState({ nameOfClient: event.target.value });
  }

  handleOnChangeVatIdentifierNumberOfClient(event) {
    this.setState({ vatIdentifierNumberOfClient: event.target.value });
  }

  handleOnChangeStreetOfClient(event) {
    this.setState({ streetOfClient: event.target.value });
  }

  handleOnChangeCityOfClient(event) {
    this.setState({ cityOfClient: event.target.value });
  }

  handleOnChangeZipCodeOfClient(event) {
    this.setState({ zipCodeOfClient: event.target.value });
  }

  setStateOfInvoiceItems(items) {
    this.setState({
      items: items,
    });
  }

  handleDelete(itemId) {
    const items = this.state.invoiceItems.filter(item => item.id !== itemId);
    this.setState({
      invoiceItems: items
    })
  }

  handleAddItem() {
    const index = this.state.invoiceItems[this.state.invoiceItems.length - 1].id + 1;
    const items = this.state.invoiceItems.concat({
      id: index,
      count: 0,
      description: "Popis",
      price: 0,
      totalPrice: 0
    });
    this.setState({
      invoiceItems: items
    })
  }

  handleOnChangeNote(event) {
    this.setState({
      note: event.target.value,
    });
  }

  calculationTotal() {
    const items = this.state.invoiceItems;
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].count * items[i].price;  
    }
    return total;
  }

  updateStateInvoiceItemCount(value, id) {
    const items = this.state.invoiceItems;
    const indexItem = items.findIndex(e => e.id === id);
    items[indexItem].count = value;
    this.setState({
      invoiceItems: items
    });
  }

  updateStateInvoiceItemDescription(value, id) {
    const items = this.state.invoiceItems;
    const indexItem = items.findIndex(e => e.id === id);
    items[indexItem].description = value;
    this.setState({
      invoiceItems: items
    });
  }

  updateStateInvoiceItemPrice(value, id) {
    const items = this.state.invoiceItems;
    const indexItem = items.findIndex(e => e.id === id);
    items[indexItem].price = value;
    this.setState({
      invoiceItems: items
    });
  }

  updateStateInvoiceItemTotalPrice(value, id) {
    const items = this.state.invoiceItems;
    const indexItem = items.findIndex(e => e.id === id);
    items[indexItem].totalPrice = value;
    this.setState({
      invoiceItems: items
    });
  }

  handleOnSubmit() {

  }

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }

  render() {
    const { t } = this.props;
    const total = this.calculationTotal();
    return (
      <form onSubmit={this.handleOnSubmit}>
        <h2>{t('Issuance of a new invoice')}</h2>

        <Section header={t('Basic data')}>
          <NumberInput
            label={t('Invoice number')}
            value={this.state.invoiceNumber}
            handler={this.handleOnChangeInvoiceNumber}
          />
          <NumberInput
            label={t('Registration number')}
            value={this.state.registrationNumber}
            handler={this.handleOnChangeRegistrationNumber}
          />
          <NumberInput
            label={t('Variable symbol')}
            value={this.state.variableSymbol}
            handler={this.handleOnChangeVariableSymbol}
          />
          <NumberInput
            label={t('Constant symbol')}
            value={this.state.constantSymbol}
            handler={this.handleOnChangeConstantSymbol}
          />
          <StringInput
            label={t('Created by')}
            value={this.state.createdBy || ""}
            handler={this.handleOnChangeCreatedBy}
          />
          <DateInput
            label={t('Date of Issue')}
            value={this.state.issueDate}
            handler={this.handleOnChangeIssueDate}
          />
          <DateInput
            label={t('Due by')}
            value={this.state.dueDate}
            handler={this.handleOnChangeDueDate}
          />
          <StringInput
            label={t('Account number')}
            value={this.state.accountNumber || ""}
            handler={this.handleOnChangeAccountNumber}
          />
        </Section>

        <Section header={t('Supplier')}>
          <NumberInput
            label={t('CIN')}
            value={this.state.identifierNumberOfSupplier}
            handler={this.handleOnChangeIdentifierNumberOfSupplier}
          />
          <StringInput
            label={t('Name')}
            value={this.state.nameOfSupplier || ""}
            handler={this.handleOnChangeNameOfSupplier}
          />
          <StringInput
            label={t('VAT')}
            value={this.state.vatIdentifierNumberOfSupplier || ""}
            handler={this.handleOnChangeVatIdentifierNumberOfSupplier}
          />
          <StringInput
            label={t('Street')}
            value={this.state.streetOfSupplier || ""}
            handler={this.handleOnChangeStreetOfSupplier}
          />
          <StringInput
            label={t('City')}
            value={this.state.cityOfSupplier || ""}
            handler={this.handleOnChangeCityOfSupplier}
          />
          <StringInput
            label={t('Zip code')}
            value={this.state.zipCodeOfSupplier || ""}
            handler={this.handleOnChangeZipCodeOfSupplier}
          />
        </Section>

        <Section header={t('Customer')}>
          <NumberInput
            label={t('CIN')}
            value={this.state.identifierNumberOfClient}
            handler={this.handleOnChangeIdentifierNumberOfClient}
          />
          <StringInput
            label={t('Name')}
            value={this.state.nameOfClient || ""}
            handler={this.handleOnChangeNameOfClient}
          />
          <StringInput
            label={t('VAT')}
            value={this.state.vatIdentifierNumberOfClient || ""}
            handler={this.handleOnChangeVatIdentifierNumberOfClient}
          />
          <StringInput
            label={t('Street')}
            value={this.state.streetOfClient || ""}
            handler={this.handleOnChangeStreetOfClient}
          />
          <StringInput
            label={t('City')}
            value={this.state.cityOfClient || ""}
            handler={this.handleOnChangeCityOfClient}
          />
          <StringInput
            label={t('Zip code')}
            value={this.state.zipCodeOfClient || ""}
            handler={this.handleOnChangeZipCodeOfClient}
          />
        </Section>

        <Section header={t('Invoice items')}>
          <InvoiceItems
            items={this.state.invoiceItems}
            setStateOfInvoiceItems={this.setStateOfInvoiceItems}
            handleDeleteItem={this.handleDelete}
            handleAddItem={this.handleAddItem}
            updateStateInvoiceItemCount={this.updateStateInvoiceItemCount}
            updateStateInvoiceItemDescription={this.updateStateInvoiceItemDescription}
            updateStateInvoiceItemPrice={this.updateStateInvoiceItemPrice}
            updateStateInvoiceItemTotalPrice={this.updateStateInvoiceItemTotalPrice}
          />
        </Section>

        <Section header={t('Note')}>
          <div className="note">
            <textarea value={this.state.note} onChange={this.handleOnChangeNote} />
          </div>
        </Section>

        <div className="section-total">
          <div className="section-total__withoutVat"><p>{t('Total price')} - {total}</p></div>
        </div>

        <button type="button" onClick={this.createAndDownloadPdf}>
            {t('Generate PDF')}
          </button>
      </form>
    );
  }
}

export default withTranslation()(Form);