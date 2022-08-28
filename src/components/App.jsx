import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './Container/Container';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFormSubmit = data => {
    const { contacts } = this.state;

    if (
      contacts.some(contact =>
        contact.name.toLowerCase().includes(data.name.toLocaleLowerCase())
      )
    ) {
      return alert(`${data.name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      ...data,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  handleDeleteBtnClick = contactId => {
    this.setState(({ contacts: prevContacts }) => ({
      contacts: prevContacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const lowerCaseFilter = this.state.filter.toLocaleLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(lowerCaseFilter)
    );

    return (
      <Container>
        <ContactForm onSubmit={this.handleFormSubmit} />
        <Filter filter={this.state.filter} onChange={this.handleFilterChange} />
        {filteredContacts.length > 0 && (
          <ContactList
            contacts={filteredContacts}
            onDeleteClick={this.handleDeleteBtnClick}
          />
        )}
      </Container>
    );
  }
}
