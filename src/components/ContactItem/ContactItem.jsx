import { Button } from 'components/ContactForm/ContactForm.styled';
import { Item } from './ContactItem.styled';
export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};
