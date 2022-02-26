import React from "react";
import { Loading } from "./share/Loading";
import styled from "styled-components";
export const StandardButton = ({ loading, children, onClick }) => {
  return <Button onClick={onClick}>{loading ? <Loading /> : children}</Button>;
};

const Button = styled.button`
  color: #fff;
  background-color: rgb(29, 155, 240);
  border-radius: 20px;
  border: none;
  font-weight: bold;
  letter-spacing: 0.8px;
  padding: 10px 18px;
  //  width: 13%;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(26, 140, 216);
  }
`;

// export const StyledButton = styled.button`
//   width: ${({ width }) => width ?? "6rem"};
//   height: ${({ height }) => height ?? "2rem"};

//   font-size: ${({ fontSize }) => fontSize ?? "1rem"};

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   background-color: ${({ theme, type }) =>
//     type
//       ? type === "secondary"
//         ? theme.color.lightGray
//         : theme.button[type]
//       : theme.button.primary};
//   color: ${({ theme, type }) =>
//     type === "secondary" ? theme.color.gray : "#fff"};

//   border: 0;
//   border-radius: 10px;

//   transition: all 0.3s;

//   cursor: pointer;

//   ${mediaQueries.lgUp} {
//     &:hover {
//       background-color: ${({ theme, type }) =>
//         type === "secondary" ? theme.color.lightGray : theme.button.hover};
//     }
//   }

//   ${({ theme, type }) =>
//     type === "outline" &&
//     css`
//       background-color: white;
//       color: ${theme.color.green};
//       border: solid 1px ${theme.color.green};

//       ${mediaQueries.lgUp} {
//         &:hover {
//           background-color: ${theme.badge.bgGreen};
//         }
//       }
//     `};

//   ${({ disabled }) =>
//     disabled &&
//     css`
//       cursor: no-drop;
//     `};

//   ${({
//     mt,
//     mr,
//     mb,
//     ml,
//     mx,
//     my,
//     m,
//     pt,
//     pr,
//     pb,
//     pl,
//     px,
//     py,
//     p,
//     w,
//     h,
//     bg,
//     color,
//     display,
//     textAlign,
//     lineHeight,
//     gap,
//     order,
//   }) => css`
//     width: ${w};
//     height: ${h};

//     margin: ${m};
//     margin-right: ${mx};
//     margin-left: ${mx};
//     margin-top: ${my};
//     margin-bottom: ${my};
//     margin-top: ${mt};
//     margin-right: ${mr};
//     margin-bottom: ${mb};
//     margin-left: ${ml};

//     padding: ${p};
//     padding-right: ${px};
//     padding-left: ${px};
//     padding-top: ${py};
//     padding-bottom: ${py};
//     padding-top: ${pt};
//     padding-right: ${pr};
//     padding-bottom: ${pb};
//     padding-left: ${pl};

//     background: ${bg};
//     color: ${color};

//     text-align: ${textAlign};

//     line-height: ${lineHeight};

//     display: ${display};

//     gap: ${gap};
//     order: ${order};
//   `}
// `;
