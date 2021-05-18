import { useState } from "react";
import styles from "../styles/navbar.module.scss";
import Link from "next/link";
import axios from "axios";

export default function Navbar({ data }) {
  const [openNav, setOpenNav] = useState(true);

  return (
    <nav className={openNav ? styles.navOpen : styles.navClose}>
      <div
        className={styles.hamburgerContainer}
        onClick={() => setOpenNav(!openNav)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {openNav ? (
        <div className={styles.linkContainer}>
          <Link href="/">
            <a>{data.link1}</a>
          </Link>
          <Link href="/posts">
            <a>{data.link2}</a>
          </Link>
          <Link href="/about">
            <a>{data.link3}</a>
          </Link>
        </div>
      ) : null}
    </nav>
  );
}
