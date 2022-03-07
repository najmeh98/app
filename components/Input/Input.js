import React from "react";
import styled from "styled-components";

export default function Input({
  type = "text",
  icon,
  placeholder,
  onFocus,
  onBlur,
}) {
  const InputComponent = type === "textarea" ? RealTextarea : RealInput;

  return (
    <Wrapper>
      {icon && <IconWrapper color>{icon}</IconWrapper>}
      <InputComponent
        onFocus={onFocus}
        onBlur={onBlur}
        type={type === "textarea" ? undefined : type}
        placeholder={placeholder}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* width: ${({ minHeight }) => (minHeight ? `${minHeight}px` : "0")}; */
  display: flex;
  align-items: center;
  /* background-color: rgba(0, 0, 0, 0); */
  // justify-cont ent: flex-end;
  /* border: 1px solid lightgray; */

  border-radius: 50px;
  background-color: rgb(239, 243, 244);
  width: 100%;
`;

const RealTextarea = styled.textarea`
  outline: none;
  background: none;
`;

const RealInput = styled.input`
  outline: none;
  height: 45px;
  padding: 12px;
  padding-left: 15%;
  font-size: 15px;
  border-radius: 50px;
  border: none;
  text-align: left;
  /* background-color: rgba(0, 0, 0, 0); */
  background-color: transparent;
  width: 100%;
  &::placeholder {
    font-family: ${(p) => p.theme.fontFamily};
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;

  /* left: 9px; */
`;
