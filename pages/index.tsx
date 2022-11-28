import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tank List | Home</title>
        <meta name="keywords" content="tanks" />
      </Head>
      <div className={styles.home}>
        <h1>Home page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          dolor quasi soluta numquam optio ea, adipisci quam dolorem iste, ipsa,
          voluptates corrupti ratione officia voluptatibus unde distinctio.
          Molestias, cum facere?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          dolor quasi soluta numquam optio ea, adipisci quam dolorem iste, ipsa,
          voluptates corrupti ratione officia voluptatibus unde distinctio.
          Molestias, cum facere?
        </p>
      </div>
    </>
  );
}
