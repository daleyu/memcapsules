import type { AppProps } from "next/app";
import "normalize.css";
import { BaseLayout } from "../layouts/baseLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
}

export default MyApp;
