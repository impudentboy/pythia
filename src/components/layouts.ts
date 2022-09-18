import styled from "styled-components";
import { BLACK, DARK_GREY, WHITE } from "./colors";

export const Body = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
  background: ${BLACK};
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 1024px;
`;

export const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 200px;
`;

export const SectionBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  column-gap: 16px;
  gap: 16px;
  margin-bottom: 40px;
`;

export const Controls = styled.div`
  position: relative;
  display: inline-flex !important;
  gap: 16px;
`;

export const Gallery = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const Menu = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px 0;
  gap: 24px;
`;

export const HeroBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeadingContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 200px;
`;

export const HeroDescription = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 54px;
  width: 664px;
  background-color: ${DARK_GREY};
  box-sizing: border-box;
`;

export const HeroBorder = styled.div`
  position: absolute;
  top: -27px;
  left: 27px;
  width: 100%;
  height: 100%;
  border: 2px solid ${WHITE};
`;
