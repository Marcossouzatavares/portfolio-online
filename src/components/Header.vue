<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-ink/90 backdrop-blur-sm border-b border-ink-line">
    <div class="container">
      <nav class="flex justify-between items-center py-4" aria-label="Navegação principal">
        <a
          href="#home"
          @click.prevent="scrollToSection('home')"
          class="font-display text-lg font-semibold text-paper"
        >
          Marcos<span class="text-accent">.</span>dev
        </a>
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            @click.prevent="scrollToSection(link.id)"
            class="relative text-body-sm transition-colors duration-200"
            :class="activeSection === link.id ? 'text-accent' : 'text-muted hover:text-paper'"
            :aria-current="activeSection === link.id ? 'true' : undefined"
          >
            {{ link.label }}
          </a>
        </div>
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-paper p-2 -mr-2"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Abrir menu de navegação"
        >
          <Icon :name="isMobileMenuOpen ? 'close' : 'menu'" class="w-6 h-6" />
        </button>
      </nav>
      <div
        v-if="isMobileMenuOpen"
        id="mobile-menu"
        class="md:hidden py-4 space-y-1 border-t border-ink-line"
      >
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          @click.prevent="handleMobileNavClick(link.id)"
          class="block text-body-base py-2.5 transition-colors duration-200"
          :class="activeSection === link.id ? 'text-accent' : 'text-muted hover:text-paper'"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useSmoothScroll } from '../composables/useSmoothScroll'
import Icon from './Icon.vue'

const { scrollToSection } = useSmoothScroll()
const isMobileMenuOpen = ref(false)
const activeSection = ref('home')

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Sobre Mim' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'portfolio', label: 'Projetos' },
  { id: 'contact', label: 'Contato' }
]

let observer = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 })

  navLinks.forEach((link) => {
    const el = document.getElementById(link.id)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleMobileNavClick = (sectionId) => {
  scrollToSection(sectionId)
  isMobileMenuOpen.value = false
}
</script>
