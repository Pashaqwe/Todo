
import React, { Component } from 'react';

import './todo-list-item.scss';

class TodoListItem extends Component {

  render(){
    const { label, onDeleted,onToggleDone,onToggleImportatn, important, done} = this.props
    let classNames = 'todo-list-item'

    if(done){
        classNames += ' done'
    }

    if(important){
        classNames += ' important' 
    }
 
    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={()=>onToggleDone(this.props.id)}>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={()=>onToggleImportatn(this.props.id)}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };
}

export default TodoListItem;