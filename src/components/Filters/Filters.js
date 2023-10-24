import FilterName from './FilterName';
import FilterAlphabetical from './FilterAlphabetical';
import Reset from '../Extras/Reset';

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FilterName
        handleFilters={props.handleFilters}
        filterName={props.filterName}
      />
      <FilterAlphabetical
        handleFilters={props.handleFilters}
        isSortedByName={props.isSortedByName}
      />
      <Reset handleReset={props.handleReset} />
    </form>
  );
}
export default Filters;
