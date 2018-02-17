import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import axios from 'axios';
import ImageList from './components/ImageList';
import './App.css';
import apiKey from './config.js';

import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import Header from './components/Header';
import ReactDOM from 'react-dom';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Birds from './components/Birds';




class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
      loading: true,
      default: 'sunset'
    
    };
  } 

  

  componentDidMount() {
    this.performSearch();
    
  }

  performSearch = (photo = this.state.default) => {
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

  handleRender=(option)=> {
    this.setState({
      default: option
    });
  }

  handleDogs=() => {
    this.setState({
      default: 'dogs'
    });
  }

  handleCats=() => {
    this.setState({
      default: 'cats'
    });
  }


 
 

  render() {
    
    console.log(this.state.images);
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <Header performSearch={this.performSearch}/>
          <Switch>

            <Route path="/Birds" render={()=> <Birds data={this.handleRender} />}>Birds</Route>
            <Route path="/cats" component={Cats}>Cats</Route>
            <Route path="/dogs" component={Dogs}>Dogs</Route>
            <Route></Route>
          </Switch>
          
          </div>
        </BrowserRouter>
      
        <ImageList
         data={this.state.images}
         loading={this.state.loading}
        
        />
        
      </div>
    );
  }
}

export default App;
