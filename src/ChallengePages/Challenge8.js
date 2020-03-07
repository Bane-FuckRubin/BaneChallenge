import Sound from 'react-sound';
import React from 'react';
import Countdown from 'react-countdown-now';
import { Link } from 'react-router-dom';
import Zelda from '../Media/Zelda.jpeg'
import ScaryChoice from './ScaryChoice';
import AreaClear from '../Media/AreaClear.mp3';


const jumble=(letter)=>{
    var myLetter=""+letter;
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var letterPosition = alphabet.indexOf(letter)+4;
    if(alphabet.includes(myLetter)){
    if (letterPosition >=alphabet.length){letterPosition=letterPosition-alphabet.length;}
    if(alphabet[letterPosition]==='undefined'){return 'a'}
    else{
    return alphabet[letterPosition];}}}

export default class Challenge8 extends React.Component 
{

    state={value:'',success:false,finish:false};
    

changeHandler = event => {
  if(event.target.value.length>1)
    this.setState({
      value: this.state.value+jumble(event.target.value.slice(event.target.value.length-1))
    });
    if (event.target.value.length>=25 && event.target.value.toLowerCase()==="abcdefghijklmnopqrstuvwxyz"){
    this.setState({
      success:true
    });}
    else if (event.target.value.length>=25 && event.target.value.toLowerCase()!=="abcdefghijklmnopqrstuvwxyz"){
      this.eraser();  
      this.setState({finish:true});
    }
  }
  eraser = event => {
    this.setState({
      value: ""
    });
  }
  
  


render(){
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if ((completed && this.state.success!==true)||this.state.finish===true) {
      // Render a completed state
      return <Fail />;}
    else if(
        this.state.success===true
      ){
        return <Completionist />;
      }
      else {
      // Render a countdown
      return <div style={{textAlign:'center'}}><span style={{fontSize:'7rem',color:'red',}}>{minutes}:{seconds}</span></div>;
    }
  };

  const Completionist = () => <Link to="/Challenge9" style={{fontSize:'2rem'}}>Continue you legend!</Link>;
  const Fail = () => <ScaryChoice badImage="" goodImage="" sentence=""  destination="/Challenge9"/>;

  
    return(

<div style={{ margin: 'auto',
  width: '50%',
  marginTop:'10rem',
  border: '3px solid grey',
  borderRadius:'10px',
  padding: '10px',
  backgroundColor:'grey'
  }} 
  >
    <img src ={Zelda} alt=""/>
{/* {this.state.success!=true && */}
<Sound
      url={AreaClear}
      playStatus={Sound.status.PLAYING}
      playFromPosition={100 /* in milliseconds */}
    />
{/* } */}
    <h1>Challenge 8. Write the alphabet in order. Press the button to reset if you stuff it up.</h1>
   
   
       
        
        <input style={{fontSize:'3rem',color:'white'}}
        onKeyPress={this.changeHandler} 
          type="text"
        />
        <button style={{fontSize:'4rem'}} onClick={this.eraser}>Clear!</button>

        <h1 style={{maxWidth:'10rem'}}>Answer: {this.state.value}</h1>
        <Countdown date={Date.now() + 16000}   intervalDelay={0}
    precision={3}
    renderer={
     renderer
    }
    >
     
    </Countdown>
    {this.state.success===true && <Sound
      url={AreaClear}
      playStatus={Sound.status.PLAYING}
      playFromPosition={100 /* in milliseconds */}
    />}
</div>
);
}
}