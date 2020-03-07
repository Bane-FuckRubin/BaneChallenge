import Sound from 'react-sound';
import React from 'react';
import Countdown from 'react-countdown-now';
import AreaClear from '../Media/AreaClear.mp3';



export default class Challenge6 extends React.Component 
{
state={value:false}


changeHandler = event => {
if (event.target.value.toLowerCase()==="a" || event.target.value.toLowerCase()==="b" || event.target.value.toLowerCase()==="c"){
    this.setState({value:true});
}
}
  

render(){
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (this.state.value===true) {
      // Render a completed state
      return <Fail />;
    } 
    
    else if(completed){return <Fail/>;}
    else {
      // Render a countdown
      return <div style={{textAlign:'center'}}><span style={{fontSize:'7rem',color:'red',}}>{minutes}:{seconds}</span></div>;
    }
  };
//   const Completionist = () => <Link to="/Challenge7" style={{fontSize:'2rem'}}>You win you legend.</Link>;
  const Fail = () => <h1 style={{fontSize:'2rem',
  webkitTouchCallout: 'none',
  webkitUserSelect: 'none',
  khtmlUserSelect: 'none',
//   -moz-user-select: 'none',
//   -ms-user-select: 'none',
  userSelect: 'none',
}}>
    All wrong. Insert Placeholder text here.
    <br/>
    <span style={{wordWrap:'break-word'}}>
    Go to localhost:3000/iiillliillllikhkhkkhhkhkmnmnmmmnnnmmnnnmmnnmnnaeaeaeaaeeeeaaaaeaqpqpqpqpppqppqppqpqppqppqpqpp to continue

    </span>
    </h1>;
  
    return(
<div style={{backgroundColor:'black', height:'100vh', width:'100vw', position:'absolute',top:0}}>
<div style={{ margin: 'auto',
  width: '50%',
  marginTop:'4rem',
  border: '3px solid grey',
  borderRadius:'10px',
  padding: '10px',
  backgroundColor:'#90ee90'
  }} 
  >
        {this.state.value===false &&
<Sound
      url={AreaClear}
      playStatus={Sound.status.PLAYING}
      playFromPosition={100 /* in milliseconds */}
    />
}

    <h1>Challenge 6. Answer the following question: </h1>
    <h2>When did JQuery stop being relevant? (type the letter)</h2>
    <h3>a. 2006, the year it was released.</h3>
    <h3>b. JQuery = bae 4 eva 8=======D</h3>
    <h3>c. After David gets fired. </h3>
      


        <input style={{fontSize:'3rem',color:'black'}}
    
        onChange={this.changeHandler} 
          type="text"
          className="david"

        />

{/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
<h1 className="im an invisible piece of garbage"> </h1>
        <Countdown date={Date.now() + 30000}   intervalDelay={0}
    precision={3}
    renderer={
     renderer
    }
    >
     
    </Countdown>
    {this.state.value===true && <Sound
      url='https://vgmdownloads.com/soundtracks/super-mario-bros/rqpfoktl/04%20-%20Area%20Clear.mp3'
      playStatus={Sound.status.PLAYING}
      playFromPosition={100 /* in milliseconds */}
    />}
</div>
</div>
);
}
}