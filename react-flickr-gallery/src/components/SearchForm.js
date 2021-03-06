import React, {Component} from 'react';


class SearchForm extends Component {

    state = {
        searchText: ''
    }

    onSearch = e => {
        this.setState({
            searchText: e.target.value
        })
    }
    //handles the submit
    //search.value retrieved from the 'ref' prop below
    //onSearch = performSearch in App.js... the value the user types 
    //in will then be the new state.
    handleSubmit = e => {
        e.preventDefault();
        let path = `/search/${this.option.value}`;
        this.props.history.push(path);
        e.currentTarget.reset();
        
       
    }

    render() {
        return (

    <div className="searchform">
        <form onSubmit={this.handleSubmit}>
            <input 
            className="searchphoto" 
            onChange={this.onSearch}
            name="search"
            type="search" 
            placeholder="Search for Photos" 
            ref={(input) => this.option = input}
            autoComplete="off"
            />
            <button className="searchbutton">search</button>
           
        </form>
    </div>
        );
    }
}

export default SearchForm;