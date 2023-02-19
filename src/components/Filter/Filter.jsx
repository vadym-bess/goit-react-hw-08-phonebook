import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter.filter);

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <label className={css.formLabel}>
      Find contacts by name
      <input
        className={css.formInput}
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};
