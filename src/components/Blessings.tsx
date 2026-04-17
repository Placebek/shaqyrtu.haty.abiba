import React, { useEffect, useRef, useState } from 'react'
import { HorizontalBorder } from './Ornaments'
import styles from './Blessings.module.css'

const BLESSINGS = [
  {
    kaz: '«Жүрек тапқан жолдасын — өмір бойы ұстасын, береке толған шаңырақта — бақыт мәңгі қалсын»',
    sub: 'Қазақ батасы',
  },
  {
    kaz: '«Екі жүрек бір болған күн — дүние гүлдей жайнайды, сүйіспеншілікпен тіккен үй — мәңгілікке тұрады»',
    sub: 'Халық нақылы',
  },
  {
    kaz: '«Аман болсын шаңырақтарың, береке толсын үйлерің, ұрпақтарың өссін — ата-ана қуанышы болсын»',
    sub: 'Ата-ана батасы',
  },
]

const Blessings: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const id = setInterval(() => {
      setActive(prev => (prev + 1) % BLESSINGS.length)
    }, 4500)
    return () => clearInterval(id)
  }, [visible])

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={`${styles.bgPattern} ornament-bg`} />

      <div className={styles.container}>
        <div className={`${styles.header} ${visible ? styles.visible : ''}`}>
          <p className={styles.label}>БАТА</p>
          <h2 className={styles.title}>Жас жұбайларға тілек</h2>
          <HorizontalBorder width={300} />
        </div>

        <div className={styles.quoteWrap}>
          {BLESSINGS.map((b, i) => (
            <div
              key={i}
              className={`${styles.quote} ${i === active ? styles.quoteActive : styles.quoteHidden}`}
            >
              <div className={styles.ornLine} />
              <p className={styles.quoteText}>{b.kaz}</p>
              <div className={styles.ornLine} />
              <span className={styles.quoteSub}>{b.sub}</span>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {BLESSINGS.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        <div className={`${styles.cards} ${visible ? styles.cardsVisible : ''}`}>
          {[
            { icon: '🎵', title: 'Ән мен би', desc: 'Ұлттық музыка және би' },
            { icon: '🍽️', title: 'Дастархан', desc: 'Дәстүрлі қазақ тағамдары' },
            { icon: '🌿', title: 'Дәстүр', desc: 'Ұлттық салт-дәстүрлер' },
          ].map((card, i) => (
            <div key={i} className={styles.card} style={{ animationDelay: `${i * 0.15 + 0.3}s` }}>
              <span className={styles.cardIcon}>{card.icon}</span>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blessings
