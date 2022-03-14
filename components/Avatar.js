/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Avatar = ({ src }) => {
  return (
    <>
      <img
        src={src ? src : "/images/default profile.jpg"}
        alt="ProfilePhoto"
        width={50}
        height={50}
        style={{ borderRadius: "50px" }}
      />
    </>
  );
};
