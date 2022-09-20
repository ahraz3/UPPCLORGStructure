// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useLocation, useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logoutimg from "./images/logout.png";
import Changepwd from "./Changepwd";
import "./Welcome.css";

<BrowserRouter>
  <Routes>
    <Route path="/Changepwd" element={<Changepwd />} />
  </Routes>
</BrowserRouter>;

function Welcome() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const logOut = () => {
    const username = localStorage.removeItem("user");
    navigate("/Login");
  };

  const changePassword = () => {
    navigate("/Changepwd");
  };

  return (
    <div className="outerwelcome">
      
      <div className="welcome">

        <div className="info">
          Welcome : {state.TITLE} . {state.EMP_NAME} ({state.SAP_ID})
        </div>

        <div className="chgpsw">
          <button className="chg" onClick={changePassword}>
            Change Password
          </button>
        </div>

        <div className="image" id="image-tag">
          <img
            src={logoutimg}
            alt="logout image"
            className="logouti"
            role="button"
            onClick={logOut}
          ></img>
        </div>

      </div>

      <br />
      <br />

      <div className="Outer">
        <div className="leftbar">
          <button
            className="sidebar-btn"
            onClick={() => navigate("/Createemp")}
          >
            Create Employee
          </button>

          <button
            className="nav-sidebar"
            onClick={() => navigate("/Deleteemp")}
          >
            Delete Employee
          </button>

          <button
            className="sidebar-link1"
            onClick={() => navigate("/Searchemp")}
          >
            Search Employee
          </button>

          <button
            className="sidebar-link1"
            onClick={() => navigate("/Createmeeting")}
          >
            Schedulemeeting
          </button>

          <button
            className="sidebar-link1"
            onClick={() => navigate("/Showmeeting")}
          >
            Meeting Schedule
          </button>
        </div>

        <div className="rightbar">
          
          <table className="info">
            <tr>
              <th className="tdata">
                <h1>EMPLOYEE INFORMATION </h1>
              </th>
            </tr>
            <tr>
              <td className="tdata">
                <label>
                  SAPID : <span>{state.SAP_ID} </span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="tdata">
                <label>
                  title :<span>{state.TITLE} </span>{" "}
                </label>
              </td>
            </tr>
            <tr>
              <td className="tdata">
                <label>
                  Name : <span>{state.EMP_NAME} </span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="tdata">
                <label>
                  Last Name :<span>{state.email} </span>{" "}
                </label>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
