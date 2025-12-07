'use client'

import { useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'
import { useMusic } from './MusicContext'

let isInitialized = false

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const retryCountRef = useRef(0)
  const maxRetries = 3
  const { sound, setSound, isMuted } = useMusic()
  const isMutedRef = useRef(isMuted)

  useEffect(() => {
    isMutedRef.current = isMuted
  }, [isMuted])

  useEffect(() => {
    if (hasStarted || isInitialized || typeof window === 'undefined') return

    isInitialized = true

    const sound = new Howl({
      src: ['/Leanin.mp3'],
      loop: true,
      volume: 0.05,
      autoplay: false,
      preload: true,
      html5: false,
      onplay: () => {
        setIsPlaying(true)
        setHasStarted(true)
        retryCountRef.current = 0
        if (!isMutedRef.current) {
          sound.fade(0, 0.05, 2000)
        }
      },
      onplayerror: () => {
        retryCountRef.current++
        if (retryCountRef.current <= maxRetries) {
          const delay = Math.pow(2, retryCountRef.current) * 1000
          sound.once('unlock', () => {
            setTimeout(() => {
              if (!hasStarted) sound.play()
            }, delay)
          })
        }
      },
    })

    setSound(sound)

    const startMusic = () => {
      try {
        sound.volume(0)
        sound.play()
        return true
      } catch {
        return false
      }
    }

    const handleUserInteraction = () => {
      if (!hasStarted && !isPlaying) {
        sound.once('unlock', () => {
          try {
            sound.volume(0)
            sound.play()
          } catch {
            // Silent fail
          }
        })
        try {
          sound.volume(0)
          sound.play()
        } catch {
          // Silent fail
        }
      }
    }

    const events = ['click', 'keydown', 'touchstart', 'scroll', 'mousemove', 'focus']
    const removeEventListeners = () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction)
        window.removeEventListener(event, handleUserInteraction)
      })
    }

    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true })
      window.addEventListener(event, handleUserInteraction, { once: true })
    })

    if (!startMusic()) {
      [500, 1000, 2000].forEach((delay) => {
        setTimeout(() => {
          if (!hasStarted && retryCountRef.current <= maxRetries) {
            startMusic()
          }
        }, delay)
      })
    }

    return removeEventListeners
  }, [hasStarted, setSound])

  useEffect(() => {
    if (!sound) return
    sound.volume(isMuted ? 0 : 0.05)
  }, [isMuted, sound])

  return null
}
