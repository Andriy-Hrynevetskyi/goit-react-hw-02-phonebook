import { ContactListItemStyled, ContactInfo } from './ContactListItem.styled';
export const ContactListItem = ({ username, number, id, onDeleteClick }) => {
  return (
    <ContactListItemStyled>
      <ContactInfo>
        {username}: {number}
      </ContactInfo>
      <button type="button" onClick={() => onDeleteClick(id)}>
        DELETE
      </button>
    </ContactListItemStyled>
  );
};
