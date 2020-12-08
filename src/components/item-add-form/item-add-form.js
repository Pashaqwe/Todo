import React , {Component} from 'react'

import './item-add-form.scss'

class ItemAddForm extends Component {
  state= {
    label: ''
  }
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { label } = this.state;
    this.setState({ label: '' });
    const cb = this.props.onItemAdded || (() => {});
    cb(label);
  };

render(){
  return(
    <form
      className='item-add-form d-flex'
      onSubmit={this.onSubmit}
    >
    <input
      type='text'
      className='form-control'
      placeholder='What needs to be done'
      value={this.state.label}
      onChange={this.onLabelChange}
    />
    <button type='submit'
      className='btn btn-outline-secondary'
    >Add
    </button>
    </form>
    )
  }
}

export default ItemAddForm