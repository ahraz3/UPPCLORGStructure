import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import OrgTree from 'react-org-tree';

const Searchemp = () => {
    const [sid, setSid] = useState("");
    const navigate = useNavigate();
    // Tree structure of org 
const horizontal = false; 
const collapsable = true; 
const expandAll = true;

const data1 = {
  id: 0,
      label: "Reporting SAP_ID "+sid.REP_OFFICER_ID+" Reporting Name: "+sid.REP_OFFICER_NAME,
    children:[{
      id:2,
      label: sid.SAP_ID+" " +sid.EMP_NAME,
      children:[{
        id:4,
        label: sid.EMP_SUB_GRP,
      },
      {
        id:5,
        label: "Position: "+sid.POSITION_TEXT,
      },
      ,{
        id:6,
        label: "DOB : "+sid.DOB,
    
        
      },
      {
        id:6,
        label: "DOJ : "+sid.DOJ,
    
        
      },
      {
        id:6,
        label: "Department : "+sid.DEPT_TEXT,
    
        
      },{
        id:6,
        label: "Mo : "+sid.OFFICE_MO,
    
        
      }]
      
    }]
      
     
}
    async function showdata(e) {
    e.preventDefault();
    const sapid = document.querySelector('#sapid').value;
    console.log("sapid", sapid);
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:8080/EmpDetails",
        params: { sapid },
      });
      console.log(response.data);
      setSid(response.data);

      document.getElementById("abc").value = response.data.SAP_ID;
      if (sapid === response.data.SAP_ID) {
        alert("Search  successfull");

      }
      else { alert("wrong SAPID  !!!"); }
    }
    catch (err) {
      console.log(err);
    }







  }

 return (
    <div className='main'>
      <div className='page-container'>
<div className='content-wrap'>
  <br/>
  <div className='mcnt'>
    <br/>
  <form  className="logform" onSubmit={showdata} >
    <div className="htmlm-group">
    <div className="form-group form-check">
    
  </div>
    <label className="lbl" htmlFor="exampleInputEmail1"><b>!!!! Employee Search Page  !!!!</b></label>
       
  </div>
   <div>

    <label htmlFor="exampleInputEmail1">Enter SAP ID </label>
    <input type="text" className="form-control" id="sapid" aria-describedby="emailHelp" placeholder="Enter SAP Id "/>
    
  </div>
  
  <br/>
  <button type="submit" className="btn btn-primary">Submit</button> &nbsp;&nbsp;&nbsp;<button type="reset" className="btn btn-primary">Reset</button>
  <div className="form-group form-check">
<br/>    
    <label className="form-check-label" htmlFor="exampleCheck1" ><a href><u>Forgot Password</u></a></label>
  </div>
  
</form>
  </div>
  <div className='mcnt'>
    <br/>
    <h4><i>EMPLOYEE INFORMATION </i></h4>
        <br/>
    {/* <table className='empinfo'>
            <tr><td className='empdata'>SAP ID : </td><td className='empdata'>{sid.SAP_ID}</td></tr>
        <tr><td className='empdata'>Employee Class  : </td><td className='empdata'>{sid.EMP_GRP}</td></tr>
        <tr><td className='empdata'>Employee Name : </td><td className='empdata'>{sid.EMP_NAME}</td></tr>
        <tr><td className='empdata'>Posting  : </td><td className='empdata'>{sid.PERSONAL_AREA}</td></tr>
        <tr><td className='empdata'>Post  : </td><td className='empdata'>{sid.EMP_SUB_GRP}</td></tr>
        <tr><td className='empdata'>Repoting Officer  : </td><td className='empdata'>{sid.REP_OFFICER_NAME}</td></tr>
        <tr><td className='empdata'>DDO NAME   : </td><td className='empdata'>{sid.DDO_NAME}</td></tr>

    </table> */}

<OrgTree  data={data1}  
    collapsable={collapsable}

    
   ></OrgTree>
    
    
       </div>
  </div>
  </div>
    </div>
  )
}
 export default Searchemp;




