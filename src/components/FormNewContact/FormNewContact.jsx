import PropTypes from 'prop-types';
import { useState } from 'react';

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
    setState({ ...initialState })
  }

  return (
    <form onSubmit={handleSubmit}>
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
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

FormNewContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default FormNewContact;
