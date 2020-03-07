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
state={value:'',success:false}

changeHandler = event => {
 
  if(event.target.value.toLowerCase().slice(-1) === 'd'){
    this.setState({value:this.state.value+"Not that easy, fuckface. "})}
  else if(event.target.value.toLowerCase().slice(-3) === 'rub')
  {
    this.setState({value:this.state.value+'Your face could scare the shit out of a toilet. '})
  }
  else if(event.target.value.toLowerCase().slice(-4) === 'rubi')
  {
    this.setState({value:this.state.value+'You\'re still trying? I\'m not sure if it\'s funny or sad at this point. '})
  }
  else if(event.target.value.toLowerCase().slice(-3) === 'dav')
  {
    this.setState({value:this.state.value+'They say people get what they deserve. In your case it\'s a participation trophy. '})
  }
  else if(event.target.value.toLowerCase().slice(-11) === 'david rubin')
  {
    this.setState({value:this.state.value+'You really need a hint? Why don\'t you leave it the fuck alone! '})
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
    <div style={{color:'#00FF00', fontSize:'25px'}}>
      <div style={{color:'#00FF00'}}>PS C:\Users\Bane:~ Invoke-item AliFuckedByFlower.gif</div>
      <div style={{textAlign:'center'}}>
        <img src={Tentacle} alt="" style={{height:'400px'}}/>
        </div>
      <div style={{color:'#00FF00'}}>PS C:\Users\Bane:~ You passed... barely. I don't know how you'll find the next challenge but I spend a lot of time at https://tinyurl.com/RubinWeddingVideo</div>
    </div>
  
  
    return(
<div style={{backgroundColor:'black', height:'200vh', width:'100vw', position:'absolute',top:0}}>
<div style={{ margin: 'auto',
  width: '65%',
  marginTop:'2rem',
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
    <div>{this.state.value}</div>
    <div id="div4" style={{visibility:'hidden'}}>
      <input style={{width:'100px', color:'white'}}
        onChange={this.changeHandler} 
          type="text"
        />
    </div>
  </div>
       
        <Countdown date={Date.now() + 30000}   intervalDelay={0}
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