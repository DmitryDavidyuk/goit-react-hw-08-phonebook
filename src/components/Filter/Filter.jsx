import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../Redux/filter';
import { getFilterContacts } from '../../Redux/filter';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterContacts);
  return (
    <label>
      Пошук контактів за іменами
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(setFilter(e.currentTarget.value.toLowerCase()))}
      />
    </label>
  );
};

export default Filter;
