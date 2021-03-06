import React, { Fragment } from "react";

import Home from "./Home/Home";
import LeCabinet from "./LeCabinet/LeCabinet";
import Kine from "./Kine/Kine";
import Contact from "./Contact/Contact";
import MapMarker from "./MapMarker/MapMarker";

const sections = () => {
  return (
    <Fragment>
      <Home />
      <LeCabinet />
      <Kine />
      <Contact />
      <MapMarker />
    </Fragment>
  );
};

export default sections;
