import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/proxy.module.css";
import logo from "../images/logo.png";
import NAME from "../images/name-button.png";
import COMPOSE from "../images/compose-button.png";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MemCapsules</title>
        <meta name="description" content="Hack Harvard" />
        <link rel="icon" href="../images/logo.png" />
      </Head>

      <main className={styles.main}>
        <span className={styles.logo}>
          <Image src={logo} alt="Logo" />
        </span>
      </main>
    </div>
  );
};

export default Home;
