import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import logo from "../../public/images/TM_circle_logo.PNG";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const size = useWindowSize()
  const [toggled, setToggle] = useState(true);
  
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

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
          <Link href="/about">
            <a>About Me</a>
          </Link>
          <Link href="/hobbies">
            <a>Hobbies</a>
          </Link>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
          <Link href="/contact">
            <a>Contact Me</a>
          </Link>
        </div>
      </header>
    </div>
  );
}
