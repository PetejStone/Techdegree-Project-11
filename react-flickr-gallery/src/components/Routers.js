import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const Router = () => (

    <BrowserRouter>
        <div>
          <Switch>
            <Route 
              path="/" 
              exact 
              render={()=>(
                <HomePage />
              )}>
            </Route>
            <Route path="/search"  render={()=> <Search performSearch={this.performSearch} data={this.state.images} loading={this.state.loading} />}></Route>
            <Route path="/search/dogs"  render={()=> <Dogs  data={this.state.images} loading={this.state.loading} />} ></Route>
            <Route path="/search/cats" render={()=> <Cats data={this.state.images} loading={this.state.loading}/>}></Route>
            <Route path="/search/birds" render={()=> <Birds data={this.state.images} loading={this.state.loading} />}></Route>
            <Route  component={Error404}></Route>
          </Switch>
             
        </div>
        </BrowserRouter>
);