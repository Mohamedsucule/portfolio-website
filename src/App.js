import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/custom.css";

import background from "../src/images/background.jpg";
import ParticlesBackground from "./ParticlesBackground";
import Typical from "react-typical";
import Text from "./Text";
import NavBar from "./NavBar";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import Resume from "./Resume";
function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Header /> <ParticlesBackground className="particles" />
    </div>
  );
}

export default App;
