import { Link } from "next/link";
import styled, { css } from "styled-components";
import { desktop, tablet } from "../utils/media";

const BaseButton = ({ children, ...props }) => {
  return <button {...props}> {children}</button>;
};

export const LinkButton = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <a>{children}</a>
    </Link>
  );
};

export const Button = ({ children, isLiked, icon, color, ...props }) => {
  //  const Comp = props.href ? LinkButton : BaseButton;

  return (
    <ButtonWrapper {...props} icon>
      {children}
    </ButtonWrapper>
  );
};

export const CustomLink = ({ children, href, ...props }) => {
  return (
    <link href={href}>
      <a>{children}</a>
    </link>
  );
};

const ButtonWrapper = styled.button`
  background: transparent;

  border: none;
  //display: flex;
  align-items: center;
  justify-content: center;
  ${(p) =>
    p.icon &&
    css`
      color: rgba(29, 161, 242, 1);
      font-size: 22px;
      cursor: pointer;
      border-radius: 99px;
      padding: 8px;

      &:hover {
        background-color: rgba(29, 161, 242, 0.1);
      }
    `}
  ${(p) =>
    p.new &&
    css`
      background-color: rgb(29, 155, 240);
      box-shadow: rgb(0 0 0 / 8%) 0px 8px 28px;
      transition-duration: 0.2s;
      display: flex;
      min-width: 52px;
      min-height: 52px;
      color: #fff;
      &:hover {
        background-color: rgba(26, 140, 216);
      }
      /* ${tablet(css`
        display: block;
      `)} */
    `}
`;
