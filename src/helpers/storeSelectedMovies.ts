const storeSelectedMovies = (id: number) => {
  const selectedMovies: number[] = [];
  selectedMovies.push(id);
  let storedMovies = sessionStorage.getItem('selected') || null;
  let parsedMovies = storedMovies ? JSON.parse(storedMovies) : [];
  const allStores = [...selectedMovies, ...parsedMovies];
  sessionStorage.setItem('selected', JSON.stringify(allStores));
};

export default storeSelectedMovies;
