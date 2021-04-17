import React from "react";
import Flip from "react-reveal/Flip";

export default function Text() {
  return (
    <div>
      <Flip right>
        <h1 className="welcome"> Welcome </h1>
      </Flip>
    </div>
  );
}
