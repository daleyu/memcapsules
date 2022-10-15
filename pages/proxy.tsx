import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/proxy.module.css";
import logo from "../images/logo.png";
import NAME from "../images/name-button.png";
import COMPOSE from "../images/compose-button.png";
import CONFIRM from "../images/confirm.png";

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
        <span className={styles.name}>
          <Image src={NAME} alt="name" />
        </span>
        <span className={styles.compose}>
          <Image src={COMPOSE} alt="compose" />
        </span>
        <form action="/" method="post">
          <label htmlFor="first">Name:</label>
          <input
            type="text"
            className={styles.nameinfo}
            id="first"
            name="first"
          />
          <label htmlFor="composer">Composer:</label>
          <input
            type="text"
            className={styles.composerinfo}
            id="last"
            name="last"
          />
          <button type="submit" className={styles.confirm}>
            {" "}
            Confirm <Image src={CONFIRM} alt="confirm" />{" "}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Home;
