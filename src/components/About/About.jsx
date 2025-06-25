import React from 'react'
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.about} id="about">
      <article className={styles.aboutBio}>
        <h2 className={styles.heading1}>About <span className={styles.primary}>me</span></h2>
        <p className={styles.textNormal}>I'm a Computing Systems Engineer from the National University of Colombia. I have worked on various projects in data technologies, web development, mobile applications, and cloud technologies.</p>
        <p className={styles.textNormal}>Each project has helped me grow and refine my skills in different areas of technology, giving me a wide range of experience.</p>
        <p className={styles.textNormal}>My passion lies in building innovative solutions that solve real-world problems. I am always eager to learn and explore new challenges!</p>
      </article>
    </section>
  )
}
