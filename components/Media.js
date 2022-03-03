import React from "react";
import { Button } from "./Button/Button";
import { EmpjiIcon, GifIcon, MediaIcon } from "./Icons/Icons";
import { FlexRow } from "./share/Containers";
import { StandardButton } from "./StandardButton";

export default function Media() {
  return (
    <div style={{ display: "flex", alinItems: "center" }}>
      <label htmlFor="file-input" style={{ cursor: "pointer" }}>
        <Button icon>
          <MediaIcon />
        </Button>
      </label>
      <label htmlFor="file-input" style={{ cursor: "pointer" }}>
        <Button icon>
          <GifIcon />
        </Button>
      </label>
      <label htmlFor="file-input" style={{ cursor: "pointer" }}>
        <Button icon>
          <EmpjiIcon />
        </Button>
      </label>
    </div>
  );
}
