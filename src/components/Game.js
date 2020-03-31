import React, {useState} from 'react';
import {World} from './World';
import '../index.css';
import Matter from 'matter-js';
import {MatterTest} from './MatterTest';

export default function Game(){
 const  [state,setState] = useState({
  player: 1,
  sourceSelection: -1,
  status: '',
  turn: 'white'
});



  const handleClick = (i)=>{
    
    
  }

  const getIsMoveLegal = (srcToDestPath) =>{
    let isLegal = true;

    return isLegal;
  }

  return(
    <div><MatterTest/></div> 
)
}


