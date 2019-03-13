import axios from 'axios';

export function fetchJokeCategories() {
  return axios
    .get('https://api.chucknorris.io/jokes/categories')
    .then(response => response.data)
    .catch(error => console.log(error));
}

export function fetchRandomJoke(categoryID) {
  const params = categoryID !== 'all' ? {
    params: {
      category: categoryID
    }
  } : '';
  return axios
    .get('https://api.chucknorris.io/jokes/random', params )
    .then(response => response.data)
    .catch(error => console.log(error));
}

export function fetchSearchedJokes(searchTerm) {
  return axios
    .get(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`)
    .then(response => response.data)
    .catch(error => console.log(error));
}