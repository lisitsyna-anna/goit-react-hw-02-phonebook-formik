import PropTypes from 'prop-types';

import { Button } from 'components/ContactForm/ContactForm.styled';
import { Item } from './ContactItem.styled';

export const ContactItem = ({
  id,
  name,
  number,
  onDeleteContact,
  icon: Icon = null,
}) => {
  return (
    <Item>
      <p>
        {Icon && <Icon size={16} />}
        {name}: {number}
      </p>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
