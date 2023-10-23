import PropTypes from 'prop-types';
import Filters from './Filters/Filters';
import CharacterCard from './CharacterCard';
import '../stylesheets/components/CharacterList.scss';

function CharacterList(props) {
  const getCharacterList = props.data.map((character) => {
    const { id, name } = character;
    return (
      <li className="CharacterList__list--items" key={id}>
        <CharacterCard
          id={name}
          name={name}
        />
      </li>
    );
  });

  return (
    <main className="CharacterList">
      <h1 className="CharacterList__title">Bienvenido a la biblioteca de pueblo paleta</h1>
      <section className="CharacterList__section">
        <Filters
          handleFilters={props.handleFilters}
          handleReset={props.handleReset}
          filterName={props.filterName}
          isSortedByName={props.isSortedByName}
        />
        {!getCharacterList.length && !props.isLoading ? (
          console.log('no characters found')
        ) : (
          <ul className="CharacterList__list">{getCharacterList}</ul>
        )}
      </section>
    </main>
  );
}

CharacterList.propTypes = {
  data: PropTypes.array.isRequired,
  handleFilters: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterGender: PropTypes.string.isRequired,
  filterStatus: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSortedByName: PropTypes.bool.isRequired,
};

export default CharacterList;
