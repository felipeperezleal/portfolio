import React from 'react'
import styles from "./Projects.module.css"
import comprara from "../../../assets/comprara.jpeg"
import SaberPro from "../../../assets/saberpro.jpeg"
import NLP from "../../../assets/nlp.jpeg"
import Alumni from "../../../assets/alumni.jpeg"
import Tripster from "../../../assets/tripster.jpeg"
import Artisticall from "../../../assets/artisticall.jpeg"

export const Projects = () => {
  return (
    <section>
        <h2 className={styles.heading1}>
          Check out my <span className={styles.secondary}>work</span>
        </h2>
        <ul className={styles.projects}>
          <li className={styles.card}>
            <figure className={styles.cardPicture}>
              <img src={Tripster} alt="Tripster"/>
            </figure>
            <h3 className={styles.heading3}><a href="#">Tripster</a></h3>
            <ul className={styles.cardSkills}>
              <li className={styles.cardTag}>Go</li>
              <li className={styles.cardTag}>Flutter</li>
              <li className={styles.cardTag}>PostgreSQL</li>
              <li className={styles.cardTag}>GraphQL</li>
            </ul>
          </li>
          <li className={styles.card}>
              <figure className={styles.cardPicture}>
                  <img src={Artisticall} alt="Artisticall"/>
              </figure>
              <h3 className={styles.heading3}><a href="#">Artisticall</a></h3>
              <ul className={styles.cardSkills}>
                  <li className={styles.cardTag}>Kotlin</li>
                  <li className={styles.cardTag}>Firebase</li>
                  <li className={styles.cardTag}>Android</li>
              </ul>
          </li>
          <li className={styles.card}>
            <figure className={styles.cardPicture}>
              <img src={NLP} alt="NLP for Image Description"/>
            </figure>
            <h3 className={styles.heading3}><a href="#">NLP for Image Description</a></h3>
            <ul className={styles.cardSkills}>
              <li className={styles.cardTag}>Python</li>
              <li className={styles.cardTag}>spaCy</li>
              <li className={styles.cardTag}>NLP</li>
              <li className={styles.cardTag}>BART Model</li>
            </ul>
          </li>
          <li className={styles.card}>
              <figure className={styles.cardPicture}>
                  <img src={Alumni} alt="Data Engineering Pipeline for Alumni Data"/>
              </figure>
              <h3 className={styles.heading3}><a href="#">Data Engineering Pipeline for Alumni Data</a></h3>
              <ul className={styles.cardSkills}>
                  <li className={styles.cardTag}>Python</li>
                  <li className={styles.cardTag}>MongoDB</li>
                  <li className={styles.cardTag}>Pentaho</li>
                  <li className={styles.cardTag}>Django</li>
                  <li className={styles.cardTag}>PowerBI</li>
              </ul>
          </li>
          <li className={styles.card}>
              <figure className={styles.cardPicture}>
                  <img src={SaberPro} alt="Saber Pro Model"/>
              </figure>
              <h3 className={styles.heading3}><a href="#">Pruebas Saber Pro ML Model</a></h3>
              <ul className={styles.cardSkills}>
                  <li className={styles.cardTag}>Python</li>
                  <li className={styles.cardTag}>Deep Learning</li>
                  <li className={styles.cardTag}>scikit-learn</li>
              </ul>
          </li>
          <li className={styles.card}>
              <figure className={styles.cardPicture}>
                  <img src={comprara} alt="Comprara"/>
              </figure>
              <h3 className={styles.heading3}><a href="#">comprara!</a></h3>
              <ul className={styles.cardSkills}>
                  <li className={styles.cardTag}>HTML</li>
                  <li className={styles.cardTag}>CSS</li>
                  <li className={styles.cardTag}>Python</li>
                  <li className={styles.cardTag}>Django</li>
                  <li className={styles.cardTag}>PostgreSQL</li>
              </ul>
          </li>
        </ul>
    </section>
  )
}
