import React, { useContext } from 'react';
import './Container.css';
import {ScoreContext} from './App';
function Container() {
  const {yours, dealers, yourCard, dealerCard} =useContext(ScoreContext);
    return (
        <>
          <div className="container">
      <div className="container1">
    <h1>You:{yours[0]}</h1>
    <div className="yourcard">
      {yourCard[0].map((value, index)=> (<h1 className='cardvalue'>Attempt No.{index+1}: <span className='cardspan'>{value}</span></h1>))}
    </div>
      </div>
      <div className="container2">
      <h1>Dealer:{dealers[0]}</h1>
      <div className="yourcard">
      {dealerCard[0].map((value, index)=> <h1 className='cardvalue'>Attempt No.{index+1}: {value}</h1>)}
    </div>
      </div>
      
    </div>   
        </>
    )
}

export default Container
