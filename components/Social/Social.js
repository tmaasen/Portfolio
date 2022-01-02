import Image from "next/image";
import Link from "next/link";
import styles from "./Social.module.css";
import fb from "../../public/images/FB.png";
import instagram from "../../public/images/Insta.png";
import devpost from "../../public/images/devpost-64.png";
import linkedin from "../../public/images/LnkdIn.png";
import github from "../../public/images/GitHub/GitHub-Mark-120px-plus.png";
import useWindowSize from "../../utils/windowSizer/windowSizer";

export default function SocialLinks() {
  const size = useWindowSize();

  return (
    <>
      <footer className={styles.bottomnav}>
        {/* Links */}
        <div
          className={size.width >= 750 ? styles.social : styles.mobileSocial}>
          <Link target="_blank" passHref href={"https://www.facebook.com/tmaasen1/"}>
            <Image width={40} height={40} src={fb} alt="Facebook" />
          </Link>
          <Link passHref href={"https://www.instagram.com/tannermaasen648/"}>
            <Image width={40} height={40} src={instagram} alt="Instagram" />
          </Link>
          <Link passHref href={"https://www.linkedin.com/in/tannermaasen/"}>
            <Image width={40} height={40} src={linkedin} alt="LinkedIn" />
          </Link>
          <Link passHref href={"https://github.com/tmaasen/"}>
            <Image width={40} height={40} src={github} alt="GitHub" />
          </Link>
          <Link
            passHref
            href={
              "https://devpost.com/tmaasen?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav/"
            }>
            <Image width={40} height={40} src={devpost} alt="DevPost" />
          </Link>
        </div>
        <span className={styles.disclosure}>
          &copy; 2022 Tanner Maasen. All Rights Reserved.
        </span>
      </footer>
    </>
  );
}
