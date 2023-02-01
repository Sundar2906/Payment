import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import './icic.css';

function paysbi(){
    
     <Navigate to="/sbi"></Navigate>
}
class Ic extends Component {
  
render() {
  
  return (
    <div className='sbibg'>
<div className='barr'>
<input className='sbb1' type='text' placeholder='Username'></input>
<input className='sbb2' type='password' placeholder='password'></input>
<input className='sbb3' type='number' placeholder='Amount'></input>
<div className='paysb1'><button onClick={paysbi}>Pay Now</button></div>
    </div>
</div>
   
  );
}
}
export default Ic;