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
      images: [],
      loading: true
    
    };
  } 

  

  componentDidMount() {
    this.performSearch();
    
  }

  performSearch = (photo = 'sunset') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${photo}&per_page=20&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        images: response.data.photos.photo,
        loading: false
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
        <SearchForm onSearch={this.performSearch} />
        <ImageList
         data={this.state.images}
         loading={this.state.loading}
        
        />
        
      </div>
    );
  }
}

export default App;
