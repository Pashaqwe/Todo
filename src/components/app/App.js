import React , {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form'

import '../../index.scss';

class App extends Component  {
  maxId= 0
  state = {
  todoData:[
    this.createTodoItem('Drink Coffe'),
    this.createTodoItem('Make Awesome App'),
    this.createTodoItem('Have a lunch'),
  ]
}

onSearch= (e)=>{
  this.setState(({todoData})=>{
    let newArray=todoData
    newArray.map((item)=>{
      item.className='list-group-item'
        if(item.label.toLowerCase().includes(e.target.value.toLowerCase()) === false){
          item.className +=' hide'
      }
        if(e.target.value.length===0){
          item.className='list-group-item'
      }
    return newArray
  })
  return{
    todoData: newArray
    }
  })
}

createTodoItem(label){
  return {
    label: label,
    important:false,
    done:false,
    id: this.maxId++,
    className:'list-group-item'
  }
}

deleteItem = (id)=>{
  this.setState(({todoData})=>{
    const idx = todoData.findIndex((el)=>el.id === id)

    const newArray= [...todoData.slice(0, idx), ...todoData.slice(idx+1)]
    return{
      todoData:newArray
    }
  })
}

addItem=(text)=>{
  const newItem = this.createTodoItem(text)
    this.setState(({todoData})=>{
      const newArray=[...todoData, newItem]
      return{
        todoData:newArray
      }
  })
}

toggleProperty(arr, id ,propName){
  const idx = arr.findIndex((el)=>el.id === id)
  const oldItem = arr[idx]
  const newItem= {...oldItem, [propName]:!oldItem[propName]}
  return[...arr.slice(0, idx), newItem, ...arr.slice(idx+1)]
}

onToggleImportatn= (id)=>{
  this.setState(({todoData})=>{
    return{
      todoData: this.toggleProperty(todoData,id,'important')
    }
  })
}

onToggleDone= (id)=>{
  this.setState(({todoData})=>{
    return{
      todoData: this.toggleProperty(todoData,id,'done')
    }
  })
}


filterActive = ()=>{
  this.setState(({todoData})=>{
    let newArr= todoData
    newArr.map(item=>{
      item.className ='list-group-item'
      if(item.done){
        item.className += ' hide'
      }
      return newArr
    })
    return{todoData:newArr}
  })
}

filterDone = ()=>{
  this.setState(({todoData})=>{
    let newArr= todoData
    newArr.map(item=>{
      item.className ='list-group-item'
      if(!item.done){
        item.className += ' hide'
      }
      return newArr
    })
    return{todoData:newArr}
  }) 
}  

filterAll = ()=>{
  this.setState(({todoData})=>{
    let newArr= todoData
      newArr.map(item=>{
          item.className ='list-group-item'
        return newArr
      })
    return{todoData:newArr}
  })  
}

activeButton=(e)=>{
  const elements=document.querySelector('.btn-info')
  elements.className="btn btn-outline-secondary"
  e.target.className="btn btn-info"
}

render(){ 
  const doneCounter = this.state.todoData.filter((el)=>el.done).length
  const todoCounter = this.state.todoData.length- doneCounter
  return (
      <div className="todo-app">
        <AppHeader 
          toDo={todoCounter} 
          done={doneCounter} 
          />
        <div className="top-panel d-flex">
        <SearchPanel 
          onSearch={this.onSearch}/>
        <ItemStatusFilter 
          filterActive={this.filterActive}
          filterDone={this.filterDone}
          filterAll={this.filterAll}
          activeButton={this.activeButton}
          />
        </div>
        <TodoList 
          onToggleImportatn={this.onToggleImportatn}
          onToggleDone={this.onToggleDone}
          todos={this.state.todoData} 
          onDeleted={this.deleteItem}
        />
        <ItemAddForm
          onItemAdded={this.addItem}
        />
      </div>
    )
  }
}

export default App