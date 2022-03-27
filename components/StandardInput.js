import React from "react";
import styled from "styled-components";

export const StandardInput = ({
  label,
  placeholder,
  value,
  setValue,
  style,
  width,
  onChange,
  search,
}) => {
  return (
    <form>
      <input
        style={{
          height: "40px",
          //  maxWidth: "60%",
          width: "100%",
          //maxWidth: "100%",
          border: "none",
          fontSize: "20px",
          marginLeft: "20px",
          borderRadius: "7px",
          border: "lightgray",
          outline: "none",
        }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        search
      />
    </form>
  );
};

const Input = styled.input`
  ${(p) =>
    p.search &&
    css`
      background-color: #eff3f4;
    `}
`;
