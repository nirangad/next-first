import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Img404 from "../public/404_animation.gif";
import styles from "../styles/PageNotFound.module.css";

const PageNotFound = () => {

  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 2000);
  });

  return (
    <div className={styles.img}>
      <span>
        <Image src={Img404} alt={"404 - Page Not Found"} />
        <Link href="/" legacyBehavior><a className='btn'>Go back to Home</a></Link>
      </span>
    </div>
  );
};

export default PageNotFound;
