import PropTypes from 'prop-types';
import { HiPhone } from 'react-icons/hi';

import { ContactItem } from 'components/ContactItem';

import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
            icon={HiPhone}
          />
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
