import React from 'react';
import SearchForm from './SearchForm';
import {NavLink} from 'react-router-dom';
import ImageList from './ImageList';


const Search = (props) => (
    <div> 
        <SearchForm onSearch={props.performSearch} />
        <ul className="nav-list">
            <li className="option"><NavLink className="option" to="/search/birds"  onClick={()=> props.performSearch('Birds')} >Birds</NavLink></li>
            <li className="option"><NavLink className="option" to="/search/cats" onClick={()=> props.performSearch('Cats')}>Cats</NavLink></li>
            <li className="option"><NavLink className="option" to="/search/dogs" onClick={()=> props.performSearch('Dogs')}>Dogs</NavLink></li>
        </ul>
        <ImageList data={props.data} loading={props.loading} />
    </div>
);

export default Search;

//<SearchForm onSearch={props.performSearch} />

//<ImageList data={props.data} loading={props.loading} />