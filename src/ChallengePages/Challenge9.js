import Sound from 'react-sound';
import React from 'react';
import Countdown from 'react-countdown-now';
import { Link } from 'react-router-dom';
import Zelda from '../Media/Zelda.jpeg'
import Hyrule from '../Media/Hyrule.mp3';
import AreaClear from '../Media/AreaClear.mp3';
import Tentacle from '../Media/Tentacle.gif';
import Doggo from '../Media/cuteDoggo.gif';
import Hanger from '../Media/hanger.jpg';
import Apple from '../Media/apple.gif';
import heath from '../Media/heath.gif';
import Reis from '../Media/cuteReis.mp4';
// import heath from '../Media/heath.gif';
// import heath from '../Media/heath.gif';


export default class Challenge1 extends React.Component 
{
state={value:'',success:false}

choosePic = (num) => {
    let check = true;
    if (num ===1) {check = this.state.a; this.setState({a:true})}
    else if (num ===2) {check = this.state.b; this.setState({b:true})}
    else if (num ===3) {check = this.state.c; this.setState({c:true})}
    if (num ===4) {check = this.state.d; this.setState({d:true})}
    if (num ===5) {check = this.state.e; this.setState({e:true})}
    if (num ===6) {check = this.state.f; this.setState({f:true})}
    
    if(check === false){
        if (this.state.chosen === 2){
            this.setState({success:true})
        } else {
            this.setState({chosen:this.state.chosen+1})
        }
    }
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
    if (completed) {
      // Render a completed state
      return <Completionist />;
   
      
    } else {
      // Render a countdown
      return <div style={{textAlign:'center'}}><span style={{fontSize:'7rem',color:'red',}}>{minutes}:{seconds}</span></div>;
    }
  };

  const Completionist = () => 
    <div style={{color:'00FF00', fontSize:'25px'}}>
      <div style={{color:'00FF00'}}>PS C:\Users\Bane:~ Invoke-item AliFuckedByFlower.gif</div>
      <div>
        <img src={Tentacle} alt="" style={{height:'400px', textAlign:'center'}}/>
        </div>
      <Link to="/Challenge2">PS C:\Users\Bane:~ You passed... barely</Link>;
    </div>
  
  
    return(
<div style={{backgroundColor:'black', height:'300vh', width:'100vw', position:'absolute',top:0}}>
<div style={{ margin: 'auto',
  width: '60%',
  marginTop:'4rem',
  border: '1px solid grey',
  borderRadius:'10px',
  padding: '10px',
  backgroundColor:'black'
  }} 
  >
{/* {this.state.success!==true &&
<Sound
      url={Hyrule}
      playStatus={Sound.status.PLAYING}
      playFromPosition={100 /* in milliseconds */}
    />
} */}
  <div style={{color:'#00FF00', fontSize:'25px'}}>
    PS C:\Users\Bane:~ You've made it to the final challenge. I didn't think you would.
    <div id="div1" style={{visibility:'hidden'}}>PS C:\Users\Bane:~ Each 50/50 will show you 1 picture and they can go either way. </div>
    <div id="div2" style={{visibility:'hidden'}}>PS C:\Users\Bane:~ Chose carefully.</div>
    <div id="div3" style={{visibility:'hidden'}}>PS C:\Users\Bane:~ You need 3 to pass.</div>
    <br/>
    <div id="div4" style={{visibility:'hidden'}}>
      
    <div>1: Cute doggo smiling OR Man eating worms <button onClick={() => this.choosePic(1)}>Show me!</button></div>
      {this.state.a===true &&
            <img src={Doggo} alt=''/>
      }
    <div>1: __ OR The death scene from Up <button onClick={() => this.choosePic(2)}>Show me!</button></div>
      {this.state.b===true &&
            <img src={Zelda} alt=''/>
      }
    <div>1: __ OR A clothes hanger inside a penis <button onClick={() => this.choosePic(3)}>Show me!</button></div>
      {this.state.c===true &&
            <img src={Hanger} alt=''/>
      }
    <div>1: Adorable Adam Reisner OR The most disgusting thing you could imagine <button onClick={() => this.choosePic(4)}>Show me!</button></div>
      {this.state.d===true &&
            <Video src={Reis} alt=''/>
      }
    <div>1:  OR Woman shitting out an apple <button onClick={() => this.choosePic(5)}>Show me!</button></div>
      {this.state.e===true &&
            <img src={Apple} alt=''/>
      }
    <div>1: Heath Ledger's Joker OR Jared Leto's Joker <button onClick={() => this.choosePic(6)}>Show me!</button></div>
      {this.state.f===true &&
            <img src={heath} alt=''/>
      }
    </div>

  </div>
       
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

class Video extends React.Component {
    render() {
      return (
        <div>
          <video controls src={this.props.src}/>
        </div>
      );
    }
  }
