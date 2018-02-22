import React, { Component } from 'react';
import axios from 'axios';
import './css/styles.css';
import apiKey from './config.js';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Error404 from './components/Error';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Birds from './components/Birds';
import Search from './components/Search';
import HomePage from './components/HomePage';
import ImageList from './components/ImageList';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
      loading: true,
      default: 'sunset'
    
    };
    this.performSearch = this.performSearch.bind(this);
  } 

  
//calls this function before it renders
  componentDidMount() {
    this.performSearch();
  
  }

  newPhoto() {
    let photo = window.location.pathname.split("/")[2];
    return photo;
  }

  performSearch = (photo = this.state.default) => {
//interpolated variables retrieved from the array thru React in Dev Tools
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
      
      
        <BrowserRouter>
        <div>
        <Header performSearch={this.performsSearch} />
          <Switch>
            <Route path= "/" exact render={() => <Redirect to="/search" />} />
            <Route path="/search"  component={SearchForm}></Route>
            <Route path="/dogs"  render={()=> <Dogs  data={this.state.images} loading={this.state.loading} />} ></Route>
            <Route path="/cats" render={()=> <Cats data={this.state.images} loading={this.state.loading}/>}></Route>
            <Route path="/birds" render={()=> <Birds data={this.state.images} loading={this.state.loading} />}></Route>
            <Route path="/search/:id" component={ImageList}></Route>
            <Route  component={Error404}></Route>
          </Switch>
           
        </div>
        </BrowserRouter>
        

    
        
      </div>
    );
  }
}
// ^  rendered home page first, if none available or URL doesn't exist, Error 404 page renders
export default App;
