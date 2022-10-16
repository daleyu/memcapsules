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
  padding-left: 20px;
`;

export const SideText = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  font-weight: 700;
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
  text-align: center;
  font-size: 30px;
  margin-left: 50px;
`;

export const CenterDiv = styled.div`
  text-align: center;
`;

export const NextButton = styled.button`
  width: auto;
  display: flex;
  display: inline-block;
  text-align: center;
  padding: 9px 15px;
  background: #27b5e1;
  border: 0;
  font-size: 14px;
  color: #ffffff;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
`;
