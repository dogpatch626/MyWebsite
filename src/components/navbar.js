import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Link,
} from "react-router-dom";
var x = Math.round(0xffffff * Math.random()).toString(16);
var y = 6 - x.length;
var z = "000000";
var z1 = z.substring(0, y);
var color = "#" + z1 + x;
class Nav extends Component {
  render() {
    return (
      <div
        className="row"
        style={{ backgroundColor: "#DFDDEF", paddingBottom: "100px" }}
      >
        <center>
          <div className="col-md-5">
            <Link to="/">
              <button
                style={{
                  border: "none",
                  display: "inline-block",
                  background: "none",
                  alignContent: "center",
                  outline: "none",
                }}
              >
                <h1
                  className="sha text"
                  style={{
                    fontSize: "50px",
                    textAlign: "center",
                    color: color,
                  }}
                >
                  Home
                </h1>
              </button>
            </Link>
          </div>
        </center>
        <div className="row">
          <center>
            <div className="col-md-12 " style={{ paddingLeft: "25px" }}>
              <Link to="/about">
                <button
                  style={{
                    border: "none",
                    display: "inline-block",
                    background: "none",
                    alignContent: "center",
                    outline: "none",
                  }}
                >
                  <h1
                    className="sha text"
                    style={{
                      fontSize: "50px",
                      textAlign: "center",
                      color: color,
                    }}
                  >
                    about
                  </h1>
                </button>
              </Link>
            </div>
          </center>
        </div>
      </div>
    );
  }
}
export default withRouter(Nav);
