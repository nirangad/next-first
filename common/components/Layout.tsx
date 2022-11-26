import Footer from "./Footer";
import NavBar from "./NavBar";
import styles from '../../styles/Layout.module.css'

const Layout = ({ children }: { children: any }) => {
  return (
    <div className={styles.layout}>
      <NavBar />
      {children}
      <div className={styles.footer}><Footer /></div>
    </div>
  );
};

export default Layout;
