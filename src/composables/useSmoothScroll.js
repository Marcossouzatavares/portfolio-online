export function useSmoothScroll() {
  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId)
    if (targetElement) {
      const headerOffset = document.querySelector('.header')?.offsetHeight || 0
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return { scrollToSection }
}

