import styled from "styled-components";
import { WHITE, GRAY } from "./colors";

export const Button = styled.a`
  position: relative;
  display: inline-flex;
  padding: 16px;
  color: ${WHITE};
  border: 1px solid #ffffff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-transform: uppercase;
  text-decoration: none;
  :hover {
    color: ${GRAY};
    border-color: ${GRAY};
  }
`;

export const Image = styled.img`
  position: relative;
  display: block;
  width: 256px;
  height: 360px;
  border: none;
`;

export const HeroImage = styled.img`
  position: absolute;
  top: -36px;
  right: -100px;
  width: 500px;
  height: 500px;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: block;
  width: 256px;
  height: 360px;
  background: white;
  border: none;

  :hover div {
    display: flex;
  }
`;

export const PersonDescription = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  top: -20px;
  left: -20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: rgba(30, 30, 30, 0.2);
  border: 2px solid #d9d9d9;
  padding: 32px;
  column-gap: 8px;
`;
