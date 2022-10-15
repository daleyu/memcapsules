import styled from "styled-components";
import { Colors } from "../styles/tokens";

export const Sidebar = styled.div`
  flex: 1;
  background-color: ${Colors.offWhite};
  word-wrap: break-word;
  overflow: hidden;
  box-sizing: border-box;
`;
export const ProxyName = styled.p`
  width: 50px;
  font-family: Arial, Helvetica, sans-serif;
  height: 50px;
  border-radius: 50%;
  border: #dfd498 1px solid;
  color: white;
  background-color: #dfd498;
  font-size: 25px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
