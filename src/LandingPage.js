// Dark knight themed text
import React from "react";
import { Link } from 'react-router-dom';
import Weird from './Media/Weird.gif';
import Bane from './Media/Bane.jpg';
import BaneTheme from './Media/BaneTheme.mp3';
import WeirdMario from './Media/WeirdMario.png';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    let audio = new Audio(BaneTheme)
    audio.play();
  }

  state={pressed:false}
  
  handlePress = (event) =>{
    this.setState({pressed:true});
    }

render(){
  return (
    
    <div style={{textAlign:'center'}}>
      {this.state.pressed===false &&
        <img onClick={this.handlePress} style={{width:'100vw',height:'100vh', position:'absolute', left:0, top: 0}}src={Bane} alt="Get fucked Rubin"></img>
      }
    {this.state.pressed===true &&
      <div>
        <h3 style={{fontSize:'6rem',paddingTop:'2rem'}}>WELCOME DAVID. I AM SCARED. HELP. Scroll down to start.</h3>
        <h3 style={{fontSize:'6rem',paddingTop:'2rem',paddingBottom:'100rem'}}>↓</h3>   
        <h1>You are getting married. You need to learn how to overcome your greatest fears.</h1>
        <h1>Please equip your hat item (in the bag) and scroll down.</h1>
        <img src={Weird} alt=""/>
        <h3 style={{fontSize:'6rem',paddingTop:'2rem',paddingBottom:'100rem'}}>↓</h3>   
        <h1 style={{fontSize:'30rem'}}>Scroll Down and Down and Down and Down and Down and Down and Down and Down and Down and Down and Down and Down and Down and Down and Down</h1>
        <h3 style={{fontSize:'6rem'}}>There are monsters ahead. Are you sure you want to go continue?</h3>
        <h3 style={{fontSize:'6rem',paddingTop:'2rem',paddingBottom:'100rem'}}>↓</h3> 
        <h3 style={{fontSize:'6rem'}}>There are a series of 10 challenges. Each has a timer. Complete the challenge in time otherwise there are consequences. </h3>
        <h3 style={{fontSize:'3rem'}}>If you are ready (which youll probably never be lol) click on the Mario player to start.</h3>
      <Link to='/Challenge1'><img onClick={<sendMessage message="this is a test"/>} src={WeirdMario} style={{maxHeight:'20rem',maxWidth:'20rem'}} alt=""/> </Link>
      </div>}
    </div>
  );
}
}

export default LandingPage;
