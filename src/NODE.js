import React from 'react';
import "./NODE.css";

export default function NODE(props) {
let create_class='';
let content='';
    if(props.si===props.row && props.sj===props.col) 
     {create_class='node-start';
    content='S';}
    if(props.ei===props.row && props.ej===props.col) 
     {create_class='node-end';
    content='E';}
    return <div className={'node '+create_class} 
    id={'node-row-'+(props.row)+'col-'+(props.col)}
    onMouseDown={() => props.HMD(props.row, props.col)}
    onMouseEnter={() => props.HME(props.row, props.col)}
    onMouseUp={() => props.HMU(props.row,props.col)}><b>{content}</b></div>;
}
