import React, { Component, Suspense } from 'react';
import Header from './components/Header/Header';
import GetSearchedJokeRow from './components/GetSearchedJokeRow';
// import JokeList from './components/JokeList/JokeList';

import GetRandomJokeRow from './components/GetRandomJokeRow';

import * as jokeApi from './api/jokeApi';

import './App.scss';
const JokeList = React.lazy(() => import('./components/JokeList/JokeList'));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      jokes: [],
      searchTerm: null,
      selectedCategory: null,
    };

    this.getSearchedJokes = this.getSearchedJokes.bind(this);
    this.getRandomJoke = this.getRandomJoke.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  async componentDidMount() {
    const categories = await jokeApi.fetchJokeCategories();
    this.setState({ categories });

    this.getRandomJoke();
  }

  async getRandomJoke() {
    const { selectedCategory } = this.state;
    const randomJoke = await jokeApi.fetchRandomJoke(selectedCategory);

    this.setState({ jokes: [ randomJoke ], totalJokes: 0 });
  }

  async getSearchedJokes() {
    const { searchTerm } = this.state;
    if (searchTerm) {
      const jokes = await jokeApi.fetchSearchedJokes(searchTerm);
      this.setState({ jokes: jokes.result, totalJokes: jokes.total });
    } else {
      this.getRandomJoke();
    }
  }

  handleCategoryChange(event) {
    this.setState({ selectedCategory: event.target.value });
  }

  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { categories, selectedCategory, searchTerm, totalJokes, jokes } = this.state;
    return (
      <div className="App">
        <Header />
        <GetRandomJokeRow
          getRandomJoke={this.getRandomJoke}
          categories={categories}
          selectedCategory={selectedCategory}
          handleCategoryChange={this.handleCategoryChange}
        />
        <GetSearchedJokeRow
          value={searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
          getSearchedJokes={this.getSearchedJokes}
        />
        <Suspense fallback={<div>Chuck Norris is coming...</div>}>
          <JokeList totalJokes={totalJokes} jokes={jokes} />
        </Suspense>
      </div>
    );
  }
}

export default App;
