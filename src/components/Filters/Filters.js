import PropTypes from 'prop-types';
import FilterName from './FilterName';
import FilterAlphabet from './FilterSort';
import Reset from '../Extras/Reset';
import '../../stylesheets/components/Filters.scss';

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className="Filters" onSubmit={handleSubmit}>
      <FilterName
        handleFilters={props.handleFilters}
        filterName={props.filterName}
      />
      <FilterAlphabet
        handleFilters={props.handleFilters}
        isSortedByName={props.isSortedByName}
      />
      <Reset handleReset={props.handleReset} />
    </form>
  );
}

Filters.propTypes = {
  handleFilters: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  isSortedByName: PropTypes.bool.isRequired,
};

export default Filters;
