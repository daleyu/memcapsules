import Image from "next/image";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import logo from "../public/images/logo.png";
import {
  Container,
  LogoContainer,
  Main,
  MainContent,
  MainContentConstrainWidth,
  Sidebar,
} from "./splitLayout.style";

interface Props {
  sidebar: ReactNode;
  main: ReactNode;
}

export function SplitLayout({ sidebar, main }: Props) {
  const router = useRouter();

  return (
    <Container>
      <Sidebar>{sidebar}</Sidebar>
      <Main>
        <MainContent>
          <MainContentConstrainWidth>{main}</MainContentConstrainWidth>
        </MainContent>
        <LogoContainer>
          <Image
            src={logo}
            layout="responsive"
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push("/");
            }}
          />
        </LogoContainer>
      </Main>
    </Container>
  );
}
