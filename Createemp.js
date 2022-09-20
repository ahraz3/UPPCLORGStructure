import React, { useState } from "react";
import "./Createemp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Createemp() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    sapid: "",
    fname: "",
    designation: "",
    age: "",
    gender: "",
    reporting: "",
    contact: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    
  };

  const createEmp = async (e) => {
    e.preventDefault();
    const {
      sapid,
      fname,
      designation,
      age,
      gender,
      reporting,
      contact,
      password,
    } = data;

    console.log(data)

    if (sapid && fname && designation && reporting && password) {
       
      await axios.post("http://localhost:8080/Createemp", data).then((res) => {
        if (res.data.message === "Employee Successfully created") {
          alert(res.data.message);
        //   navigate("/Welcome");
        } else {
          alert(res.data.message);
        }
      });
    } else {
      alert("Invalid entry");
    }
  };

  return (
    <div className="container">
      <form className="create">
        <div className="htmlm-group">
          <div className="form-group form-check"></div>
          <center>
            <label className="lbl" htmlFor="exampleInputEmail1">
              <b>!!!! Create Employee Here !!!!</b>
            </label>
          </center>
        </div>
        <div>
          <label htmlFor="exampleInputSapid">SAP ID </label>
          <input
            type="text"
            name="sapid"
            value={data.sapid}
            onChange={handleChange}
            className="form-control"
            id="sapid"
            placeholder="Enter SAP Id "
          />
        </div>
        <div>
          <label htmlFor="exampleInputName">Full Name </label>
          <input
            type="text"
            name="fname"
            value={data.fname}
            onChange={handleChange}
            className="form-control"
            id="fname"
            placeholder="Enter Full Name"
          />
        </div>
        <div>
          <label htmlFor="exampleInputName">Designation </label>
          <input
            type="text"
            name="designation"
            value={data.designation}
            onChange={handleChange}
            className="form-control"
            id="designation"
            placeholder="Enter Designation"
          />
        </div>
        <div>
          <label htmlFor="exampleInputAge">Age </label>
          <input
            type="number"
            name="age"
            value={data.age}
            onChange={handleChange}
            className="form-control"
            id="age"
            placeholder="Age "
          />
        </div>
        <div>
          <label htmlFor="exampleInputGender">Gender </label>
          <select name='gender'  value={data.gender} onChange={handleChange}className="form-control">
            <option>Male</option>
            <option>Female</option>
            
          </select>
          {/* <input
            type="text"
            name="gender"
            value={data.gender}
            onChange={handleChange}
            className="form-control"
            id="gender"
            placeholder="Choose gender "
          /> */}
        </div>
        <div>
          <label htmlFor="exampleInputReporting">Reporting Officer </label>
          <input
            type="text"
            name="reporting"
            value={data.reporting}
            onChange={handleChange}
            className="form-control"
            id="reporting"
            placeholder="Enter SAP ID of Reporting Officer "
          />
        </div>
        <div>
          <label htmlFor="exampleInputContact">Contact No. </label>
          <input
            type="text"
            name="contact"
            value={data.contact}
            onChange={handleChange}
            className="form-control"
            id="contact"
            placeholder="Enter Contact Number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            className="form-control"
            id="password"
            placeholder="Enter Password"
          />
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-outline-success"
          onClick={createEmp}
        >
          Submit
        </button>{" "}
        &nbsp;&nbsp;&nbsp;
      </form>
    </div>
  );
}
