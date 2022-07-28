import React, { Component } from 'react';


class SearchBar extends Component {
  render() {
    return (
      <form>
        <div className='SearchBar-roundBox'>
            <input
              // onChange={event => this.setState({term: event.target.value})}
              // type='text' className='form-control' placeholder='City' 
              // value={this.state.term}
            />
            <div>
              <button type='button'>
                <span>검색</span>
              </button>
            </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;