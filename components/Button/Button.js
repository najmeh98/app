import { Link } from "next/link";
import styled, { css } from "styled-components";

const BaseButton = ({ children, ...props }) => {
  return <button {...props}> {children}</button>;
};

const LinkButton = ({ href, ...props }) => {
  return (
    <Link to={href} {...props}>
      {children}
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

const ButtonWrapper = styled.button`
  background: transparent;
  border: none;
  display: flex;
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
`;
