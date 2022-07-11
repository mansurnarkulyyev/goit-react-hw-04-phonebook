// import { Component } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
// import { initialState } from './initialState';

// export class FormNewContact extends Component {

//   state = {
//     name: '',
//     number: '',
//   };


export function FormNewContact({ onSubmit, initialState }) {
  const [state, setState] = useState({ ...initialState });
  const { name, number } = state;


  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === "checkbox" ? checked : value;
    setState(prevState => ({
      ...prevState,
      [name]: newValue
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    reset()
  };
  const reset = () => {
    setState({
      name: '',
      number: '',
    })
  }


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
