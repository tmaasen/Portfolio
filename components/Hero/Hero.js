import Image from "next/image";
import hero from "../../public/images/headshot.png";
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <p className={styles.smaller}>Hi, I am</p>
        <br />
        <p className={styles.bigger}>
          Tanner Maasen
          <br />
          <span>Full-Stack Developer</span>
        </p>
      </div>
      <div className={styles.heroImage}>
        <Image alt="logo" src={hero} priority={true} />
      </div>
    </div>
  );
}
