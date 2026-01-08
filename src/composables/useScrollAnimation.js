import { ref, onMounted, onUnmounted, nextTick } from 'vue'

export function useScrollAnimation() {
  const elementRef = ref(null)

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  }

  let observer = null

  onMounted(async () => {
    await nextTick()
    
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  })

  onUnmounted(() => {
    if (observer && elementRef.value) {
      observer.unobserve(elementRef.value)
    }
  })

  return { elementRef }
}

