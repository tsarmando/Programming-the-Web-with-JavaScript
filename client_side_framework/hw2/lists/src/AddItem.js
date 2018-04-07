import React, { Component } from 'react';

class AddItem extends Component {

  constructor() {
    super();
    this.state = {
      newItem:{},
      input: ''
    }
  }

  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
      	let updatedItems = this.state.newItem
	updatedItems[this.props.idName] = this.state.input
	this.setState({newItem: updatedItems}, this.props.addItem(this.state.newItem))

      // Implement the rest of this function here!
  }
  handleChange(e){
	this.setState({input: e.target.value})
  }
  
    

  render() {
    var divName = 'add' + this.props.idName;
    return (
      <div className='addItemDiv'>
      <h4>Add {this.props.idName}</h4>
      <form ref='form' onSubmit={this.handleSubmit.bind(this)}>
      <div id={divName} ref={divName}>
        <label>Name</label><br />
        <input type='text' ref='id' onChange ={this.handleChange.bind(this)} value = {this.state.submit}/>
        </div>
        <br />
        <input type='submit' value='Submit' />
        <br />
      </form>
      </div>
    );
  }

}

export default AddItem;
