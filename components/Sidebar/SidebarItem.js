import styled, { css } from "styled-components";
import router, { Router } from "next/router";
import React, { useState } from "react";
import { desktop, tablet } from "../utils/media";
import { LinkButton } from "../Button/Button";
import { Link } from "next/link";

export const SidebarItem = ({
  title,
  image,
  path,
  onClick,
  href,
  isActive,
  imageSelected,
}) => {
  return (
    <Items onClick={onClick} isActive={isActive} href={href}>
      <Hover>
        {isActive ? imageSelected : image}

        <Span isActive={isActive}>{title} </Span>
      </Hover>
    </Items>
  );
};
const Items = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 4px;
  overflow: hidden;
  cursor: pointer;
  ${desktop(css`
    /* width: 230px; */
  `)}
  div {
    &:hover {
      transition: color 100ms ease-in-out;
      background-color: rgba(15, 20, 25, 0.1);
      border-radius: 50px;
    }
  }
`;

const Span = styled.span`
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

  ${desktop(css`
    display: none;
  `)}
`;

const Hover = styled.div`
  padding: 13px;
  display: flex;
  align-items: center;
`;
