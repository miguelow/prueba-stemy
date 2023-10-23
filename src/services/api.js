const getDataFromApi = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then((data) => {
      return data.results;
    })
    .catch(() => {});
};

export { getDataFromApi };
