import { useRef, type MouseEvent } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'

interface UseTiltOptions {
  strength?: number
}

export function useTilt<T extends HTMLElement>({ strength = 8 }: UseTiltOptions = {}) {
  const ref = useRef<T>(null)

  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const springConfig = { stiffness: 200, damping: 22, mass: 0.4 }
  const rotateX = useSpring(useTransform(y, [0, 1], [strength, -strength]), springConfig)
  const rotateY = useSpring(useTransform(x, [0, 1], [-strength, strength]), springConfig)
  const glareX = useTransform(x, [0, 1], ['0%', '100%'])
  const glareY = useTransform(y, [0, 1], ['0%', '100%'])

  function onMouseMove(event: MouseEvent<T>) {
    const bounds = ref.current?.getBoundingClientRect()
    if (!bounds) return
    x.set((event.clientX - bounds.left) / bounds.width)
    y.set((event.clientY - bounds.top) / bounds.height)
  }

  function onMouseLeave() {
    x.set(0.5)
    y.set(0.5)
  }

  return { ref, rotateX, rotateY, glareX, glareY, onMouseMove, onMouseLeave }
}
