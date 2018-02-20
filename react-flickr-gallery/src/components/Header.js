import React from 'react';
import SearchForm from './SearchForm';
import {NavLink} from 'react-router-dom';


const Header = (props) => (
    
    <header>
        <SearchForm onSearch={props.performSearch} />
        <ul className="nav-list">
            <li className="option"><NavLink className="option" to="/birds"  onClick={()=> props.performSearch('Birds')} >Birds</NavLink></li>
            <li className="option"><NavLink className="option" to="/cats" onClick={()=> props.performSearch('Cats')}>Cats</NavLink></li>
            <li className="option"><NavLink className="option" to="dogs" onClick={()=> props.performSearch('Dogs')}>Dogs</NavLink></li>
        </ul>
    </header>
);

export default Header;