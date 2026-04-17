import React from 'react'

interface OrnamentProps {
  size?: number
  opacity?: number
  className?: string
  style?: React.CSSProperties
}

export const KazakhOrnament: React.FC<OrnamentProps> = ({
  size = 120,
  opacity = 0.6,
  className = '',
  style = {}
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity, ...style }}
  >
    {/* Outer ring */}
    <circle cx="60" cy="60" r="55" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5" />
    {/* Shamsha - 8-pointed star */}
    <path
      d="M60 10 L65 45 L95 30 L72 55 L105 60 L72 65 L95 90 L65 75 L60 110 L55 75 L25 90 L48 65 L15 60 L48 55 L25 30 L55 45 Z"
      stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.7"
    />
    {/* Inner geometry - Kazakh tumar */}
    <path
      d="M60 30 L72 50 L95 50 L78 64 L85 85 L60 72 L35 85 L42 64 L25 50 L48 50 Z"
      stroke="#C9A84C" strokeWidth="0.6" fill="rgba(201,168,76,0.05)" opacity="0.8"
    />
    {/* Center cross ornament */}
    <line x1="60" y1="40" x2="60" y2="80" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5" />
    <line x1="40" y1="60" x2="80" y2="60" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5" />
    {/* Corner ornaments */}
    <path d="M60 52 Q68 60 60 68 Q52 60 60 52" stroke="#C9A84C" strokeWidth="0.6" fill="rgba(201,168,76,0.1)" />
    {/* Dots */}
    {[0,45,90,135,180,225,270,315].map((angle, i) => {
      const r = 42
      const x = 60 + r * Math.cos((angle * Math.PI) / 180)
      const y = 60 + r * Math.sin((angle * Math.PI) / 180)
      return <circle key={i} cx={x} cy={y} r="2" fill="#C9A84C" opacity="0.6" />
    })}
    {/* Center dot */}
    <circle cx="60" cy="60" r="4" fill="#C9A84C" opacity="0.8" />
    <circle cx="60" cy="60" r="2" fill="#E8C97A" />
  </svg>
)

export const OrnamentCorner: React.FC<{ flip?: boolean; style?: React.CSSProperties }> = ({ flip, style }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: flip ? 'scaleX(-1)' : 'none', opacity: 0.5, ...style }}
  >
    <path d="M5 5 L5 45 Q5 50 10 50 L50 50" stroke="#C9A84C" strokeWidth="1" />
    <path d="M5 15 Q20 15 20 30 L20 50" stroke="#C9A84C" strokeWidth="0.6" opacity="0.6" />
    <path d="M15 5 Q15 20 30 20 L50 20" stroke="#C9A84C" strokeWidth="0.6" opacity="0.6" />
    <circle cx="5" cy="5" r="3" fill="#C9A84C" opacity="0.8" />
    <circle cx="50" cy="50" r="2" fill="#C9A84C" opacity="0.5" />
    <path d="M8 30 Q20 28 28 18" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
    {/* Kazakh teardrop motif */}
    <path d="M25 40 Q30 35 35 40 Q30 48 25 40 Z" stroke="#C9A84C" strokeWidth="0.5" fill="rgba(201,168,76,0.1)" />
  </svg>
)

export const HorizontalBorder: React.FC<{ width?: number }> = ({ width = 400 }) => (
  <svg
    width={width}
    height="20"
    viewBox={`0 0 ${width} 20`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity: 0.6 }}
  >
    <line x1="0" y1="10" x2={width} y2="10" stroke="#C9A84C" strokeWidth="0.5" />
    {Array.from({ length: Math.floor(width / 40) }, (_, i) => {
      const x = 20 + i * 40
      return (
        <g key={i}>
          <rect x={x - 4} y={6} width="8" height="8" fill="none" stroke="#C9A84C" strokeWidth="0.6" transform={`rotate(45 ${x} 10)`} />
          <circle cx={x} cy={10} r="1.5" fill="#C9A84C" />
        </g>
      )
    })}
  </svg>
)
