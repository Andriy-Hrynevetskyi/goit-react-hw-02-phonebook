import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <FilterLabel>
      Filter
      <FilterInput type="text" value={filter} onChange={onChange}></FilterInput>
    </FilterLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
