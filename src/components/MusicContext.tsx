'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Howl } from 'howler'

interface MusicContextType {
  sound: Howl | null
  setSound: (sound: Howl | null) => void
  isMuted: boolean
  toggleMute: () => void
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

export function MusicProvider({ children }: { children: ReactNode }) {
  const [sound, setSound] = useState<Howl | null>(null)
  const [isMuted, setIsMuted] = useState(false)

  const toggleMute = () => {
    setIsMuted(prev => {
      const newMuted = !prev
      if (sound) {
        sound.volume(newMuted ? 0 : 0.05)
      }
      return newMuted
    })
  }

  return (
    <MusicContext.Provider value={{ sound, setSound, isMuted, toggleMute }}>
      {children}
    </MusicContext.Provider>
  )
}

export function useMusic() {
  const context = useContext(MusicContext)
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider')
  }
  return context
}

