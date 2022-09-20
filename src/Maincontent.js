import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import logoimg from "./images/bkg.jpg" ;
import logoim from "./images/bulb.gif" ;

const Maincontent = () => {
  return (

    <div className='main'>
      <div className='page-container'>
<div className='content-wrap'>
  <br/>
  <div className='mcnt'>
    <br/>  <h1> ABOUT PROJECT</h1>
    <p><h3>This is project is created for searching uppcl employee hiercrhy within department for arring meetings by employees to thier higher officials </h3></p>
  </div>
  <div className='mcnt'>
  <br/><br/>
<img src={logoimg} alt="logo image" className='mainimg'/>
  </div>
  </div>
  <br/>
  <div class="container"> <div class="ticker"> <div class="title"><h5><img src={logoim} alt="logo image" className='bimg'/>Breaking News</h5></div> <div class="news"> <marquee class="news-content"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>  </marquee> </div> </div> </div>
    </div>
    </div>
  )
}
 export default Maincontent;




