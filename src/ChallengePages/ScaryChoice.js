import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

export default class ScaryChoice extends Component{

/*
Takes 3 props:
1: img
2: sentence          explaining two options phrased as 'a or b'
3: destination       reference link to next page, forma as '/myDestination'

*/

state={pressed:false,badImage:false,goodImage:false,val:0};


 
buttonHandler =event=> {

  this.setState({
    pressed:true
  });
  
}



render(){


return(<div >
<button onClick={this.buttonHandler.bind(this.props.weight)}><h2>Click here to reveal a picture and move on, it may be:  {this.props.sentence}</h2></button>
<h1> </h1>
{this.state.pressed=== true && <img style={{width:'30rem',height:'30rem'}}src={this.props.img} alt="Dammit"/>}
<h1> </h1>
{this.state.pressed===true && <Link to={this.props.destination} style={{fontSize:'2rem'}}>Click here to continue.</Link>}

</div>);
}
}

