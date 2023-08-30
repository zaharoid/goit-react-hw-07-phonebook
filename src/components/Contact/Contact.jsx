import { Item, ContactInfo } from './Contact.styled';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import { useDispatch } from 'react-redux';
import { DeleteButton } from 'components/IconButton/IconButton.styled';
import { deleteContact } from 'redux/operations/contactOperations';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <Item key={id}>
      <ContactInfo>
        <p>Name: {name}</p>
        <p>Number: {number}</p>
      </ContactInfo>

      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
        <DeleteIcon fill="#f56464"></DeleteIcon>
      </DeleteButton>
    </Item>
  );
};
