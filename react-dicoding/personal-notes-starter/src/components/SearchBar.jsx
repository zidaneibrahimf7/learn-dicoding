import React from 'react';

class SearchBar extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      searchKeyword: '',
    };

    this.onSearchKeyword = this.onSearchKeyword.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onSearchKeyword(event) {
    this.setState({ searchKeyword: event.target.value }); 
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.onSearchKeyword(this.state.searchKeyword); 
  }

  render() {
    return (
      <form onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          value={this.state.searchKeyword}
          onChange={this.onSearchKeyword}
          placeholder="Cari catatan..."
        />
      </form>
    );
  }
}

export default SearchBar;
