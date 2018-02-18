import React from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import SearchForm from './SearchForm';


const Header = (props) => (
    
    <header>
        <SearchForm onSearch={props.performSearch} />
        <ul className="nav-list">
            <li><button  className="option" onClick={()=> props.performSearch('Birds')} >Birds</button></li>
            <li><button  className="option" onClick={()=> props.performSearch('Cats')}>Cats</button></li>
            <li><button  className="option" onClick={()=> props.performSearch('Dogs')}>Dogs</button></li>
        </ul>
    </header>
);

export default Header;