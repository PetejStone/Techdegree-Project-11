import React from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import SearchForm from './SearchForm';


const Header = (props) => (
    
    <header>
        <SearchForm onSearch={props.performSearch} />
        <ul className="nav-list">
            <li className="active option"><NavLink to="/birds" className="option" onClick={()=> props.performSearch('Birds')} >Birds</NavLink></li>
            <li className="active option"><NavLink to="/cats" className="option" onClick={()=> props.performSearch('Cats')}>Cats</NavLink></li>
            <li className="active option"><NavLink to="/dogs" className="option" onClick={()=> props.performSearch('Dogs')}>Dogs</NavLink></li>
        </ul>
    </header>
);

export default Header;