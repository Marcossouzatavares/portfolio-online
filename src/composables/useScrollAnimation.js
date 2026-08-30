import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/**
 * Revela uma seção com fade-up quando ela entra na viewport.
 * Respeita prefers-reduced-motion: nesse caso o conteúdo já nasce visível,
 * sem animação e sem depender do IntersectionObserver.
 */
export function useScrollAnimation() {
  const elementRef = ref(null)

  let observer = null

  onMounted(async () => {
    await nextTick()

    if (!elementRef.value) return

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      elementRef.value.classList.add('visible')
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    )

    observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { elementRef }
}
