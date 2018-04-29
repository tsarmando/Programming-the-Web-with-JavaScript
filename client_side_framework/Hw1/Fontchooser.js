class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state = {
		hidden: true,
		size: Number(this.props.size),
		color: this.props.size > Number(this.props.min) && this.props.size < Number(this.props.max) ? "black": "red",
        check: this.props.bold == 'false'? false: true
			}
    }
    handleDoubleClick(){
        this.setState({size: Number(this.props.size)})
        this.setState({check: this.props.bold == 'false'? false: true})

    }
    handleClick(){
   	this.setState({hidden: !this.state.hidden}) 
    }
	 increment(){
		if(this.state.size<Number(this.props.max))
            this.setState({size: this.state.size +1});
        if(this.state.size == Number(this.props.max)) 
            this.setState({color: "red"});
        else 
            this.setState({color: "black"})
		
	}
	decrement(){
		if(this.state.size>Number(this.props.min))	
            this.setState({size: this.state.size -1});
		if(this.state.size == Number(this.props.min)) 
            this.setState({color: "red"});
		else 
            this.setState({color: "black"})


	}
    checked(){
	this.setState({check: !this.state.check})
    } 
    
    render() {
	    var hide = this.state.hidden ? true :false
	    var bold = this.state.check ? 'bold':'normal';
		var color = this.state.color;
		var size = this.state.size;
		var check = this.state.check;
		

	return(
	       <div>
	       <input type="checkbox" id="boldCheckbox" checked = {check} onChange = {this.checked.bind(this)} hidden={hide}/>
		   <button id="decreaseButton"  onClick = {this.decrement.bind(this)} hidden={hide}>-</button>
	       <span id="fontSizeSpan" onDoubleClick = {this.handleDoubleClick.bind(this)}style = {{color: color}}hidden={hide}>{this.state.size}</span>
	       <button id="increaseButton"  onClick = {this.increment.bind(this)} hidden={hide}>+</button>
	       <span  style = {{fontSize: this.state.size, color: color, fontWeight: bold}} onDoubleClick = {this.handleDoubleClick.bind(this)} onClick = {this.handleClick.bind(this)} id="textSpan" >{this.props.text}</span>
	       </div>
	);
    }
}


/*
	React.render(
	  <div>
	    <FontChooser min='4' max='40'  text='Fun with React!' bold='false'/>
	   </div>,
	document.getElementById('container'));
*/
	//do some stuff??

