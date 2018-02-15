import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import axios from 'axios';
import ImageList from './components/ImageList';
import './App.css';
import apiKey from './config.js';



class App extends Component {

  constructor() {
    super();
    this.state = {
      images: []
    
    };
  } 

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (photo = 'dogs') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=488079c8066a12300cb5ba7edc88f9e6&tags=${photo}&per_page=20&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        images: response.data.photos.photo
      });
    })
    .catch(error => {
      console.log('Error fetching data', error);
    });

    
  }



  render() {
    console.log(this.state.images);
    return (
      <div className="App">
        <SearchForm />
        <ImageList data={this.state.images} />
        
      </div>
    );
  }
}

export default App;
