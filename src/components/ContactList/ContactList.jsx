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
          />
        );
      })}
    </List>
  );
};
