import React from "react";

import { rhythm } from "../utils/typography";

export default ({ color }) => (
  <hr
    style={{
      backgroundColor: color ? color : "orangered",
      width: rhythm(3),
      height: "4px",
      margin: `${rhythm(2)} auto`
    }}
  />
);
