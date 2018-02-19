import React, { Component } from 'react';
import axios from 'axios';
import ImageList from './components/ImageList';
import './css/styles.css';
import apiKey from './config.js';
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Error404 from './components/Error';





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
            <Route 
            path="/" 
            exact 
            render={()=>(
              <ImageList data={this.state.images} loading={this.state.loading} />
            )}>
            </Route>
            <Route  component={Error404}></Route>
          </Switch>
        </div>
        </BrowserRouter>
        

    
        
      </div>
    );
  }
}

export default App;
