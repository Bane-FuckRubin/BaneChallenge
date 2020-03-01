// Dark knight themed text
import React from "react";
import { Link } from 'react-router-dom';
import Weird from './Media/Weird.gif';
import Davidphoto from './Media/Davidphoto.jpg';
import WeirdMario from './Media/WeirdMario.png';
import BrawlTheme from './Media/BrawlTheme.mp3';


class LandingPage extends React.Component {
  state={pressed:false}

  handlePress = (event) =>{
    this.setState({pressed:true});
    let audio = new Audio(BrawlTheme)
    audio.play();
    }


render(){
  return (
    <div style={{textAlign:'center',padding:'4rem'}}>
    {this.state.pressed===false &&<div style={{textAlign:'center'}}> <span style={{marginLeft:'30%',marginTop:'10rem',marginRight:'30%',display:'flex',alignSelf:'center'
}}>
    <button style={{width:'20rem',height:'20rem',fontSize:'3rem'}} onClick={this.handlePress}>Press to start your adventure with a sxc tune!</button>
    <img  style={{width:'20rem',height:'20rem'}}src={Davidphoto} alt=""></img>
    </span></div>
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
