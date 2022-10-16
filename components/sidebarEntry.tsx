import styled from "styled-components";
import { Colors } from "../styles/tokens";

const Container = styled.div<{ active: boolean }>`
  width: 100%;
  text-align: right;

  padding: 8px 24px 8px 0;
  border-right: 4px solid
    ${(p) => (p.active ? Colors.PRIMARY : Colors.DARK_TEXT)};
  margin-bottom: 30px;

  transition: border-right-width 0.1s ease-in-out;

  cursor: pointer;

  :hover {
    border-right-width: 12px;
  }
`;

const Title = styled.h1`
  margin: 0 0 8px 0;
  color: ${Colors.DARK_TEXT};
  font-size: 36px;
  font-weight: bold;
`;

const Description = styled.p`
  margin: 0;
  color: ${Colors.DARK_TEXT};
  font-size: 20px;
`;

interface Props {
  active: boolean;
  title: string;
  description: string;
  onClick?: () => void;
}

export default function SidebarEntry({
  active,
  title,
  description,
  onClick,
}: Props) {
  return (
    <Container active={active} onClick={onClick}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
