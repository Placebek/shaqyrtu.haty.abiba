import React, { useEffect, useRef } from 'react'
import { KazakhOrnament, OrnamentCorner, HorizontalBorder } from './Ornaments'
import styles from './Hero.module.css'

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Parallax on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const xRatio = (clientX / innerWidth - 0.5) * 20
      const yRatio = (clientY / innerHeight - 0.5) * 20
      const ornaments = containerRef.current.querySelectorAll<HTMLElement>('.parallax-el')
      ornaments.forEach((el, i) => {
        const depth = (i % 3 + 1) * 0.3
        el.style.transform = `translate(${xRatio * depth}px, ${yRatio * depth}px)`
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToRSVP = () => {
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero} ref={containerRef}>
      {/* Background pattern */}
      <div className={`${styles.bgPattern} ornament-bg`} />

      {/* Corner ornaments */}
      <div className={`${styles.cornerTL} parallax-el`}>
        <OrnamentCorner />
      </div>
      <div className={`${styles.cornerTR} parallax-el`}>
        <OrnamentCorner flip />
      </div>
      <div className={`${styles.cornerBL} parallax-el`} style={{ transform: 'scaleY(-1)' }}>
        <OrnamentCorner />
      </div>
      <div className={`${styles.cornerBR} parallax-el`} style={{ transform: 'scale(-1,-1)' }}>
        <OrnamentCorner />
      </div>

      {/* Floating ornaments */}
      <div className={`${styles.floatOrnLeft} parallax-el`}>
        <KazakhOrnament size={200} opacity={0.08} />
      </div>
      <div className={`${styles.floatOrnRight} parallax-el`}>
        <KazakhOrnament size={160} opacity={0.06} />
      </div>

      {/* Hero photo background with overlay */}
      <div className={styles.photoBg}>
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80"
          alt="Wedding"
          className={styles.photoImg}
        />
        <div className={styles.photoOverlay} />
      </div>

      {/* Main content */}
      <div className={styles.content}>
        {/* Hosts */}
        <p className={`${styles.hosts} animate-fade-up delay-1`} style={{ opacity: 0 }}>
          Қуаныш пен Кенжегуль
        </p>
        <p className={`${styles.hostsSub} animate-fade-up delay-2`} style={{ opacity: 0 }}>
          балаларының той — шашуына шақырады
        </p>

        <div className={`animate-fade-up delay-2`} style={{ opacity: 0 }}>
          <HorizontalBorder width={300} />
        </div>

        {/* Names */}
        <div className={`${styles.namesWrapper} animate-fade-up delay-3`} style={{ opacity: 0 }}>
          <KazakhOrnament size={60} opacity={0.5} />
          <div className={styles.names}>
            <span className={`${styles.nameGroom} gold-shimmer`}>Арман</span>
            <span className={styles.nameAmpersand}>&</span>
            <span className={`${styles.nameBride} gold-shimmer`}>Дильназ</span>
          </div>
          <KazakhOrnament size={60} opacity={0.5} />
        </div>

        <div className={`animate-fade-up delay-3`} style={{ opacity: 0 }}>
          <HorizontalBorder width={300} />
        </div>

        {/* Date */}
        <div className={`${styles.dateWrapper} animate-fade-up delay-4`} style={{ opacity: 0 }}>
          <div className={styles.dateBlock}>
            <span className={styles.dateNum}>25</span>
            <span className={styles.dateSep}>·</span>
            <span className={styles.dateNum}>07</span>
            <span className={styles.dateSep}>·</span>
            <span className={styles.dateNum}>2026</span>
          </div>
          <p className={styles.dateLabel}>ШІЛДЕ · СЕНБІ КҮНІ</p>
        </div>

        {/* CTA */}
        <div className={`${styles.ctaWrapper} animate-fade-up delay-5`} style={{ opacity: 0 }}>
          <button className="btn-gold" onClick={scrollToRSVP}>
            Келетінімді растаймын
          </button>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollLine} />
          <span className={styles.scrollText}>ТӨМЕН ҚАРАЙ</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
