const getChoosenFromStorage = () => {
  const storedMovies = sessionStorage.getItem('selected');
  if (storedMovies) {
    return JSON.parse(storedMovies);
  }
  return storedMovies;
};

export default getChoosenFromStorage;
