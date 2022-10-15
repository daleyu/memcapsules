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
        <span className={styles.name}>
          <Image src={NAME} alt="name" />
        </span>
        <span className={styles.compose}>
          <Image src={COMPOSE} alt="compose" />
        </span>
        <form action="/action_page.php">
          <h1>Login Form</h1>
          <div className={styles.formcontainer}>
            <hr />
            <div className={styles.container}>
              <label for="uname">
                <strong>Name</strong>
              </label>
              <input type="text" placeholder="Enter Name" name="uname" required>
                {" "}
              </input>
              <label for="psw">
                <strong>Composer</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Composer"
                name="psw"
                required
              >
                {" "}
              </input>
            </div>
            <button type="submit">Commit</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Home;
