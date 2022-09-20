import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import {useNavigate} from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
const mylogin =async (e)=>{
e.preventDefault();
const sapid=document.querySelector('#sapid').value;
const password=document.querySelector('#password').value;
console.log(sapid+password);

 try{const response = await axios({
 method: "get",
 url:"http://localhost:8080/login",
 params:{sapid,password},
 });
 console.log(sapid);
 console.log("hi"+response.data.sapid);
 let p=response.data.PASSWORD;
 console.log(p,password)
 if(password===p){
  alert("login successfull")
  localStorage.setItem("user",sapid);
    navigate('/welcome',{state : response.data})
 }
 else{ alert("wrong password !!!")}
}
catch(err ) 
{
  console.log(err);

}



};




  return (

    <div className='main'>
      <div className='page-container'>
<div className='content-wrap'>
  <br/>
  <div className='mcnt'>
    <br/>  <h1> Login Page </h1>
    <p><h3>This is project is created for searching uppcl employee hiercrhy within department for arring meetings by employees to thier higher officials </h3></p>
  </div>
  <div className='mcnt'>
    <br/>
  <form  className="logform" onSubmit={mylogin}>
    <div className="htmlm-group">
    <div className="form-group form-check">
    
  </div>
    <label className="lbl" htmlFor="exampleInputEmail1"><b>!!!! Employee Login Here !!!!</b></label>
       
  </div>
   <div>

    <label htmlFor="exampleInputEmail1">SAP ID </label>
    <input type="text" className="form-control" id="sapid" aria-describedby="emailHelp" placeholder="Enter SAP Id "/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="password" placeholder="Enter Password"/>
  </div>
  <br/>
  <button type="submit" className="btn btn-primary">Submit</button> &nbsp;&nbsp;&nbsp;<button type="reset" className="btn btn-primary">Reset</button>
  <div className="form-group form-check">
<br/>    
    <label className="form-check-label" htmlFor="exampleCheck1" ><a href><u>Forgot Password</u></a></label>
  </div>
  
</form>
  </div>
  </div>
  </div>
    </div>
  )
}
 export default Login;




