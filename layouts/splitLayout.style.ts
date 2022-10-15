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
`;

export const Main = styled.div`
  flex: 2;
`;
