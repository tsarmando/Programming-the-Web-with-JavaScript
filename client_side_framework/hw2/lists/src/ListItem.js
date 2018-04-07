import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props) {
	super(props);
	this.state = {count: 0, color: 'black' };
    }

    handleClick() {
	this.setState({count: this.state.count+1}, () => {(this.state.count %2 == 1)? this.setState({color: 'gray'}): this.setState({color: 'black'})})  
    }

  render() {
    var item = this.props.item;
    var name = item.name;

    return (
	    <span onClick={this.handleClick.bind(this)} style={{color: this.state.color}}>
        <strong>{name}</strong>
      </span>
    );

  }

}
export default ListItem;

