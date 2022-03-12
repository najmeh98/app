import { css } from "styled-components";

export const mobile = (inner) => css`
  @media (max-width: 800px) {
    ${inner};
  }
`;

export const notmobile = (inner) => css`
  @media (min-width: 500px) {
    ${inner};
  }
`;
export const desktop = (body) => css`
  @media (max-width: 1300px) {
    ${body};
  }
`;
export const largeDescktop = (body) => css`
  @media (min-width: 1400px) {
    ${body};
  }
`;

export const tablet = (inner) => css`
  @media (min-width: 500px) and (max-width: 1270px) {
    ${inner};
  }
`;
