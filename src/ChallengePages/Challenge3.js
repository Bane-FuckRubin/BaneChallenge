import Sound from 'react-sound';
import React from 'react';
import Countdown from 'react-countdown-now';
import { Link } from 'react-router-dom';
import Pokemon1 from '../Media/Pokemon1.jpg';
import DavidWin from '../Media/Pokemon2.jpg'
import DavidLose from '../Media/Pokemon3.jpg';
import Delayed from '../Delayed';


export default class Challenge3 extends React.Component 
{
state={value:false,gameState:1}


changeHandler = event => {
if (event.target.value.length>=5 && event.target.value.toLowerCase()==="use my boyish charm to seduce charizard and sneak away"){
    this.setState({value:true});
    this.setState({gameState:5})
}
else if(event.target.value.toLowerCase()==="run"){
    this.setState({gameState:2});
    return(<Delayed waitBeforeShow={10}>
        this.forceUpdate();
    </Delayed>);
}
else if(event.target.value.toLowerCase()==="tackle"){
    this.setState({gameState:3});
}
else if(event.target.value.length>=10 && event.target.value.toLowerCase()!=="use my boyish charm to seduce charizard and sneak away"){
    this.setState({gameState:4});
}
  }

render(){
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (this.state.value===true) {
      // Render a completed state
      return <Completionist />;
    } 
    
    else if(completed){return <Fail/>;}
    else {
      // Render a countdown
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };
  const Completionist = () => <Link to="/Challenge4" style={{fontSize:'2rem'}}>Continue you beast.</Link>;
  const Fail = () => <Link to="/Challenge4" style={{fontSize:'2rem'}}>Continue. But you don't deserve to.</Link>;
  
    return(
<div style={{ margin: 'auto',
  width: '80%',
  marginTop:'3rem',
  border: '3px solid grey',
  borderRadius:'10px',
  padding: '10px',
  backgroundColor:'#90ee90',
  marginBottom:'2rem'
  }} 
  >
{this.state.value===false &&
<Sound
     url='https://vgmdownloads.com/soundtracks/pokemon-red-green-blue-yellow/nbczoqlo/10%20Battle%21%20%28Trainer%20Battle%29.mp3'
     playStatus={Sound.status.PLAYING}
      playFromPosition={100 /* in milliseconds */}
    />
}
    <h1>Challenge 3. Win the pokemon battle. </h1>
    <h2>Hint: I dare you to try run or tackle. If that doesn't work, look around the room for a clue</h2>
    {(this.state.gameState===1 || this.state.gameState===4) &&<img src={Pokemon1} />}
    {(this.state.gameState===2 || this.state.gameState===3) &&<img src={DavidLose} />}
    {this.state.gameState===5 &&<img src={DavidWin} />}

    <input style={{color:'black',minWidth:'60vw',minHeight:'10vh',fontSize:'1.5rem'}}
   
    onChange={this.changeHandler} 
      type="text"
      className="david"
    //   You found me. just write 'input'
    />
    <div> {this.state.gameState===1 && <h1>Charizard is angry, he is getting ready to attack. Type in your attack!</h1>}</div>
    <div> {this.state.gameState===3 && <h1>David uses tackle, Charizard dodges like a legend. Absolutely recks david. David faints. Try again.</h1>}</div>
    <div> {this.state.gameState===2 && <h1>David tries to run, Charizard catches up and rips his head off. David is ded. Try again.</h1>}</div>
    <div> {this.state.gameState===4 && <h1>David tries to use some stupid attack. Of course it doesnt work. He's a fool. But he's still in the battle.</h1>}</div>
    <div> {this.state.gameState===5 && <h1>David wins! Romy.. I mean Charizard walks away ashamed.</h1>}</div>
    
        <Countdown date={Date.now() + 70000}   intervalDelay={0}
    precision={3}
    renderer={
     renderer
    }
    >
     
    </Countdown>
    <h1></h1>
    {this.state.gameState==5 && <Sound
      url='https://vgmdownloads.com/soundtracks/pokemon-red-green-blue-yellow/xjaxtdkb/15%20Victory%21%20%28Wild%20Poke%E2%80%99mon%29.mp3'
      playStatus={Sound.status.PLAYING}
      playFromPosition={100 /* in milliseconds */}
    />}


</div>
);
}
}