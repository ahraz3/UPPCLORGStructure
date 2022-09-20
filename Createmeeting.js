import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import meetimg from "./images/meet.jpeg";
const Createmeeting = () => {


  const navigate = useNavigate();

  const [data, setData] = useState({
    sapid: "",
    mosapid: "",
    seldate: "",
    stime: "",
    endate: ""
  });

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    
  };


  async function meetingnow(e) {
    e.preventDefault();
    // const sapid = document.querySelector('#sapid').value;
    // const mosapid = document.querySelector('#mosapid').value;
    // const seldate = document.querySelector('#seldate').value;
    // const starttime = document.querySelector('#stime').value;
    // const endtime = document.querySelector('#endtime').value;
    // const mstatus= "Requested";
    // const mduration="1"
    // alert(mduration)
    // try {
    //   const response = await axios({
    //     method: "post",
    //     url: "http://localhost:8080/Createmeeting",
    //     params: {},
    //   });
    // } catch (err) {
    //   console.log(err);
    // }


    const {
      sapid,
      mosapid,
      seldate,
      stime,
      endate
    } = data;

    if ( sapid && mosapid) {
       
      await axios.post("http://localhost:8080/Createmeeting", data).then((res) => {
        if (res.data.message === "Meeting Scheduled") {
          alert(res.data.message);
        //   navigate("/Welcome");
        } else {
          alert(res.data.message);
        }
      });
    } else {
      alert("Invalid entry");
    }
  }

  return (
    <div className="main">
      <div className="page-container">
        <div className="content-wrap">
          <br />
          <div className="mcnt">
            <br />
            <form className="meeting" onSubmit={meetingnow}>
              <div className="htmlm-group">
                <div className="form-group form-check"></div>
                <label className="lbl" htmlFor="exampleInputEmail1">
                  <b>!!!! Meeting Creation Page !!!!</b>
                </label>
              </div>
              <div>
                <label htmlFor="exampleInputEmail1"> Your SAP ID :</label>
                <input
                  type="text"
                  name="sapid"
                  value={data.sapid}
                  onChange={handleChange}
                  className="form-control"
                  id="sapid"
                  placeholder={localStorage.getItem('user')}
                />
              </div>
              <div>
                <label htmlFor="exampleInputEmail1">
                  {" "}
                  Select Meeting Officer SAP ID :
                </label>
                <input
                  type="text"
                  name="mosapid"
                  value={data.mosapid}
                  onChange={handleChange}
                  className="form-control"
                  id="mosapid"
                  placeholder="Enter Meeting Officer SAP Id "
                />
              </div>
              <div>
                <label htmlFor="exampleInputEmail1">
                  {" "}
                  Select Meeting Date :
                </label>
                <input
                  type="date"
                  name="seldate"
                  value={data.seldate}
                  onChange={handleChange}
                  className="form-control"
                  id="seldate"
                />
              </div>
              <div>
                <label htmlFor="exampleInputEmail1">
                  {" "}
                  Select Meeting Start Time :
                </label>
                <input
                  type="time"
                  name="stime"
                  value={data.stime}
                  onChange={handleChange}
                  className="form-control"
                  id="stime"
                />
              </div>
              <div>
                <label htmlFor="exampleInputEmail1">
                  {" "}
                  Meeting Duration :
                </label>
                <input
                  type="number"
                  name="endate"
                  value={data.endate}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="In Minutes"
                  id="endtime"
                />
              </div>
              <br />
              <button type="submit" className="btn btn-primary" onClick={meetingnow}>
                Create Meeting{" "}
              </button>{" "}
              &nbsp;&nbsp;&nbsp;
              <button type="reset" className="btn btn-primary">
                Reset
              </button>
              <div className="form-group form-check">
                <br />
              </div>
            </form>
          </div>
          <div className="mcnt">
            <img
              src={meetimg}
              alt="Meeting image "
              className="meimg"
              className="meeti"
            />
            <br />
            <h4>
              <i>Meeting Information </i>
            </h4>
            <br />
            {/* <table className='empinfo'>
            <tr><td className='empdata'>Meeting no : </td><td className='empdata'>{sid.SAP_ID}</td></tr>
        <tr><td className='empdata'>Meeting With   : </td><td className='empdata'>{sid.EMP_GRP}</td></tr>
        <tr><td className='empdata'>Meeting Date & Time  : </td><td className='empdata'>{sid.EMP_NAME}</td></tr>
        <tr><td className='empdata'>Meeting Staus  : </td><td className='empdata'>{sid.PERSONAL_AREA}</td></tr>
            </table>
    
     */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Createmeeting;
