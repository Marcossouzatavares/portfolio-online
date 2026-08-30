export function useSmoothScroll() {
  const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId)
    if (!targetElement) return

    // Se a seção-alvo ainda não foi revelada pelo IntersectionObserver, ela está com um
    // transform de entrada aplicado — o navegador usa a posição JÁ transformada para
    // calcular o scrollIntoView, e como a transição anima a partir do valor antigo,
    // só remover a classe não basta: é preciso cortar a transição antes de medir.
    targetElement.style.transition = 'none'
    targetElement.classList.add('visible')
    void targetElement.offsetHeight // força reflow com o transform já zerado


    // scroll-mt-* no CSS de cada seção já compensa a altura do header fixo,
    // então scrollIntoView cobre tanto o clique no menu quanto navegação por hash.
    targetElement.scrollIntoView({
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'start',
    })

    requestAnimationFrame(() => {
      targetElement.style.transition = ''
    })
  }

  return { scrollToSection }
}
