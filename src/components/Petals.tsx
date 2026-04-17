import React, { useEffect, useState } from 'react'

interface Petal {
  id: number
  left: string
  delay: string
  duration: string
  size: string
  symbol: string
}

const SYMBOLS = ['❋', '✿', '❀', '✦', '◆', '❖']

const Petals: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    const initial: Petal[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${10 + Math.random() * 15}s`,
      size: `${12 + Math.random() * 10}px`,
      symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
    }))
    setPetals(initial)
  }, [])

  return (
    <>
      {petals.map(p => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            bottom: '-30px',
            fontSize: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            color: p.id % 3 === 0 ? 'rgba(201,168,76,0.5)' : p.id % 3 === 1 ? 'rgba(155,123,91,0.35)' : 'rgba(201,168,76,0.3)',
          }}
        >
          {p.symbol}
        </span>
      ))}
    </>
  )
}

export default Petals
