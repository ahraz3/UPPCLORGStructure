//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useLocation, useNavigate } from "react-router-dom";
import Welcome from "./Welcome";

import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//  <BrowserRouter>
//   <Routes>
//    <Route path="/Createemp" element={<Createemp />} />
//        </Routes>

// </BrowserRouter>

function Changepwd() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const chgpassword = async (e) => {
    e.preventDefault();
    const sapid = document.querySelector("#userid").value;
    const password = document.querySelector("#pwd").value;
    const currentPassword = document.querySelector("#currentpwd").value;
    const confirmPassword = document.querySelector("#confirmpwd").value;

  if(password == confirmPassword) {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:8080/Changepassword",
        params: { sapid, password, currentPassword },
      });
      if (response.data.message === "Password Changed Successfully. Login now.") {
        alert(response.data.message);
        localStorage.removeItem("user");
        navigate("/Login");
      } else {
        alert(response.data.message);
      }
     
    } catch (err) {
      console.log(err);
    }
  } else {
    alert("Password didn't match");
  }



  };
  return (
    <div className="main">
      <div className="page-container">
        <div className="content-wrap">
          <br />
          <div className="mcntab">
            <br />
            <br />
            <form onSubmit={chgpassword} className="chgform">
              <div className="htmlm-group">
                <label className="lbl" htmlFor="exampleInputEmail1">
                  <h4>!!!! Change Password !!!!</h4>
                </label>
                <br />
                -----------------------------------------------------------------------------
              </div>
              <div className="htmlm-group">
                <label htmlFor="exampleInputEmail1">Your User Id </label>
                <input
                  type="text"
                  value={localStorage.getItem("user")}
                  className="form-control"
                  id="userid"
                  aria-describedby="emailHelp"
                  placeholder="Enter user id   "
                />
              </div>
              <div className="htmlm-group">
                <label htmlFor="exampleInputEmail1">Current Password : </label>
                <input
                  type="password"
                  className="form-control"
                  id="currentpwd"
                  aria-describedby="emailHelp"
                  placeholder="Enter Current Password  "
                />
              </div>
              <div className="htmlm-group">
                <label htmlFor="exampleInputEmail1">New Password : </label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  aria-describedby="emailHelp"
                  placeholder="Enter New Password  "
                />
              </div>
              <div className="htmlm-group">
                <label htmlFor="exampleInputEmail1">Confirm Password : </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmpwd"
                  aria-describedby="emailHelp"
                  placeholder="Confirm password   "
                />
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-primary"
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Changepwd;
