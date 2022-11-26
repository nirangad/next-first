import styles from '../../styles/NavBar.module.css'
import Image from 'next/image';
import CCLogo from '../../public/CCLogo.svg';

import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className={styles.nav_bar}>
      <div className={styles.nav_logo}>
      <Image width={90} src={CCLogo} alt={'CarvingCulture Logo'}/>
      </div>
      <div className={styles.nav_item}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/tanks'>Tank Listing</Link>
      </div>
    </nav>
  );
};

export default NavBar;
