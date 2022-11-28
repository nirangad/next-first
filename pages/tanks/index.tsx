import Link from "next/link";
import styles from "../../styles/TanksList.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return { props: { tanks: data } };
};

const TankList = ({tanks}: {tanks: any}) => {
  return (
    <>
      <h1>Welcome to Tanks List</h1>
      <ul className={styles.tanks_list}>
        {tanks.map((t: any) => {
          return (
            <div key={t.id}>
              <span><Link href={`/tanks/${t.id}`}>{t.name}</Link></span>
              <span>{t.email}</span>
            </div>
          )
        })}
      </ul>
    </>
  );
};

export default TankList;
