import PropTypes from 'prop-types';
import { NumbersList } from './ContactList.styled';
import { ContactListItem } from './ContactListItem/ContactListItem';
export const ContactList = ({ contacts, onDeleteClick }) => {
  const contactsList = contacts.map(({ id, name, number }) => {
    return (
      <ContactListItem
        key={id}
        username={name}
        number={number}
        onDeleteClick={() => onDeleteClick(id)}
      />
    );
  });

  return <NumbersList>{contactsList}</NumbersList>;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
