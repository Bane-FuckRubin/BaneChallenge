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
  setTimeout(() =>{
    document.getElementById('div1').style.visibility = "visible";
    },250);  
  setTimeout(() =>{
    document.getElementById('div2').style.visibility = "visible";
    },500); 
  setTimeout(() =>{
      document.getElementById('div3').style.visibility = "visible";
      },750);   
      setTimeout(() =>{
        document.getElementById('div4').style.visibility = "visible";
        },1000); 

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if ((completed && this.state.success!==true)||this.state.finish===true) {
      // Render a completed state
      return <Completionist />;}
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

  const Completionist = () => 
  <div style={{color:'#00FF00', fontSize:'25px'}}>
    <div>PS C:\Users\Bane:~ Eh, shit effort. </div>
    <div style={{fontSize:'2rem',
  webkitTouchCallout: 'none',
  webkitUserSelect: 'none',
  khtmlUserSelect: 'none',
//   -moz-user-select: 'none',
//   -ms-user-select: 'none',
  userSelect: 'none',
}}>PS C:\Users\Bane:~
      <span style={{wordWrap:'break-word'}}>
      Go to localhost:3000/iiilllillllikhkhkkhkhhkhkhkmnmmnnnmnnmnnaeaeaeaaeeaaaaeaqpqpqqpqppqppqppqpqpp to continue

      </span>
    </div>
  </div>


  
    return(

<div style={{backgroundColor:'black', height:'100vh', width:'100vw', position:'absolute',top:0}}>
<div style={{ margin: 'auto',
  width: '60%',
  marginTop:'4rem',
  border: '1px solid grey',
  borderRadius:'10px',
  padding: '10px',
  backgroundColor:'black',
  color:'#00FF00'
  }} 
  >
{/* {this.state.success!=true && */}
<Sound
      url={AreaClear}
      playStatus={Sound.status.PLAYING}
      playFromPosition={100 /* in milliseconds */}
    />
{/* } */}   
    <div style={{color:'#00FF00', fontSize:'25px'}}>
      PS C:\Users\Bane:~ Fine, I'll give you an easy one.
      <div id="div1" style={{visibility:'hidden'}}>PS C:\Users\Bane:~ Type the alphabet in order. Press clear when you stuff it up.</div>
      <div id="div2" style={{visibility:'hidden'}}>PS C:\Users\Bane:~ cd Desktop\Porn\Hardcore\Japanese\Tentacle</div>
      <div id="div3" style={{visibility:'hidden'}}>PS C:\Users\Bane\Desktop\Porn\Bondage\:~</div>
      <div id="div4" style={{visibility:'hidden'}}>
        <input style={{width:'300px', color:'white'}}
          onChange={this.changeHandler} 
            type="text"
          />
        <button style={{fontSize:'1rem'}} onClick={this.eraser}>Clear!</button>
      </div>
    </div>
       
        
      

        <h1 style={{maxWidth:'10rem'}}>Answer: {this.state.value}</h1>
        <Countdown date={Date.now() + 5000}   intervalDelay={0}
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
</div>
);
}
}