import Footer from "../common/components/Footer";
import NavBar from "../common/components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <NavBar />
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
      <span className={styles.item}><Footer/></span>
    </div>
  );
}
