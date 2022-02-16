/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Avatar = ({ src, ...props }) => {
  return (
    <div>
      <img
        src={src}
        alt="ProfilePhoto"
        width={50}
        height={50}
        style={{ borderRadius: "50px" }}
      />
    </div>
  );
};
