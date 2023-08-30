import { List, TotalCount } from './ContactsList.styled';
import { getContacts, getFilter } from 'redux/selectors/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations/contactOperations';

function ContactsList() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filterString = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    const normalizedFilter = filterString.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();
  const contactsCount = contacts.length;
  const filteredContactsCount = filteredContacts.length;

  return (
    <>
      <TotalCount>
        Total number of contacts: {contacts && contactsCount}
      </TotalCount>
      {filterString && (
        <TotalCount>Found contacts: {filteredContactsCount}</TotalCount>
      )}

      <List>
        {contacts &&
          filteredContacts.map(({ id, name, number }) => {
            return <Contact key={id} id={id} name={name} number={number} />;
          })}
      </List>
    </>
  );
}

export default ContactsList;
