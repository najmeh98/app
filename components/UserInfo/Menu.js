import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ArrowIcon } from "../Icons/Message";
import { useTheme } from "../Theme/ThemeContext";

export default function Menu({
  title,
  children,
  ArrowIcon,
  bottom,
  width,
  style,
}) {
  const [IsOpen, setIsOpen] = useState(false);
  let { theme } = useTheme();
  const handleMenu = (event) => {
    event.stopPropagation();
    setIsOpen(!IsOpen);
  };
  return (
    <Style_Menu style={{ fontSize: theme.fontSize.normal15 }}>
      <div style={{ maxWidth: "100%" }} onClick={handleMenu}>
        {title}
      </div>

      {IsOpen && (
        <div style={{ width: width, position: "fixed" }}>
          <StyleIcon>{ArrowIcon}</StyleIcon>
          <Menu_body style={style}>{children}</Menu_body>
        </div>
      )}
    </Style_Menu>
  );
}

const Menu_body = styled.div`
  width: 100%;

  border-radius: 16px;
  background-color: rgba(255, 255, 255, 1);
  display: block;
  box-shadow: rgb(101 119 134 / 20%) 0px 0px 15px,
    rgb(101 119 134 / 15%) 0px 0px 3px 1px;
  position: absolute;
`;

const Style_Menu = styled.div`
  width: 100%;
  position: relative;
  transition: box-shadow 100s background-color 100s;
`;

const StyleIcon = styled.div`
  position: absolute;
  top: -88px;
  transform: rotate(180deg);
  left: 7%;
  z-index: 1;
  filter: drop-shadow(rgb(207, 217, 222) 1px -1px 1px);
`;
