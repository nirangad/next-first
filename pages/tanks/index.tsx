import styles from "../../styles/TanksList.module.css";

const TankList = () => {
  return (
  <>
    <h2>Welcome to Tanks List</h2>
    <ul className={styles.tanks_list}>
      <li>Tank #001</li>
      <li>Tank #002</li>
      <li>Tank #003</li>
      <li>Tank #004</li>
      <li>Tank #005</li>
      <li>Tank #006</li>
      <li>Tank #007</li>
      <li>Tank #008</li>
    </ul>
  </>);
}

export default TankList;