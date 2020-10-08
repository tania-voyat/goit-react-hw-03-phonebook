import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactsList from "./ContactsList/ContactsList";
import ContactForm from "./ContactForm";
import Filter from "./Filter";

export default class App extends Component {
  static propTypes = {};
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const addedContacts = localStorage.getItem("contacts");
    if (addedContacts) {
      this.setState({
        contacts: JSON.parse(addedContacts),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.conacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState((prevState) => {
      const addedContact = prevState.contacts.map((contact) => contact.name);

      if (addedContact.includes(name)) {
        return alert(`${name} is already on a list`);
      } else return { contacts: [...prevState.contacts, contact] };
    });
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(
          (contact) => contact.id !== contactId
        ),
      };
    });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        {visibleContacts.length > 0 && (
          <ContactsList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        )}
      </div>
    );
  }
}
