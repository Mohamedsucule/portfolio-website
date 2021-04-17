import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "./config/Config";
import Typist from "react-typist";

export default function ParticlesBackground() {
  return (
    <div>
      <Particles
        width="100vw"
        height="100vh"
        params={ParticleConfig}
      ></Particles>
    </div>
  );
}
