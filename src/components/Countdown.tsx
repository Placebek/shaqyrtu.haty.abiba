import React, { useEffect, useState } from 'react'
import { HorizontalBorder } from './Ornaments'
import styles from './Countdown.module.css'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const target = new Date('2026-07-25T13:00:00')
    const tick = () => {
      const now = new Date()
      const diff = target.getTime() - now.getTime()
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: timeLeft.days, label: 'КҮН' },
    { value: timeLeft.hours, label: 'САҒАТ' },
    { value: timeLeft.minutes, label: 'МИНУТ' },
    { value: timeLeft.seconds, label: 'СЕКУНД' },
  ]

  return (
    <section className={styles.countdown}>
      <div className={styles.container}>
        <p className={styles.label}>ТОЙҒА ДЕЙІН ҚАЛДЫ</p>
        <HorizontalBorder width={300} />

        <div className={styles.units}>
          {units.map((u, i) => (
            <React.Fragment key={u.label}>
              {i > 0 && <span className={styles.colon}>:</span>}
              <div className={styles.unit}>
                <div className={styles.valueBox}>
                  <span className={styles.value}>{String(u.value).padStart(2, '0')}</span>
                </div>
                <span className={styles.unitLabel}>{u.label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>

        <HorizontalBorder width={300} />
        <p className={styles.quote}>
          «Екі жүрек бір болған күн — мәңгілікке басталады»
        </p>
      </div>
    </section>
  )
}

export default Countdown
