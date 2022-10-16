import styled from "styled-components";
import { Colors } from "../styles/tokens";

const SmallDivider = styled.div`
  margin: 24px auto 24px auto;
  width: 40px;
  border-bottom: 8px dotted ${Colors.OFF_WHITE};
`;

const Divider = styled.div`
  margin: 24px auto 24px auto;
  width: 110px;
  border-bottom: 12px dotted ${Colors.PRIMARY};
  opacity: 0.6;
`;

interface Props {
  smallSize?: boolean;
}

export function FormDivider({ smallSize = false }: Props) {
  return smallSize ? <SmallDivider /> : <Divider />;
}
