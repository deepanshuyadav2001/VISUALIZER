import React from 'react';
import {useState} from 'react';
import "./NAVBAR.css";

export default function NAVBAR(props) {
  const reload=()=>{
    window.location.reload();
}

  const [input,setinput]= useState({
start:"",
end:""
  });

let name,value;
  const handleInputs=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setinput({...input,[name]:value});};

    const{start,end}=input;

  return(
    <div id="topnav">
      <div className='left'>
       <b>PATHFINDING VISUALIZER</b>
       </div>
       <div className='center'>
       <button classname="calculate" type="submit" onClick={()=>{props.find()}}><b>FIND SHORTEST PATH</b></button>
       </div>
       <div className='reset'>
       <button classname="reset" type="submit" onClick={reload}><b>RESET</b></button>
       </div>
    </div>
  );
}
