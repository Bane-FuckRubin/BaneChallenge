import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

export default class ScaryChoice extends Component{
/*
Takes 4 props:
1: badImage    
2: goodImage
3: sentence          explaining two options phrased as 'a or b'
4: destination       reference link to next page, forma as '/myDestination'
*/

state={pressed:false,badImage:false,goodImage:false};

buttonHandler = event => {
    this.setState({
      pressed:true
    });
    var randNo=Math.ceil(Math.random() * 10);
    if(randNo>4){ this.setState({
        badImage:true
      });}
    else if(randNo<=4){
        this.setState({
            goodImage:true
      });
    }
  }


render(){
return(<div >
<button onClick={this.buttonHandler}><h2>Click here to reveal a picture and move on, you can choose between:  {this.props.sentence}</h2></button>
<h1> </h1>
{this.state.badImage===true && <img style={{width:'30rem',height:'30rem'}}src={this.props.badImage} alt="Dammit"/>}
{this.state.goodImage===true && <img style={{width:'30rem',height:'30rem'}}src={this.props.goodImage} alt="Awesome"/>}
<h1> </h1>
{this.state.pressed===true && <Link to={this.props.destination} style={{fontSize:'2rem'}}>Click here to continue{this.state.goodImage.toString()}, bad:{this.state.badImage.toString()}</Link>}

</div>);
}
}

