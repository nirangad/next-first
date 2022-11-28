import Link from "next/link";
import styles from "../../styles/TanksList.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return { props: { tanks: data } };
};

const TankList = ({ tanks }: { tanks: any }) => {
  return (
    <>
      <h1>Welcome to Tanks List</h1>
      <div>
        {tanks.map((t: any) => {
          return (
            <div className={styles.tanks_list} key={t.id}>
              <span className={styles.name}>
                <Link href={`/tanks/${t.id}`}>{t.name}</Link>
              </span>
              <span className={styles.email}>
                {t.email} | <Link href={t.website}>{t.website}</Link>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TankList;
