import React, { Component } from 'react';

class AddList extends Component {
	constructor(props){
		super(props)
	this.state = {input: '',submit: ''}
//	this.handleChange = this.handleChange.bind(this)
	}
	
	
  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
	this.setState({submit: this.state.input}, () => {console.log(this.state.submit); this.props.addList(this.state.submit)})
      // Implement the rest of this function here!
  }
  handleChange(e){
	  this.setState({input: e.target.value})
  }

  render() {
    return (
      <div id="addListDiv">
      <form onSubmit={this.handleSubmit.bind(this)} >
      <div id='addList'>
      <label>What will be on your next list?&nbsp;
      <input type='text' ref='id' id='newID' value = {this.state.input} onChange ={this.handleChange.bind(this)}></input>
      </label>
      </div><br />
      <input type='submit' value='Create List' />
      </form>
      </div>
    );
  }
}

export default AddList;
//value = {this.state.input}  onChange = {this.handleChange}//

