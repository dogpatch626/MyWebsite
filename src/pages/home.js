import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Link,
} from "react-router-dom";
class HomePage extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "black" }}>Welcome Home</h1>
      </div>
    );
  }
}
export default withRouter(HomePage);
