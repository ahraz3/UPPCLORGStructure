import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

const Contactus = () => {
  return (

    <div className='main'>
      <div className='page-container'>
<div className='content-wrap'>
  <br/>
  <div className='mcnt'>
    <br/>  <h1>:: Contact Us Page ::</h1>
    <p><h3>This is project is created for searching uppcl employee hiercrhy within department for arring meetings by employees to thier higher officials </h3></p>
  </div>
  <div className='mcnt'>
    <br/>
    <br/>
  <form  className="logform">
    <div className="htmlm-group">
    <div className="form-group form-check">
    
  </div>
    <label className="lbl" htmlFor="exampleInputEmail1"><b>!!!! Contact Us Form !!!!</b></label>
       
  </div>
  <div className="form-group">

    <label htmlFor="exampleInputEmail1">Enter E-mail id:  </label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email Id  "/>
    
  </div>
  <div className="form-group">

    <label htmlFor="exampleInputEmail1">Enter Subject :  </label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email Id  "/>
    
  </div>

  <div className="form-group">

    <label htmlFor="exampleInputEmail1">Message:  </label>
    <input type="textarea" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email Id  "/>
    
  </div>
  <br/>
  <button type="submit" className="btn btn-primary">Submit</button> &nbsp;&nbsp;&nbsp;<button type="reset" className="btn btn-primary">Reset</button>
  <div className="form-group form-check">
    
    
  </div>
  
</form>
  </div>
  </div>
    
    </div>
    </div>
  )
}
 export default Contactus;




