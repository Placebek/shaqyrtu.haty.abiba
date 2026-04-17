import React, { useEffect, useRef } from 'react'
import { KazakhOrnament, HorizontalBorder } from './Ornaments'
import styles from './Details.module.css'

const Details: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.reveal-el').forEach((el, i) => {
              el.style.animationDelay = `${i * 0.15}s`
              el.classList.add('animate-fade-up')
            })
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.details} ref={sectionRef}>
      <div className={`${styles.bgPattern} ornament-bg`} />

      <div className={styles.container}>
        <div className={`${styles.titleBlock} reveal-el`} style={{ opacity: 0 }}>
          <KazakhOrnament size={80} opacity={0.4} />
          <div>
            <p className={styles.sectionLabel}>ТОЙ ТУРАЛЫ</p>
            <h2 className={styles.sectionTitle}>Той мәліметтері</h2>
          </div>
          <KazakhOrnament size={80} opacity={0.4} />
        </div>

        <HorizontalBorder width={500} />

        <div className={styles.cards}>
          {/* Date card */}
          <div className={`${styles.card} reveal-el`} style={{ opacity: 0 }}>
            <div className={styles.cardIcon}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect x="4" y="8" width="32" height="28" rx="2" stroke="#C9A84C" strokeWidth="1.2" />
                <line x1="4" y1="16" x2="36" y2="16" stroke="#C9A84C" strokeWidth="1.2" />
                <line x1="13" y1="4" x2="13" y2="12" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="27" y1="4" x2="27" y2="12" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
                <text x="20" y="30" textAnchor="middle" fill="#C9A84C" fontSize="11" fontFamily="Cormorant Garamond">25</text>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Той күні</h3>
            <p className={styles.cardMain}>25 шілде, 2026</p>
            <p className={styles.cardSub}>Шаршы күн</p>
          </div>

          {/* Time card */}
          <div className={`${styles.card} reveal-el`} style={{ opacity: 0 }}>
            <div className={styles.cardIcon}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="15" stroke="#C9A84C" strokeWidth="1.2" />
                <line x1="20" y1="20" x2="20" y2="10" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="20" y1="20" x2="27" y2="24" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="20" cy="20" r="2" fill="#C9A84C" />
                {[0,30,60,90,120,150,180,210,240,270,300,330].map((a, i) => (
                  <line
                    key={i}
                    x1={20 + 13 * Math.sin(a * Math.PI / 180)}
                    y1={20 - 13 * Math.cos(a * Math.PI / 180)}
                    x2={20 + 15 * Math.sin(a * Math.PI / 180)}
                    y2={20 - 15 * Math.cos(a * Math.PI / 180)}
                    stroke="#C9A84C"
                    strokeWidth={i % 3 === 0 ? 1.5 : 0.8}
                  />
                ))}
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Басталу уақыты</h3>
            <p className={styles.cardMain}>13:00</p>
            <p className={styles.cardSub}>Дәл уақытында</p>
          </div>

          {/* Venue card */}
          <div className={`${styles.card} ${styles.cardWide} reveal-el`} style={{ opacity: 0 }}>
            <div className={styles.cardIcon}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 5 C14 5 9 10 9 16 C9 24 20 35 20 35 C20 35 31 24 31 16 C31 10 26 5 20 5 Z" stroke="#C9A84C" strokeWidth="1.2" fill="none" />
                <circle cx="20" cy="16" r="4" stroke="#C9A84C" strokeWidth="1" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Той өтетін орын</h3>
            <p className={styles.cardMain}>«Абиба» мейрамханасы</p>
            <p className={styles.cardSub}>Той залы</p>
            <a
              href="https://go.2gis.com/jH7z6"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.mapBtn} btn-outline`}
            >
              Картадан қарау
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details
