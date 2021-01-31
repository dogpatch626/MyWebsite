import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Link,
} from "react-router-dom";
import Picon from "../media/PGhub.png";
import Gicon from "../media/bHub.png";
var Fredball = Math.floor(Math.random() * Math.floor(2));
var pic;
if (Fredball === 0) {
  pic = Picon;
} else {
  pic = Gicon;
}
class about extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <img src={pic} />
      </div>
    );
  }
}

export default withRouter(about);
