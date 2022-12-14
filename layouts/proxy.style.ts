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
  background-color: ${Colors.OFF_WHITE};
  word-wrap: break-word;
  overflow: hidden;
  box-sizing: border-box;
`;

export const Main = styled.div`
  flex: 2;
  position: relative;
`;

export const SideContainer = styled.div`
  position: absolute;
  display: inline-block;
  left: 10px;
  top: 10px;
  flex-direction: row;
  white-space: pre-wrap;
  align-items: flex-start;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
`;

export const TextSideContainer = styled.div`
  position: relative;
  max-width: 33%;
  white-space: pre-wrap;
  display: inline-block;
  word-wrap: break-word;
  flex: 1;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
`;
