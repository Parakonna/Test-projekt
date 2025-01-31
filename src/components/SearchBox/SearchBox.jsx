import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const selectNameFilter = useSelector(state => state.filter.name);
  const dispatch = useDispatch();

  return (
    <div className={css.searchBox}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        placeholder="Enter keyword to search"
        value={selectNameFilter}
        onChange={event => {
          const action = changeFilter(event.target.value);
          dispatch(action);
        }}
      />
    </div>
  );
};

export default SearchBox;
