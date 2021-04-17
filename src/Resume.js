import React from "react";
import { Route } from "react-router-dom";

export default function Resume() {
  return (
    <div>
      <Route exact path="./resume" Component={Resume} />
      <h1> Hello World!</h1>
    </div>
  );
}
