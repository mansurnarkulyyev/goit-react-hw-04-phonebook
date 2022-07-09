// import { Component } from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import '../styles/styles.scss';
import FormNewContact from './FormNewContact/FormNewContact';
import Section from './Section/Section';
import ContactsList from './ContactsList/ContactsList';
import Notification from './Notification/Notification';
import SearchContact from './SearchContact/SearchContact';

// export class App extends Component {
//   state = {
//     contacts: [
//       // { id: 'id-0', name: 'wer', number: '232459-12-56' },
//       // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedСontacts = JSON.parse(contacts);

  //   if (parsedСontacts) {
  //     this.setState({ contacts: parsedСontacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const nextContacts = this.state.contacts;
  //   const prevContacts = prevState.contacts;

  //   if (nextContacts !== prevContacts) {
  //     localStorage.setItem('contacts', JSON.stringify(nextContacts));
  //   }
  // }

  useEffect(() => {
    const contactsStorage = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsStorage);

    if (parsedContacts) {
      setContacts(parsedContacts);
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const filterContacts = () => {
    // const { filter, contacts } = this.state;
    if (filter) {
      // return [
      //   ...contacts.filter(contact =>
      //     contact.name.toLowerCase().includes(filter.toLowerCase())
      //   ),
      // ];
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );

    }
    return contacts;
  }

  const addContact = ({ name, number }) => {
    const normalizedFind = name.toLowerCase();
    const findName = contacts.find(
      // const findName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === normalizedFind
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }

    const findNumber = contacts.find(
      // const findNumber = this.state.contacts.find(
      contact => contact.number === number
    );
    if (findNumber) {
      return alert(`This phone number is already in use.`);
    }

    // this.setState(({ contacts }) => ({
    //   contacts: [{ name, number, id: nanoid() }, ...contacts],
    // }));
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(contacts => [...contacts, newContact]);
  };


  const removeContact = id => {
    // this.setState(prev => ({
    //   contacts: [...prev.contacts.filter(contact => contact.id !== id)],
    // }));
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const handleChange = e => {
    // this.setState({ [e.target.name]: e.target.value });
    setFilter(e.target.value);
  };

  // render() {
  // const { filter, contacts } = this.state;
  return (
    <>
      <Section title={'Phonebook'}>
        <FormNewContact onSubmit={addContact} />
        {/* <FormNewContact onSubmit={this.addContact} /> */}
      </Section>
      <Section title={'Contacts'}>
        {contacts.length ? (
          <>
            <SearchContact
              searchValue={filter}
              handleChange={handleChange}
            />
            <ContactsList
              // searchValue={filter}
              contacts={filterContacts()}
              removeContact={removeContact}
            // contacts={this.filterContacts()} 
            // removeContact={this.removeContact}
            />
          </>
        ) : (
          <Notification message={'Phonebook is empty, add someone'} />
        )}
      </Section>
    </>
  );
  // }
}