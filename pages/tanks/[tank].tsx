import styles from "../../styles/Tank.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    paths: data.map((d: any) => {
      return { params: { tank: `${d.id}` } };
    }),
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.tank;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const tank = await res.json();
  return {
    props: { tank },
  }
}

const Tank = ({ tank }: {tank: any}) => {
  return (
    <>
      <h1>Tank: {tank.name}</h1>
      <div className={styles.tank}>
        <span>Username: {tank.username}</span>
        <span>Email: {tank.email}</span>
        <span>Phone: {tank.phone}</span>
        <span>Website: {tank.website}</span>
      </div>
    </>
  );
};

export default Tank;
