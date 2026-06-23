import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-in') }) },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.domus-reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  })
}
