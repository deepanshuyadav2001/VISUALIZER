import React from 'react';
import { useState,useEffect} from 'react';
import NODE from './NODE';
import "./PATH.css";
import SHORTEST_PATH from './SHORTEST_PATH';
import NAVBAR from './NAVBAR';

var run=0;

export default function PATH(props) {
  const col=props.col,row=props.row;
  const[si,setsi]=useState(0);
  const[sj,setsj]=useState(0);
  const[ei,setei]=useState(0 );
  const[ej,setej]=useState(col-1);

 const[grid,setgrid]=useState([]);
 const[mouseIsPressed,setmouse]=useState(false);
 const[dragstrt,setdragstrt]=useState(false);
 const[dragend,setdragend]=useState(false);

 const refresh=()=>{
  for(let i=0;i<props.vp.length;i++)
  {let x=props.vp[i][0];   
    let y=props.vp[i][1];
    let a=document.getElementById('node-row-'+(x)+'col-'+(y));
  if(a!=null){
  a.style.backgroundColor = "silver";}}
  while(props.vp.length > 0) {
    props.vp.pop();
 }}

 useEffect(()=>
 {
intialize_grid();
 },[]);

 const intialize_grid=()=>
 {const temp=new Array(row);
    for(let i=0;i<row;i++)
    {temp[i]=new Array(col);}
    
 for(let i=0;i<row;i++)
  for(let j=0;j<col;j++)
   {temp[i][j]=1;} 
  
 setgrid(temp);
 }

const HMD=(row, col)=>{
  if(run===0){
  if(props.vp.length>0)
  {refresh();}
  let bl=true;
  if(row===si && col===sj)
  { let a=document.getElementById('node-row-'+(row)+'col-'+(col));
  a.style.backgroundColor = "silver";
  setdragstrt(true);
  bl=false;}
  if(row===ei && col===ej)
  {setdragend(true);
  bl=false;}
  if(bl){
    let a=document.getElementById('node-row-'+(row)+'col-'+(col));
    if(props.matrix[row][col]===1000)
    {props.matrix[row][col]=1;
      a.style.backgroundColor = "silver";}
      else{
    props.matrix[row][col]=1000;
  a.style.backgroundColor = "black";}
  setmouse(true);}}}


const HME=(row, col)=>{
  if(run===0)
  {
  let bl=true;
  if(dragstrt===true)
  { setsi(row);
    setsj(col);

  bl=false;}
    if(dragend===true)
    {setei(row);
      setej(col);
    bl=false;}

  if(bl){
  if (!mouseIsPressed) 
  {return;}
  let a=document.getElementById('node-row-'+(row)+'col-'+(col));
  if(props.matrix[row][col]===1000)
  {props.matrix[row][col]=1;
    a.style.backgroundColor = "silver";}
    else{
  props.matrix[row][col]=1000;
a.style.backgroundColor = "black";}}}}

const HMU=(row,col)=>{
  if(run===0){
  if(props.vp.length>0)
  {refresh();}
  if(dragstrt===true)
  {setsi(row);
  setsj(col);
  props.matrix[row][col]=1;
setdragstrt(false);}
if(dragend===true)
    {setei(row);
      setej(col);
      props.matrix[row][col]=1;
    setdragend(false);}
  setmouse(false);}
}

const find=()=>{ 
  run=1;
  SHORTEST_PATH(si,sj,ei,ej,row,col,props.matrix,props.dist,props.vist,props.vp);
  }

const grid_body=(
  <div>
  {grid.map((row,i)=>{
  return( 
   <div className="row">   
  {(row.map((col,j)=>{
  return (<NODE col={j} si={si} sj={sj} ei={ei} ej={ej} row={i}
  HMD={HMD} HME={HME} HMU={HMU}/> )})
  )}
  </div>); 
    })} 
   </div>
);

return(
  <>  
 <NAVBAR find={find}/>
 <div className='main'>  
 <div className='grid'><h2>GRID</h2></div>
 {grid_body}
 </div>
 </>

);

  }

  export  const to_false=()=>
  {run=0;}
  
