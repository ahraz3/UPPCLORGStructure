import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Deleteemp() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    sapid: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const deleteEmp = async (e) => {
    e.preventDefault();
    const {sapid} = data;
    console.log(data);

    axios.post("http://localhost:8080/Deleteemp", data).then((res) =>{
        if (res.data.message === "Employee Successfully Deleted") {
            alert(res.data.message);
            // navigate("/Welcome");
          } else {
            alert(res.data.message);
          }

    })
   

  };

  return (
    <div>
      <div className="container">
        <form className="create">
          <div className="htmlm-group">
            <div className="form-group form-check"></div>
            <center>
              <label className="lbl" htmlFor="exampleInputEmail1">
                <b>!!!! Delete Employee Here !!!!</b>
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
          <br />
          <button
            type="submit"
            className="btn btn-outline-success"
            onClick={deleteEmp}>
            Delete
          </button>{" "}
          &nbsp;&nbsp;&nbsp;
        </form>
      </div>
    </div>
  );
}
