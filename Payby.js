import React, { Component } from 'react';
import './payby.css';
import {Link, redirect} from 'react-router-dom';
import {Navigate} from 'react-router-dom';


function Next(){
  if(document.querySelector(".db").checked){
    <Link to='/sbi'></Link>
  }
  
  else if(document.querySelector(".cd").checked){
   redirect("/Sbi.js");
  }
  else if(document.querySelector(".nb").checked){
    <Navigate to={"/sbi"} replace={true}></Navigate>
  }
}

class Payby extends Component {
  
render() {
  
  return (
   <div className='paybybg'>
   <div className='bxs1'>
   <div className='bxs2'><div className='pp'>Payment Method</div></div>
   <div className='so'>
    <div className='oc1'><input className='oc1 cd' type="radio" name="0c1"></input>
    <label>Cash on Delivery</label></div><br></br>
    
    <div className='oc3'><input className='oc1 db' type="radio" name="0c1" ></input>
    <label>Pay by Debit Card</label></div><br></br>
    <div className='oc4'><input Link to='./paybyd' className='oc1 nb' type="radio" name="0c1" ></input>
    <label>Pay by net banking</label></div><br></br></div>
    <div className='bt1'><button onClick={Next}>next</button>
    
    </div>
   </div>
   </div>
  );
}
}

export default Payby;