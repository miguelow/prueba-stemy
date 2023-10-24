import { getDataFromApi } from '../services/api';
import { useState, useEffect } from 'react';
import CharacterList from './CharacterList';
import Loading from './Extras/Loading';
import ServerError from './Extras/ServerError';

function App() {
  const [serverError, setServerError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState([]);
  const [isSortedByName, setIsSortedByName] = useState(false);

  useEffect(() => {
    getDataFromApi().then((data) => {
      if (data) {
        setCharacters(data);
        setIsLoading(false);
      } else {
        setServerError(true);
      }
    });
  }, []);

  const handleFilters = (data) => {
    if (data.name === 'name') {
      setFilterName(data.value);
    }
    if (data.name === 'order') {
      setIsSortedByName(data.checked);
    }
  };

  const handleReset = () => {
    setFilterName('');
    setIsSortedByName(false);
  };

  const filterCharacthers = () => {
    const filteredCharacters = characters
      .filter((character) => {
        return character.name.toLowerCase().includes(filterName.toLowerCase());
      })
    if (isSortedByName) {
      filteredCharacters.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    }
    return filteredCharacters;
  };

  const renderServerError = () => {
    return serverError === true ? <ServerError /> : null;
  };

  const renderLoading = () => {
    return (!serverError && isLoading) === true ? <Loading /> : null;
  };

  return (
    <>
          <CharacterList
            data={filterCharacthers()}
            handleFilters={handleFilters}
            handleReset={handleReset}
            filterName={filterName}
            filterStatus={filterStatus}
            isLoading={isLoading}
            isSortedByName={isSortedByName}
          />
      {renderServerError()}
      {renderLoading()}
    </>
  );
}

export default App;
