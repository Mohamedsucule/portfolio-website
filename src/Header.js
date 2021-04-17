import React, { Component } from "react";

import Typical from "react-typical";
import NavBar from "./NavBar";
class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <h1>Welcome</h1>
        <h2>
          <Typical
            className="Typical"
            steps={[
              "I'm Mohamed Sucule",
              3000,
              "FrontEnd Developer!",
              3000,
              "Mechanical Engineer",
              3000,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </h2>

        <NavBar />
      </div>
    );
  }
}

export default Header;
