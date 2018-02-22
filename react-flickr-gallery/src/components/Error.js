import React from 'react';
import {NavLink} from 'react-router-dom';

const Error404 = (props) => (
 
    <li className='no-image'>
    
    <h2>Error 404</h2>
    <h3>Sorry, that URL extension does not exist. </h3>
    <h4><NavLink className="home-button" to="/search">Search Photos</NavLink></h4>
  </li>
 
);

export default Error404;