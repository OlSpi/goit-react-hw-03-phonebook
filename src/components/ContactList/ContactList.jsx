import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

export const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const handleDeleteContact = id => {
    onDeleteContact(id);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li className={css.listItem} key={contact.id}>
          <span className={css.name}>{contact.name}:</span>
          <span className={css.number}>{contact.number}</span>
          <button
            className={css.deleteButton}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
