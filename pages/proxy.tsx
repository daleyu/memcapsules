import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
        <link rel="icon" href={logo} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}></h1>
    </div>
  );
};

export default Home;
