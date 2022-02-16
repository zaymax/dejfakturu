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

    this.setStateOfInvoiceItems = this.setStateOfInvoiceItems.bind(this);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);

    this.calculationTotal = this.calculationTotal.bind(this);

    this.updateStateInvoiceItemCount = this.updateStateInvoiceItemCount.bind(this);
    this.updateStateInvoiceItemDescription = this.updateStateInvoiceItemDescription.bind(this);
    this.updateStateInvoiceItemPrice = this.updateStateInvoiceItemPrice.bind(this); 
    this.updateStateInvoiceItemTotalPrice = this.updateStateInvoiceItemTotalPrice.bind(this);
    
    

    this.handleOnChange = this.handleOnChange.bind(this);
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


  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({ ...this.state,
      [name]: value
    });
  }

  render() {
    const { t } = this.props;
    const total = this.calculationTotal();
    return (
      <form>
        <h2>{t('Issuance of a new invoice')}</h2>

        <Section header={t('Basic data')}>
          <NumberInput
            label={t('Invoice number')}
            name={'invoiceNumber'}
            value={this.state.invoiceNumber}
            handler={this.handleOnChange}
          />
          <NumberInput
            label={t('Registration number')}
            name={'registrationNumber'}
            value={this.state.registrationNumber}
            handler={this.handleOnChange}
          />
          <NumberInput
            label={t('Variable symbol')}
            name={'variableSymbol'}
            value={this.state.variableSymbol}
            handler={this.handleOnChange}
          />
          <NumberInput
            label={t('Constant symbol')}
            name={'constantSymbol'}
            value={this.state.constantSymbol}
            handler={this.handleOnChange}
          />
          <StringInput
            label={t('Created by')}
            name={'createdBy'}
            value={this.state.createdBy}
            handler={this.handleOnChange}
          />
          <DateInput
            label={t('Date of Issue')}
            name={'issueDate'}
            value={this.state.issueDate}
            handler={this.handleOnChange}
          />
          <DateInput
            label={t('Due by')}
            name={'dueDate'}
            value={this.state.dueDate}
            handler={this.handleOnChange}
          />
          <StringInput
            label={t('Account number')}
            name={'accountNumber'}
            value={this.state.accountNumber}
            handler={this.handleOnChange}
          />
        </Section>

        <Section header={t('Supplier')}>
          <NumberInput
            label={t('CIN')}
            name={'identifierNumberOfSupplier'}
            value={this.state.identifierNumberOfSupplier}
            handler={this.handleOnChange}
          />
          <StringInput
            label={t('Name')}
            name={'nameOfSupplier'}
            value={this.state.nameOfSupplier}
            handler={this.handleOnChange}
          />
          <StringInput
            label={t('VAT')}
            name={'vatIdentifierNumberOfSupplier'}
            value={this.state.vatIdentifierNumberOfSupplier}
            handler={this.handleOnChange}
          />
          <StringInput
            label={t('Street')}
            name={'streetOfSupplier'}
            value={this.state.streetOfSupplier}
            handler={this.handleOnChange}
          />
          <StringInput
            label={t('City')}
            name={'cityOfSupplier'}
            value={this.state.cityOfSupplier}
            handler={this.handleOnChange}
          />
          <StringInput
            label={t('Zip code')}
            name={'zipCodeOfSupplier'}
            value={this.state.zipCodeOfSupplier}
            handler={this.handleOnChange}
          />
        </Section>

        <Section header={t('Customer')}>
          <NumberInput
            label={t('CIN')}
            name={'identifierNumberOfClient'}
            value={this.state.identifierNumberOfClient}
            handler={this.handleOnChange}
          />
          <StringInput
            label={t('Name')}
            name={'nameOfClient'}
            value={this.state.nameOfClient}
            handler={this.handleOnChange}
          />
          <StringInput
            label={t('VAT')}
            name={'vatIdentifierNumberOfClient'}
            value={this.state.vatIdentifierNumberOfClient}
            handler={this.handleOnChange}
          />
          <StringInput
            label={t('Street')}
            name={'streetOfClient'}
            value={this.state.streetOfClient}
            handler={this.handleOnChange}
          />
          <StringInput
            label={t('City')}
            name={'cityOfClient'}
            value={this.state.cityOfClient}
            handler={this.handleOnChange}
          />
          <StringInput
            label={t('Zip code')}
            name={'zipCodeOfClient'}
            value={this.state.zipCodeOfClient}
            handler={this.handleOnChange}
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
            <textarea name={'note'} value={this.state.note} onChange={this.handleOnChange} />
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