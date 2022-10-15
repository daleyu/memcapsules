import styled from "styled-components";
import { Colors } from "../styles/tokens";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const Sidebar = styled.div`
  flex: 1;
  background-color: ${Colors.offWhite};
  word-wrap: break-word;
  overflow: hidden;
`;

export const Main = styled.div`
  flex: 2;
  position: relative;
`;

export const SideContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  flex-direction: row;
  align-items: flex-start;
`;

export const ImageSideContainer = styled.div`
  position: relative;
  height: 56px;
  width: 36px;
`;

export const TextSideContainer = styled.div`
  position: relative;
  word-wrap: break-word;
`;
