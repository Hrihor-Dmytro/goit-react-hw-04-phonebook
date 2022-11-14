import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './FormComponent/FormComponent';
import { ContactList } from './ContactList/ContactsList';
import { Filter } from './FiltrComponent/FiltrComponent';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  handleSubmit = values => {
    const { name, number } = values;

    const contact = {
      name,
      number,
    };

    const dublicateContact = this.findDublicateContact(
      contact,
      this.state.contacts
    );

    dublicateContact
      ? alert(`${contact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, { ...values, id: nanoid() }],
        }));
  };

  findDublicateContact = (contact, contactsList) => {
    return contactsList.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  deliteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contacts => contacts.id !== contactId
      ),
    }));
  };

  onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div>
        <Form onSubmit={this.handleSubmit} />

        <Filter value={filter} onFilterChange={this.onFilterChange} />
        <ContactList
          contactsArr={visibleContacts}
          onDelitContact={this.deliteContact}
        />
      </div>
    );
  }
}
