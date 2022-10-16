import styled from "styled-components";
import { Breakpoints, Colors } from "../styles/tokens";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;

  @media (max-width: ${Breakpoints.MOBILE}) {
    flex-direction: column-reverse;
  }
`;

export const Sidebar = styled.div`
  flex: 1;
  background-color: ${Colors.OFF_WHITE};
  padding: 100px 40px 30px 30px;

  @media (max-width: ${Breakpoints.MOBILE}) {
    padding-top: 30px;
  }
`;

export const Main = styled.div`
  flex: 2;
  padding: 60px 30px 60px 30px;
  position: relative;
`;

export const MainContentConstrainWidth = styled.div`
  margin: 0 auto;
  max-width: 600px;
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 16px;
  top: 16px;
  width: 250px;
`;
