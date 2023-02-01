import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './cash.css';
import { Navigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';
function paysbi(){
    <Navigate to="/sbi"></Navigate>
}
class  Cash extends Component {
render() {
  
  return (
    <div className="ccc">
   <div className='barrr'>
<input className='sbb11' type='text' placeholder='Usename'></input>
<input className='sbb22' type='number' placeholder='OTP'></input>
<input className='sbb33' type='text' placeholder='Address'></input>
<div className='paysb11'><button onClick={paysbi}>Pay Now</button></div>
    </div>
  
  </div>
  );
}
}

export default Cash;
