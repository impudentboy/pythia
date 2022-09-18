import styled from "styled-components";
import { WHITE, GRAY } from "./colors";

export const Heading = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 72px;
  text-transform: uppercase;
  color: ${WHITE};
  margin: 0;
`;

export const HeadingSection = styled(Heading)`
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 40px;
`;

export const Paragraph = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 496px;
  color: ${WHITE};
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.a`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  color: ${WHITE};
  text-decoration: none;
`;

export const PersonName = styled.span`
  position: relative;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: ${WHITE};
  text-transform: uppercase;
`;

export const PersonPost = styled(PersonName)`
  font-size: 16px;
  line-height: 20px;
  color: ${GRAY};
  text-align: center;
`;
