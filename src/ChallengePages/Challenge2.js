import Sound from 'react-sound';
import React from 'react';
import Countdown from 'react-countdown-now';
import { Link } from 'react-router-dom';


export default class Challenge2 extends React.Component 
{
state={value:false}


changeHandler = event => {
if (event.target.value.length>=5 && event.target.value.toLowerCase()==="input"){
    this.setState({value:true});

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
  const Completionist = () => <Link to="/Challenge3" style={{fontSize:'2rem'}}>You win you legend.</Link>;
  const Fail = () => <Link to="/Challenge3" style={{fontSize:'2rem'}}>You suck sweaty ones.</Link>;

  
    return(
        
<div style={{ margin: 'auto',
  width: '50%',
  marginTop:'10rem',
  border: '3px solid grey',
  borderRadius:'10px',
  padding: '10px',
  backgroundColor:'#90ee90'
  }} 
  >
             {/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
               {/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
       {/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
       {/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
       {/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
       {/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
               {/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
       {/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
       {/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
       {/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
       {/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
               {/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
       {/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
       {/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
       {/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
{this.state.value===false &&
<Sound
      url='https://vgmdownloads.com/soundtracks/mario-kart-double-dash/cirexgjn/054%20-%20Rainbow%20Road%20%28Final%20Lap%29.mp3'
      playStatus={Sound.status.PLAYING}
      playFromPosition={100 /* in milliseconds */}
    />
}

    <h1>Challenge 2. Find and identify the element with your name in it. </h1>
    <h2>Hint: try look in sources (developer tools) </h2>

       {/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
               {/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
       {/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
       {/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
       {/* You're a shmuck.  */}
{/* Get the hell out my code.  */}

        <input style={{fontSize:'3rem',color:'black'}}
    
        onChange={this.changeHandler} 
          type="text"
          className="david"
        //   You found me. just write 'input'
        />

{/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
<h1 className="im an invisible piece of garbage"></h1>
        <Countdown date={Date.now() + 90000}   intervalDelay={0}
    precision={3}
    renderer={
     renderer
    }
    >
     
    </Countdown>
    {this.state.value==true && <Sound
      url='https://vgmdownloads.com/soundtracks/super-mario-bros/rqpfoktl/04%20-%20Area%20Clear.mp3'
      playStatus={Sound.status.PLAYING}
      playFromPosition={100 /* in milliseconds */}
    />}
</div>
);
}
}