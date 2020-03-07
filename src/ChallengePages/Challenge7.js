import Sound from 'react-sound';
import React from 'react';
import Countdown from 'react-countdown-now';
import { Link } from 'react-router-dom';
import Zelda from '../Media/Zelda.jpeg'
import Hyrule from '../Media/Hyrule.mp3';
import AreaClear from '../Media/AreaClear.mp3';
import Tentacle from '../Media/Tentacle.gif';


export default class Challenge1 extends React.Component 
{
state={value:'',success:false, chosen:0, a:false,b:false,c:false,d:false,e:false,f:false}

choosePic = (num) => {
    let check = true;
    if (num ===1) {check = this.state.a; this.setState({a:true})}
    if (num ===1) {check = this.state.b; this.setState({b:true})}
    if (num ===1) {check = this.state.c; this.setState({c:true})}
    if (num ===1) {check = this.state.d; this.setState({d:true})}
    if (num ===1) {check = this.state.e; this.setState({e:true})}
    if (num ===1) {check = this.state.f; this.setState({f:true})}
    
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
<div style={{backgroundColor:'black', height:'100vh', width:'100vw', position:'absolute',top:0}}>
<div style={{ margin: 'auto',
  width: '60%',
  marginTop:'4rem',
  border: '1px solid grey',
  borderRadius:'10px',
  padding: '10px',
  backgroundColor:'black'
  }} 
  >
{this.state.success!==true &&
<Sound
      url={Hyrule}
      playStatus={Sound.status.PLAYING}
      playFromPosition={100 /* in milliseconds */}
    />
}
  <div style={{color:'#00FF00', fontSize:'25px'}}>
    PS C:\Users\Bane:~ Do you really think you have what it takes to beat me?
    <div id="div1" style={{visibility:'hidden'}}>PS C:\Users\Bane:~ If you're so smart, why don't you enter your name</div>
    <div id="div2" style={{visibility:'hidden'}}>PS C:\Users\Bane:~ cd Desktop\Porn\Hardcore\Japanese\Tentacle</div>
    <div id="div3" style={{visibility:'hidden'}}>PS C:\Users\Bane\Desktop\Porn\Hardcore\Japanese\Tentacle:~</div>
    <div></div>
    <div id="div4" style={{visibility:'hidden'}}>
      <div>1: __ OR __ <button onClick={this.choosePic(1)}>Show me!</button></div>
      <div id="pic1" style={{visibility:'hidden'}}>
      <img  src={Zelda} alt=''/>
      </div>

      <div>1: __ OR __ <button onClick={this.choosePic(1)}>Show me!</button></div>
      {this.state.b===true &&
            <img src={Zelda} alt=''/>
      }

      <div>1: __ OR __ <button onClick={this.choosePic(1)}>Show me!</button></div>
      <img id="pic3" style={{visibility:'hidden'}} src={Zelda} alt=''/>

      <div>1: __ OR __ <button onClick={this.choosePic(1)}>Show me!</button></div>
      <img id="pic4" style={{visibility:'hidden'}} src={Zelda} alt=''/>

      <div>1: __ OR __ <button onClick={this.choosePic(1)}>Show me!</button></div>
      <img id="pic5" style={{visibility:'hidden'}} src={Zelda} alt=''/>

      <div>1: __ OR __ <button onClick={this.choosePic(1)}>Show me!</button></div>
      <img id="pic6" style={{visibility:'hidden'}} src={Zelda} alt=''/>
    </div>
  </div>
       
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