import './App.css';
import React from 'react';
class App extends React.Component {
state={
  fullName: "aziz labidi",
  bio: "software engineer",
  imgSrc: "/images/photocv.jpg",
  profession:"student",
  shows:false,
  timer:0
};
handleClick = () => {
  this.setState({shows: !this.state.shows})
  if(!this.state.shows){
  var mytimer= setInterval(()=>this.timer(), 1000) 
} 
else {
  clearInterval(mytimer)
  alert(this.state.timer)
}
} 
 timer = () => {
  this.setState({timer:this.state.timer+1})
 }

  render() {
return(
<>
<button name="start" style={{backgroundColor:"purple", color:"white", border: "none", fontSize:"20px", height:"50px", width:"100px"}} onClick={this.handleClick}> click here </button>
    timer :{this.state.timer}
    {(this.state.shows)?(
    <div style={{textAlign:"center"}}>
      <img src={this.state.imgSrc} alt="myimage" width="300px" height="400px"></img>
    <h1 style={{color:"purple"}}> {this.state.fullName}</h1>
    <h2 style={{color:"orange"}}> {this.state.bio}</h2>
    <h3>{this.state.profession}</h3>
    </div> )
    : (<h2>Click on the button to see your profile</h2>)}

     


</>
);
  }
}

export default App;
