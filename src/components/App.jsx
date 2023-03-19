import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    console.log('UPDATE', Date.now());

    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.state.contacts.find(
      contact => newContact.name.toLowerCase() === contact.name.toLowerCase(),
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterInputValue = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    const visibleContacts = this.filterContacts();

    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          marginLeft: '80px',
          marginTop: '50px',
        }}
      >
        <Form onSubmit={this.addContact} title="Phonebook" />
        <Contacts contacts={visibleContacts} onDelete={this.deleteContact} title="Contacts">
          <Filter
            title="Find contacts by name"
            value={this.state.filter}
            onChange={this.filterInputValue}
          />
        </Contacts>
      </div>
    );
  }
}

export default App;
