import {
  List,
  TotalCount,
  ListContainer,
  InfoContainer,
} from './ContactsList.styled';
import { selectContacts, selectFilter } from 'redux/selectors/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { useEffect, useMemo } from 'react';
import { fetchContacts } from 'redux/operations/contactOperations';
import Filter from 'components/Filter/Filter';

function ContactsList() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const filterString = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = useMemo(() => {
    const normalizedFilter = filterString.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filterString]);

  const contactsCount = contacts.length;
  const filteredContactsCount = getFilteredContacts.length;

  return (
    <>
      <Filter />
      <ListContainer>
        <InfoContainer>
          <TotalCount>quantity: {contacts && contactsCount}</TotalCount>
          {filterString && (
            <TotalCount>Found contacts: {filteredContactsCount}</TotalCount>
          )}
        </InfoContainer>

        <List>
          {contacts &&
            getFilteredContacts.map(contact => {
              return <Contact key={contact.id} {...contact} />;
            })}
        </List>
      </ListContainer>
    </>
  );
}

export default ContactsList;
