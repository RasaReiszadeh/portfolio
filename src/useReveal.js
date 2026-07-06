import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.08 }
    )
    const els = ref.current?.querySelectorAll('.reveal') ?? []
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return ref
}
