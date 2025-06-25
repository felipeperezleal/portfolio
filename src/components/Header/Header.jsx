import React, {useState} from 'react'
import styles from "./Header.module.css"
import { FaAngleDoubleDown } from "react-icons/fa";

export const Header = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <div>
          <a className={styles.navbarLogo} href="/" role="link">
            <img src="#" className={styles.textNormal} alt="Felipe Pérez Leal" />
          </a>
        </div>
        <a href="#contact" className={styles.textNormal}>Contact</a>
      </nav>

      <div className={styles.intro}>
        <h1 className={styles.heading1}>
          Hey there! I'm <span className={styles.primary}>Felipe</span>, a
          software engineer from <span className={styles.secondary}>Colombia</span>. 
          Keep scrolling to know more <span className={styles.tertiary}>about me </span>
        </h1>
      </div>
      <div className={styles.arrow}>
        <a href="#about" role="button" className={styles.arrowButton}>
            <FaAngleDoubleDown />
        </a>
      </div>
    </header>
  )
}
