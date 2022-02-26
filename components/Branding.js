import styled from "styled-components";
import { TwitterLogo } from "./home/icons/icons";

function Branding({ href }) {
  return (
    <Link href={href}>
      <TwitterLogo size={16} />
    </Link>
  );
}

const Link = styled.a`
  display: flex;
  align-items: center;
`;

export default Branding;
