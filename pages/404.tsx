import Image from "next/image";
import Img404 from '../public/404_animation.gif';
import styles from '../styles/PageNotFound.module.css'

const PageNotFound = () => {
  return (
    <div className={styles.img}>
      <span><Image src={Img404} alt={'404 - Page Not Found'}/></span>
    </div>
  );
}

export default PageNotFound;