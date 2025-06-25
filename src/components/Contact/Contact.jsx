import React from 'react'
import styles from "./Contact.module.css"
import { FaItchIo, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";


export const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
        <h2 className={styles.heading1}>Let's <span className={styles.tertiary}>talk!</span>
        </h2>
        <ul className={styles.social}>
            <li>
                <a href="mailto:felipeperezle@gmail.com" role="button" className={styles.button} target='_blank'>
                    <span className={styles.buttonText}>Email</span>
                    <span className={styles.buttonBoxIcon}>
                        <IoIosMail />
                    </span>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/felipeperezleal" role="button" className={styles.button} target='_blank'>
                    <span className={styles.buttonText}>LinkedIn</span>
                    <span className={styles.buttonBoxIcon}>
                        <FaLinkedinIn />
                    </span>
                </a>
            </li>
            <li>
                <a href="https://github.com/felipeperezleal" role="button" className={styles.button} target='_blank'>
                    <span className={styles.buttonText}>GitHub</span>
                    <span className={styles.buttonBoxIcon}>
                        <FaGithub />
                    </span>
                </a>
            </li>
        </ul>
        <footer className={styles.contactFooter}>
            <p className={styles.textNormal}>© Felipe Pérez Leal. 2025</p>
        </footer>
    </section>
  )
}
