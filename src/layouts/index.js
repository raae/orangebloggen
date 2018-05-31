import React from "react";
import Link from "gatsby-link";
import meImg from "./../assets/me.jpg";

import { rhythm } from "../utils/typography";

export default ({ children }) => (
  <div
    style={{
      borderTop: "4px solid orangered"
    }}
  >
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: rhythm(24),
        padding: `${rhythm(2)} ${rhythm(0.75)}`,
        paddingBottom: `${rhythm(1)}`
      }}
    >
      {children()}
    </div>
    <div>
      <img
        style={{
          margin: 0,
          display: "block",
          border: "4px solid darkorange"
        }}
        src={meImg}
      />
    </div>
  </div>
);
