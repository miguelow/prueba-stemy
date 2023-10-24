import Filters from './Filters/Filters';
import CharacterCard from './CharacterCard';

function CharacterList(props) {
  const getCharacterList = props.data.map((character) => {
    const { id, name } = character;
    return (
        <CharacterCard
          id={name}
          name={name}
        />
    );
  });

  return (
    <main>
      <h1>Bienvenido a la biblioteca de pueblo paleta</h1>
      <section>
        <Filters
          handleFilters={props.handleFilters}
          handleReset={props.handleReset}
          filterName={props.filterName}
          isSortedByName={props.isSortedByName}
        />
        {!getCharacterList.length && !props.isLoading ? (
          <p>Pokemon no encontrado, prueba con otro nombre</p>
        ) : (
          <ul>{getCharacterList}</ul>
        )}
      </section>
    </main>
  );
}

export default CharacterList;
