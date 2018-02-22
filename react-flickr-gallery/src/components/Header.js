import React from 'react';

import {NavLink} from 'react-router-dom';



const Header = (props) => (
    <div> 
      
        <ul className="nav-list">
            <li className="option"><NavLink className="option" to="/goats">Goats</NavLink></li>
            <li className="option"><NavLink className="option" to="/cats">Cats</NavLink></li>
            <li className="option"><NavLink className="option" to="/dogs" >Dogs</NavLink></li>
            <li className="option"><NavLink className="option" to="/search">Search</NavLink></li>
         </ul>
         
        
      
    </div>
);

export default Header;

//<SearchForm onSearch={props.performSearch} />

//<ImageList data={props.data} loading={props.loading} />