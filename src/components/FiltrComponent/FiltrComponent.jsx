import { PropTypes } from 'prop-types';
import { SectionList, FormLabel } from './FiltrComponent.styled';
export const Filter = ({ value, onFilterChange }) => {
  return (
    <SectionList>
      <FormLabel htmlFor="text">Find contacts by name</FormLabel>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
      />
    </SectionList>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
