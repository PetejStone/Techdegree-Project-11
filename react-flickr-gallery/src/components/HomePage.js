import React from 'react';
import {NavLink} from 'react-router-dom';


const HomePage = (props) => (
    <div>

        <h1>Hi There!</h1>
        <NavLink to="/search" className="home-button" >Click Here To Search For Images!</NavLink>
          
    </div>
);

export default HomePage;