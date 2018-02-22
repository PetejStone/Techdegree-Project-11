import React from 'react';

import {NavLink} from 'react-router-dom';



const Header = (props) => (
    <div> 
      
        <ul className="nav-list">
            <li className="option"><NavLink className="option" to="/birds"  onClick={()=> props.performSearch('Birds')} >Birds</NavLink></li>
            <li className="option"><NavLink className="option" to="/cats" onClick={()=> props.performSearch('Cats')}>Cats</NavLink></li>
            <li className="option"><NavLink className="option" to="/dogs" onClick={()=> props.performSearch('Dogs')}>Dogs</NavLink></li>
            <li className="option"><NavLink className="option" to="/search">Search</NavLink></li>
         </ul>
         
        
      
    </div>
);

export default Header;

//<SearchForm onSearch={props.performSearch} />

//<ImageList data={props.data} loading={props.loading} />