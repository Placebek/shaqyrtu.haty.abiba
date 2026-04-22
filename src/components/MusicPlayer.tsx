import React, { useEffect, useRef, useState } from 'react'
import styles from './MusicPlayer.module.css'
import music from '../assets/mp3/ak-koilek.mp3'

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.45
    audio.loop = true

    const tryPlay = () => {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }

    const onFirstInteraction = () => {
      tryPlay()
      window.removeEventListener('click', onFirstInteraction)
      window.removeEventListener('scroll', onFirstInteraction)
    }

    window.addEventListener('click', onFirstInteraction)
    window.addEventListener('scroll', onFirstInteraction)
    return () => {
      window.removeEventListener('click', onFirstInteraction)
      window.removeEventListener('scroll', onFirstInteraction)
    }
  }, [])

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <>
      <audio ref={audioRef} src={music} preload="auto" />
      <button
        className={`${styles.btn} ${visible ? styles.btnVisible : ''} ${playing ? styles.btnPlaying : ''}`}
        onClick={toggle}
        title={playing ? 'Музыканы тоқтату' : 'Музыканы қосу'}
      >
        <span className={styles.ring} />
        <span className={styles.icon}>
          {playing ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="3" y="2" width="3.5" height="12" rx="1" />
              <rect x="9.5" y="2" width="3.5" height="12" rx="1" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 2.5L13 8L4 13.5V2.5Z" />
            </svg>
          )}
        </span>
        <span className={styles.label}>{playing ? '' : 'ӘУЕН'}</span>
      </button>
    </>
  )
}

export default MusicPlayer
