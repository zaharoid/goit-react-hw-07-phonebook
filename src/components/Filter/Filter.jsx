import React from 'react';
import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/slices/filterSlice';
import { getFilter } from 'redux/selectors/selectors';

function Filter() {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <Label>
      <Input
        type="text"
        placeholder="Find contact"
        value={filter}
        onChange={onChangeFilter}
      />
    </Label>
  );
}

export default Filter;
