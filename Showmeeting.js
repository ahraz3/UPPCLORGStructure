import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import meetimg from "./images/meet.jpeg";
import React, { useEffect, useState } from "react";
const Showmeeting = () => {
  // show meetings page code start
  let [meetData, setmeetData] = useState([]);

  const user = localStorage.getItem('user');
  const showmeeting = () => {

    fetch("http://localhost:8080/MeetingDetails")
      .then((res) => res.json())
      .then((data) => {
        setmeetData(data.data);
      });
    alert("click ok to show defaulters data !!!!");
  };

  function approve() {

  }

  function reject() {

  }

  return (
    <div className="main">
      <div className="page-container">
        <div className="content-wrap">
          <br />
          <div className="mcntab">
            <br />
            <h4>
              <i >
                <b >Show Meeting Information </b>
              </i>
            </h4>
            <br />
            <div>
              {" "}
              <input
                style={{width : '250px'}}
                type="submit"
                value="Show Meeting Information"
                onClick={showmeeting}
              />
              <br />
              <br />
              <table className="meettab">
                <tr>
                  <td className="tdata">REQ_SAP_ID</td>
                  <td className="tdata">REQ_NAME</td>
                  <td className="tdata">REQ_POST</td>
                  <td className="tdata">MEETING_DATE</td>{" "}
                  <td className="tdata">MEETING_TIME</td>
                  <td className="tdata">STATUS</td>
                  <td className="tdata">APPROVER_ID</td>
                  <td className="tdata">APPROVER_NAME </td>
                  <td className="tdata">APP_REMARK </td>
                  <td className="tdata">APPROVE/REJECT</td>
                </tr>
              </table>
              {meetData.length != 0 &&
                meetData.map((meeting) => {
                  return (
                    <div className="meetlist">
                      <table className="meettab">
                        <tr>
                          <td className="tdata">{meeting.REQ_SAP_ID}</td>
                          <td className="tdata">{meeting.REQ_NAME}</td>
                          <td className="tdata">{meeting.REQ_POST}</td>
                          <td className="tdata">{meeting.MEETING_DATE}</td>
                          <td className="tdata">{meeting.MEETING_TIME}</td>
                          <td className="tdata">{meeting.STATUS}</td>
                          <td className="tdata">{meeting.APP_SAP_ID}</td>
                          <td className="tdata">{meeting.APP_NAME}</td>
                          <td className="tdata">{meeting.APP_REMARK}</td>
                          <td className='tdata'><input style={{width : '80px'}}type="submit" value="APPROVE" onClick={approve}/>
                          <input style={{width : '80px'}} type="submit" value="REJECT" onClick={reject} /></td>
                        </tr>
                      </table>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showmeeting;
