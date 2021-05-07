import axios from 'axios';
import React from 'react';
import './App.css';
import VideoComponent from './component/VideoComponent';
function App() {
  const clickMethod= async()=>{
    console.log("button clicked")
    window.open("http://localhost:4000/downloadVideo")
    //await axios.get("http://localhost:4000/test").then().catch(res=>console.log("problem is occurred ",res));
  }
    return (
      <>
       <VideoComponent/>
       <button className="btn btn-primary" onClick={clickMethod} >Download</button>
       </>
    );
}
export default App;