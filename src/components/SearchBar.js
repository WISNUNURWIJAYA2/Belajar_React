import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchQuery: ''
    };
  }

  // Handle search input change
  onSearchChange = (event) => {
    const query = event.target.value;
    
    this.setState({ searchQuery: query });
    
    // Call parent function to filter notes
    this.props.onSearch(query);
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Cari catatan..."
          value={searchQuery}
          onChange={this.onSearchChange}
          className="search-input"
        />
      </div>
    );
  }
}

export default SearchBar;