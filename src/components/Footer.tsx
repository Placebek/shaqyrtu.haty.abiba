import React from 'react'
import { KazakhOrnament, HorizontalBorder } from './Ornaments'
import styles from './Footer.module.css'

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={`${styles.bgPattern} ornament-bg`} />
    <div className={styles.container}>
      <KazakhOrnament size={100} opacity={0.25} />
      <HorizontalBorder width={300} />
      <div className={styles.names}>
        <span className={`${styles.name} gold-shimmer`}>Арман</span>
        <span className={styles.amp}>&</span>
        <span className={`${styles.name} gold-shimmer`}>Дильназ</span>
      </div>
      <p className={styles.date}>25 · 07 · 2026</p>
      <HorizontalBorder width={300} />
      <p className={styles.blessing}>
        Той иелері: Қуаныш пен Кенжегуль
      </p>
      <p className={styles.sub}>«Абиба» мейрамханасы · Сағат 13:00</p>
      <p className={styles.copy}>Бұл сайт сізге арнайы жасалды ♥</p>
    </div>
  </footer>
)

export default Footer
