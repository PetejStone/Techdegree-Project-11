import React from 'react';

import './css/styles.css';

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Error404 from './components/Error';

import Header from './components/Header';
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';

const App = (props) => (
//Redirects to 'search' page
//Search form appears when 'search tab' is clicked
//Routes to specified choice or an 'error' page if none exists
//line 25 - 'props.match.params.id' is referring to the option the user types in
      <div className="App">  
        <BrowserRouter>
        <div>
          <Route path= "/" exact render={() => <Redirect to="/search" />} />
          <Route path="/search"  component={SearchForm}></Route>
          <Header performSearch={this.performsSearch} />
          <Switch>  
            <Route exact path="/search" render={ ()=><PhotoContainer option="Sunset"/>}></Route>
            <Route exact path="/search/:id" render={ (props) => <PhotoContainer option={props.match.params.id}/>}></Route>
            <Route path="/dogs"  render={()=> <PhotoContainer option="Dogs" />}></Route>
            <Route path="/cats"  render={()=> <PhotoContainer option="Cats" />}></Route>
            <Route path="/goats"  render={()=> <PhotoContainer option="Goats" />}></Route>
            <Route  component={Error404}></Route>
          </Switch>
           {console.log(props)}
        </div>
        </BrowserRouter>
              
      </div>
    );
  

export default App;
