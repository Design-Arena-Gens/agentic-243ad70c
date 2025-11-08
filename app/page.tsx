'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main style={{
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            borderRadius: '50%',
            background: `rgba(${100 + Math.random() * 155}, ${150 + Math.random() * 105}, 255, ${0.3 + Math.random() * 0.7})`,
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Globe representation */}
      <motion.div
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
          position: 'relative',
          boxShadow: '0 0 80px rgba(59, 130, 246, 0.6), inset 0 0 80px rgba(0, 0, 0, 0.5)',
          overflow: 'hidden'
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* Grid lines on globe */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`lat-${i}`}
            style={{
              position: 'absolute',
              width: '100%',
              height: '1px',
              background: 'rgba(255, 255, 255, 0.15)',
              top: `${(i + 1) * 12.5}%`,
              left: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`lon-${i}`}
            style={{
              position: 'absolute',
              width: '1px',
              height: '100%',
              background: 'rgba(255, 255, 255, 0.15)',
              left: `${(i + 1) * 8.33}%`,
              top: 0,
            }}
          />
        ))}

        {/* AI nodes on globe */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            style={{
              position: 'absolute',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#fff',
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* AI Neural network lines emanating from globe */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          style={{
            position: 'absolute',
            width: '2px',
            height: '150px',
            background: 'linear-gradient(to bottom, rgba(96, 165, 250, 0.8), transparent)',
            transformOrigin: 'center center',
            left: '50%',
            top: '50%',
          }}
          animate={{
            rotate: (i * 30) + 'deg',
            opacity: [0.3, 0.8, 0.3],
            scaleY: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{
          position: 'absolute',
          top: '15%',
          textAlign: 'center',
        }}
      >
        <motion.h1
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '2px',
            textShadow: '0 0 30px rgba(96, 165, 250, 0.5)',
          }}
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          AI COVERS
        </motion.h1>
        <motion.h1
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #60a5fa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '2px',
            marginTop: '10px',
          }}
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5,
          }}
        >
          THE WORLD
        </motion.h1>
      </motion.div>

      {/* Bottom text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '15%',
          textAlign: 'center',
        }}
      >
        <p style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '16px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
        }}>
          The Future is Now
        </p>
      </motion.div>

      {/* Orbiting elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orbit-${i}`}
          style={{
            position: 'absolute',
            width: `${400 + i * 80}px`,
            height: `${400 + i * 80}px`,
            border: '1px solid rgba(96, 165, 250, 0.15)',
            borderRadius: '50%',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            rotate: i % 2 === 0 ? 360 : -360,
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <motion.div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#60a5fa',
              boxShadow: '0 0 20px rgba(96, 165, 250, 0.8)',
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        </motion.div>
      ))}

      {/* Corner accents */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: '60px',
          height: '60px',
          borderTop: '3px solid #60a5fa',
          borderLeft: '3px solid #60a5fa',
        }}
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderTop: '3px solid #a78bfa',
          borderRight: '3px solid #a78bfa',
        }}
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.5,
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          width: '60px',
          height: '60px',
          borderBottom: '3px solid #ec4899',
          borderLeft: '3px solid #ec4899',
        }}
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1,
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderBottom: '3px solid #60a5fa',
          borderRight: '3px solid #60a5fa',
        }}
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1.5,
        }}
      />
    </main>
  )
}
