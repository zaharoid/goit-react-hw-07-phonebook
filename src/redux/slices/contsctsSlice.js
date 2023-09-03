import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from 'redux/operations/contactOperations';
const { createSlice } = require('@reduxjs/toolkit');

const onRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const onPending = state => {
  state.isLoading = true;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchContacts.pending, onPending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, onRejected)
      .addCase(deleteContact.pending, onPending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(({ id }) => id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, onRejected)
      .addCase(addContact.pending, onPending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, action.payload];
      })
      .addCase(addContact.rejected, onRejected)
      .addCase(editContact.pending, onPending)
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const contactIndex = state.items.findIndex(
          contact => contact.id === action.payload.id
        );

        state.items.splice(contactIndex, 1, action.payload);
      })
      .addCase(editContact.rejected, onRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
