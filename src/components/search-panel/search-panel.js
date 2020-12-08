 
import React, {Component} from 'react';

import './search-panel.scss';

class SearchPanel extends Component {

  

 render(){
  return (
    <input  onChange={this.props.onSearch}
            type="search"
            className="form-control search-input"
            placeholder="type to search" />
  );
 }
};

export default SearchPanel;