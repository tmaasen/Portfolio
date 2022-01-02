import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../public/images/TM_circle_logo.PNG";
import styles from "./Navbar.module.css";
import useWindowSize from "../../utils/windowSizer/windowSizer";

export default function Navbar() {
  const size = useWindowSize();
  const [toggled, setToggle] = useState(true);

  return (
    <div>
      <header className={styles.topnav}>
        {/* TM Icon */}
        <div className={styles.favicon}>
          <Link href="/">
            <a>
              <Image alt="logo" src={logo} width={50} height={50} />
            </a>
          </Link>
        </div>
        {/* Links */}
        {size.width <= 750 && (
          <span
            className={toggled ? styles.hamburgerMenu : styles.closebtn}
            onClick={() => setToggle(!toggled)}>
            {!toggled ? <>&times;</> : <>&#9776;</>}
          </span>
        )}
        <div
          id="myNav"
          className={
            toggled || size.width >= 750 ? styles.links : styles.mobileLinks
          }
          onClick={() => setToggle(!toggled)}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About Me</a>
          </Link>
          <Link href="/hobbies">
            <a>Hobbies</a>
          </Link>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </div>
      </header>
    </div>
  );
}
