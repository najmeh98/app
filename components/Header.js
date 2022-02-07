import React from "react";
import Space from "./share/Space";

export default function Header() {
  return (
    <div style={{ height: "80px", backgroundColor: " hsla(0,0%,100%,0.8)" }}>
      <h3 style={{ width: "100%", position: "fixed" }}>Home</h3>
      {/* <Space vertical={50} /> */}
    </div>
  );
}
