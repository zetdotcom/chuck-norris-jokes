import React, { Component } from 'react';
import axios from 'axios';
import Button from './components/Button';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import JokeList from './components/JokeList';
import GetRandomJokeRow from './components/GetRandomJokeRow';

import * as jokeApi from './api/jokeApi';

import './App.css';

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

    this.setState({ jokes: [ randomJoke ] });
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
    const { categories } = this.state;
    console.log(categories);
    return (
      <div className="App">
        <Header />
        <GetRandomJokeRow
          getRandomJoke={this.getRandomJoke}
          categories={this.state.categories}
          selectedCategory={this.state.selectedCategory}
          handleCategoryChange={this.handleCategoryChange}
        />

        <div>
          or search:
          <SearchBar
            value={this.state.searchTerm}
            handleSearchTermChange={this.handleSearchTermChange}
            getSearchedJokes={this.getSearchedJokes}
          />
        </div>
        <JokeList totalJokes={this.state.totalJokes} jokes={this.state.jokes} />
      </div>
    );
  }
}

export default App;