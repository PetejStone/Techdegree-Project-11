import React from 'react';
import SearchForm from './SearchForm';
import ImageList from './ImageList';


const Search = (props) => (
    <div> 
        <SearchForm onSearch={props.performSearch} />
        <ImageList performSearch={props.performSearch} data={props.data} loading={props.loading}/>  
        {console.log(props.history)}
        </div>
);

export default Search;

//<SearchForm onSearch={props.performSearch} />

//<ImageList data={props.data} loading={props.loading} />