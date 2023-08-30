import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Phonebook from 'components/Phonebook';
import ContactsList from 'components/Contacts';
import Filter from 'components/Filter';
import Modal from 'components/Modal';
import { Header, Title1, Title2 } from './App.styled';
import { ReactComponent as AddIcon } from 'icons/Add.svg';
import { CloseIcon } from 'components/Modal/Modal.styled';
import { AddButton } from 'components/IconButton/IconButton.styled';
import { ModalTitle, CloseModalBtn } from 'components/Modal/Modal.styled';

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Header>
        <Title1>Phonebook</Title1>
      </Header>
      <AddButton onClick={toggleModal} aria-label="open modal">
        <AddIcon fill="#fff"></AddIcon>
      </AddButton>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalTitle>Add contact</ModalTitle>
          <Phonebook onCloseModal={toggleModal} />
          <CloseModalBtn type="button" onClick={toggleModal}>
            <CloseIcon />
          </CloseModalBtn>
        </Modal>
      )}

      <Title2>Contacts</Title2>
      <Filter />
      <ContactsList />
    </>
  );
}

export default App;
