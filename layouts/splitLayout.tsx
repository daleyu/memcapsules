import { ReactNode } from "react";
import { Container, Main, Sidebar } from "./splitLayout.style";

interface Props {
  sidebar: ReactNode;
  main: ReactNode;
}

export function SplitLayout({ sidebar, main }: Props) {
  return (
    <Container>
      <Sidebar>{sidebar}</Sidebar>
      <Main>{main}</Main>
    </Container>
  );
}
