import React from "react";
import { Button } from "./Button/Button";
import { EmpjiIcon, GifIcon, MediaIcon, ShareICon } from "./Icons/Icons";
import { FlexRow } from "./share/Containers";
import { StandardButton } from "./StandardButton";
import styled, { css } from "styled-components";
export default function Media() {
  return (
    <div style={{ display: "flex", alingItems: "center" }}>
      <Button icon>
        <MediaIcon />
      </Button>
      <Button icon>
        <GifIcon />
      </Button>
      <Button icon>
        <EmpjiIcon />
      </Button>
      {/* <ShareICon /> */}
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 12px;
  flex-direction: row;
`;
