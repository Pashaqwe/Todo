 
import React, { Component } from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.scss';

class TodoList extends Component{
  
  render(){
    const { todos, onDeleted, onToggleDone , onToggleImportatn}= this.props

    const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    
    return (
      <li key={id} className={item.className}>
        <TodoListItem 
          {...itemProps} 
          zzz={()=>this.props.zzz()}
          onDeleted={()=>onDeleted(id)}
          onToggleImportatn={()=>onToggleImportatn(id)}
          onToggleDone={()=>onToggleDone(id)}
        />
      </li>
    );
  });
  
  return (
      <ul className="list-group todo-list">
        { elements }
      </ul>
    );
  }
};

export default TodoList;