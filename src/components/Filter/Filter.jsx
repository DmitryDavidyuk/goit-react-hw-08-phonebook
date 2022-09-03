import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../Redux/contacts';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);
  return (
    <label>
      Пошук контактів за іменами
      <input
        type="text"
        name="filter"
        value={value}
        onChange={e =>
          dispatch(changeFilter(e.currentTarget.value.toLowerCase()))
        }
      />
    </label>
  );
};

export default Filter;
