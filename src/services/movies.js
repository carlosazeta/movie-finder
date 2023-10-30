const URL_API = 'https://www.omdbapi.com/?apikey='
const API_KEY = 'ce3aaedb'

export const searchMovies = async ({ search }) => {
  if (search === '') return null
  try {
    return fetch(`${URL_API}${API_KEY}&s=${search}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => {
        const movies = data?.Search

        return movies?.map(movie => (
          {
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
          }
        ))
      })
  } catch (error) {
    throw new Error('Error searching movies')
  }
}
