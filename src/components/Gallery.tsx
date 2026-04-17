import React, { useEffect, useRef } from 'react'
import styles from './Gallery.module.css'

const PHOTOS = [
  { url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80', alt: 'Үйлену' },
  { url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80', alt: 'Той' },
  { url: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80', alt: 'Қызықты сәт' },
  { url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80', alt: 'Гүлдер' },
  { url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80', alt: 'Мерекелік' },
  { url: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80', alt: 'Сүйіспеншілік' },
]

const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.gallery-item').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0) scale(1)'
              }, i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.gallery} ref={sectionRef}>
      <div className={styles.titleBlock}>
        <p className={styles.label}>ЕСТЕЛІКТЕР</p>
        <h2 className={styles.title}>Сүйіспеншілік сәттері</h2>
      </div>

      <div className={styles.grid}>
        {PHOTOS.map((photo, i) => (
          <div
            key={i}
            className={`${styles.item} gallery-item`}
            style={{
              opacity: 0,
              transform: 'translateY(20px) scale(0.96)',
              transition: `opacity 0.6s ease, transform 0.6s ease`,
              gridColumn: i === 0 ? 'span 2' : 'span 1',
              gridRow: i === 0 ? 'span 2' : 'span 1',
            }}
          >
            <img src={photo.url} alt={photo.alt} className={styles.photo} />
            <div className={styles.photoOverlay} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
