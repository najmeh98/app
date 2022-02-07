import styled, { css } from "styled-components";
import router, { Router } from "next/router";
import React, { useState } from "react";

export const SidebarItem = ({ title, image, path, onClick, isActive }) => {
  return (
    <Items onClick={onClick} target="_blank" isActive={isActive}>
      {image}
      <span>{title} </span>
    </Items>
  );
};
const Items = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 36px;
  cursor: pointer;
  span {
    padding-left: 20px;
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
  }
`;
