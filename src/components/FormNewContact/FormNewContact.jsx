// import { Component } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

// export class FormNewContact extends Component {

//   state = {
//     name: '',
//     number: '',
//   };


export function FormNewContact({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }

    // this.setState({ [name]: value });

  };

  const handleSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    onSubmit({ name: name, number: number });

    reset();
    // this.reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
    // this.setState({ name: '', number: '' });
  };



  // render() {
  // const { name, number } = this.state;

  return (
    <form onSubmit={handleSubmit}>
      {/* <form onSubmit={this.handleSubmit}> */}
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        // onChange={this.handleChange}
        />
      </label>
      <label>
        Phone
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        // onChange={this.handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
  // }
}

FormNewContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default FormNewContact;
