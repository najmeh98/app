import styled, { css } from "styled-components";
import { desktop, notmobile } from "../utils/media";

export const ContentWrapper = styled.div`
  width: 1250px;
  max-width: calc(100% - 40px);
  margin: 0 auto;
  min-height: 100vh;
`;

export const MainContainer = styled.div`
  height: 100%;
  margin: 0px auto;
  /* overflow: hidden; */
  padding-bottom: 30px;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  //justify-content: flex-start;
  text-align: center;
`;
export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;
export const Flex_end = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const VerticalLine = styled.div`
  border-bottom: 1px solid rgb(239, 243, 244);
`;
