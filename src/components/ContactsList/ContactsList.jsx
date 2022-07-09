import ContactsItem from '../ContactsItem/ContactsItem';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, removeContact }) => {

  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactsItem
            name={name}
            number={number}
            key={id}
            id={id}
            removeContact={removeContact}
          />
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};

export default ContactsList;
