import { ReactNode } from "react";
import styled from "styled-components";
import { Colors } from "../styles/tokens";

const LabelText = styled.p<{ largeSize: boolean; primary: boolean }>`
  color: ${(p) => (p.primary ? Colors.PRIMARY : Colors.DARK_TEXT)};
  font-size: ${(p) => (p.largeSize ? 24 : 18)}px;
  font-weight: bold;
  margin-bottom: 12px;
`;

interface Props {
  kind?: "primary" | "secondary";
  largeSize?: boolean;
  children?: ReactNode;
}

export function InputLabel({
  kind = "primary",
  largeSize = false,
  children,
}: Props) {
  return (
    <LabelText largeSize={largeSize} primary={kind === "primary"}>
      {children}
    </LabelText>
  );
}
