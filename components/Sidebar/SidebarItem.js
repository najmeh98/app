import styled, { css } from "styled-components";
import router, { Router } from "next/router";
import React, { useState } from "react";

export const SidebarItem = ({
  title,
  image,
  path,
  onClick,
  isActive,
  imageSelected,
}) => {
  return (
    <Items onClick={onClick} target="_blank" isActive={isActive}>
      {isActive ? imageSelected : image}
      <span>{title} </span>
    </Items>
  );
};
const Items = styled.div`
  display: flex;
  align-items: center;
  // padding-bottom: 30px;
  cursor: pointer;
  padding: 19px;
  span {
    padding-left: 16px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #000;
    ${({ isActive }) =>
      isActive &&
      css`
        font-weight: 700;
      `}
    &:hover {
      color: ${(p) => p.theme.colors.textColor};
      transition: color 200ms ease-in-out;
    }
  }
  &:hover {
    transition: color 100ms ease-in-out;
    color: ${(p) => p.theme.colors.textColor};
    background-color: ${(p) => p.theme.colors.backgeround};
    border-radius: 50px;
  }
`;
