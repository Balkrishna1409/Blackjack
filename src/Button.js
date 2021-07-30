import React from 'react';
import './Button.css';

function Button() {
    return (
        <>
        <div className="button__container">
      <button className='hit'>HIT</button>
      <button className='stand'>STAND</button>
      <button className='deal'> DEAL</button>
    </div>     
        </>
    )
}

export default Button;
