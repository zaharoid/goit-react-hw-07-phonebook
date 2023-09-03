import { useState } from 'react';
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { FormWrapper, Label, Input, Button } from './Phonebook.styled';
import { selectContacts, selectLoading } from 'redux/selectors/selectors';
import { addContact } from 'redux/operations/contactOperations';
import { Oval } from 'react-loader-spinner';

function Phonebook({ onCloseModal }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const onChangeInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onSubmit = async e => {
    e.preventDefault();

    for (const contact of contacts) {
      if (contact.name === name) {
        onCloseModal();
        reset();

        return Notify.warning(`${name} is already exist`);
      }
    }
    await dispatch(addContact({ name, number }));
    Notify.success('Contact was successfully added :)');
    reset();
    onCloseModal();
  };

  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <FormWrapper>
        <Label>
          <span>Name</span>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={onChangeInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label>
          <span>Phone number</span>
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={onChangeInput}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">
          Add
          {isLoading && (
            <Oval
              height="25"
              width="25"
              radius="9"
              color="#000000"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              visible={true}
              strokeWidth={6}
            />
          )}
        </Button>
      </FormWrapper>
    </form>
  );
}

export default Phonebook;
