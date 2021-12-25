import Image from "next/image";
import hero from "../public/images/hero.png";
import logo from "../public/images/TM_circle_logo.PNG";

export default function Home() 
{
  function openMenu() {
    document.getElementById("hMenu").classList.toggle("active")
    document.getElementById("links").classList.toggle("active")
  }
  
  return (
    <div>
      <header className="topnav">
        <div className="favicon">
          <a href="index.html">
            <Image alt="logo" src={logo} width={50} height={50} />
          </a>
        </div>
        <div id="hMenu" className="hamburgerMenu" onClick={openMenu}></div>
        <ul id="links" className="links">
          <li>
            <a className="nav-item" href="about.html">
              About Me
            </a>
          </li>
          <li>
            <a className="nav-item" href="skills.html">
              Skills
            </a>
          </li>
          <li>
            <a className="nav-item" href="portfolio.html">
              Portfolio
            </a>
          </li>
          <li>
            <a className="nav-item" href="contact.html">
              Contact Me
            </a>
          </li>
        </ul>
      </header>
      <div className="hero">
        <div className="heroText">
          <p className="smaller">Hi, I am</p>
          <br />
          <p className="bigger">
            Tanner Maasen
            <br />
            <span>Full-Stack Developer</span>
          </p>
        </div>
        <div className="heroImage">
          <Image alt="logo" src={hero} />
        </div>
      </div>
    </div>
  );
}
