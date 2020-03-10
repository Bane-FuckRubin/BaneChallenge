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
  setTimeout(() =>{
    document.getElementById('div1').style.visibility = "visible";
    },250);  
  setTimeout(() =>{
    document.getElementById('div2').style.visibility = "visible";
    },500); 
  setTimeout(() =>{
      document.getElementById('div3').style.visibility = "visible";
      },3000);   
      setTimeout(() =>{
        document.getElementById('div4').style.visibility = "visible";
        },5000); 
        setTimeout(() =>{
          document.getElementById('div5').style.visibility = "visible";
          },7000);  
        setTimeout(() =>{
          document.getElementById('div6').style.visibility = "visible";
          },9000); 
       
              // setTimeout(() =>{
              //   document.getElementById('div9').style.visibility = "visible";
              //   },9750); 


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
  const Fail = () => <div style={{color:'#00FF00', fontSize:'25px'}}>
    <div>PS C:\Users\Bane:~ Wrong! It has never been relevant!</div>
    <div>PS C:\Users\Bane:~ I think you saw that one coming.</div>
    <div>PS C:\Users\Bane:~ Why don't you go read <a href="https://medium.com/javascript-in-plain-english/jquery-will-die-soon-heres-why-976a6b8105e1">this</a> and educate yourself</div>
    <div>PS C:\Users\Bane:~ While you're there you might find the link to your last challenge</div>



  </div>
  
    return(
        <div style={{backgroundColor:'black', height:'100vh', width:'100vw', position:'absolute',top:0}}>
        <div style={{ margin: 'auto',
          width: '65%',
          marginTop:'2rem',
          border: '1px solid grey',
          borderRadius:'10px',
          padding: '10px',
          backgroundColor:'black'
          }} 
          >
        {this.state.value===false &&
<Sound
      url={AreaClear}
      playStatus={Sound.status.PLAYING}
      playFromPosition={100 /* in milliseconds */}
    />
}
          <div style={{color:'#00FF00', fontSize:'25px'}}>
            PS C:\Users\Bane:~ Did you like my trick? 
            <div id="div1" style={{visibility:'hidden'}}>PS C:\Users\Bane:~ It would be terribly embarrasing if you started typing that in.</div>
            <div id="div2" style={{visibility:'hidden'}}>PS C:\Users\Bane:~ We're almost done. Just answer this question:</div>
            <div id="div3" style={{visibility:'hidden'}}>PS C:\Users\Bane:~ I hear you have been programming in JQuery. Remind me, When did JQuery stop being relevant?</div>            
            <div id="div4" style={{visibility:'hidden'}}>PS C:\Users\Bane:~ A. 2006, the year it was released.</div>
            <div id="div5" style={{visibility:'hidden'}}>PS C:\Users\Bane:~ B. JQuery is a modern language that will thrive in 2020</div>
            <div id="div6" style={{visibility:'hidden'}}>PS C:\Users\Bane:~ C. After David gets fired.</div>
            <input style={{color:'black'}}
    
    onChange={this.changeHandler} 
      type="text"
      className="david"

    />
            </div>
          </div>

{/* You're a shmuck.  */}
{/* Get the hell out my code.  */}
<h1 className="im an invisible piece of garbage"> </h1>
        <Countdown date={Date.now() + 35000}   intervalDelay={0}
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
);
}
}