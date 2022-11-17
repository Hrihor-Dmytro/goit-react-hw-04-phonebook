import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './FormComponent/FormComponent';
import { ContactList } from './ContactList/ContactsList';
import { Filter } from './FiltrComponent/FiltrComponent';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (values, { resetForm }) => {
    resetForm();

    const { name, number } = values;

    const contact = {
      name,
      number,
    };

    const dublicateContact = findDublicateContact(contact, contacts);

    dublicateContact
      ? alert(`${contact.name} is already in contacts`)
      : setContacts([...contacts, { ...values, id: nanoid() }]);
  };

  const requiredCard = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const findDublicateContact = (contact, contactsList) => {
    return contactsList.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
  };
  const onFilterChange = e => {
    setFilter(e.currentTarget.value);
    console.log(e);
  };
  const deleteCard = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <Filter value={filter} onFilterChange={onFilterChange} />
      <ContactList requiredCard={requiredCard()} deliteContact={deleteCard} />
    </div>
  );
};
