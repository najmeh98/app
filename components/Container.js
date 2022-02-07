import React from "react";
import styled, { css } from "styled-components";

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Style = {
  display: "flex",
  flexDirection: "columns",

  right: {
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    backgroundColor: "red",
  },
};
