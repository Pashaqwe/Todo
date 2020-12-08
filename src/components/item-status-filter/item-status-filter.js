
import React, { Component } from 'react';

import './item-status-filter.scss';

class ItemStatusFilter extends Component {
 
  render(){
    
    return (
      <div className="btn-group"
      onClick={this.props.activeButton}>
        <button type="button"
                className="btn btn-info"
                onClick={this.props.filterAll}
                >All</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={this.props.filterActive}
                >Active</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={this.props.filterDone}
                >Done</button>
      </div>
    );
  };
}


export default ItemStatusFilter;