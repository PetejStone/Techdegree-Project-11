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

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.search.value);
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
            ref={(input) => this.search = input}
            autoComplete="off"
            />
            <button className="searchbutton">search</button>
           
        </form>
    </div>
        );
    }
}

export default SearchForm;