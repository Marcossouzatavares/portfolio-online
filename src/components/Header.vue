<template>
  <header class="fixed top-0 left-0 w-full z-50 glass border-b border-white/10 relative overflow-hidden">
    <!-- Tech Effect -->
    <div class="absolute inset-0 opacity-[0.08] pointer-events-none">
      <div class="absolute inset-0" style="background-image: linear-gradient(rgba(0, 191, 255, 0.4) 1px, transparent 1px); background-size: 100% 3px;"></div>
      <!-- Scanning line effect -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-1 animate-pulse" style="animation-duration: 3s;"></div>
    </div>
    <div class="container relative z-10">
      <nav class="flex justify-between items-center py-3 md:py-5">
        <a 
          href="#home" 
          @click.prevent="scrollToSection('home')" 
          class="text-xl md:text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
        >
          Marcos.dev
        </a>
        <div class="hidden md:flex items-center gap-6 lg:gap-8">
          <a 
            v-for="link in navLinks" 
            :key="link.id"
            :href="`#${link.id}`" 
            @click.prevent="scrollToSection(link.id)" 
            class="relative text-sm lg:text-base text-text-light hover:text-primary transition-colors duration-300 group"
          >
            {{ link.label }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden text-text-light hover:text-primary transition-colors p-2"
          aria-label="Toggle menu"
        >
          <i :class="isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-xl"></i>
        </button>
      </nav>
      <!-- Mobile Menu -->
      <div 
        v-if="isMobileMenuOpen"
        class="md:hidden py-4 space-y-3 border-t border-white/10 animate-slide-up"
      >
        <a 
          v-for="link in navLinks" 
          :key="link.id"
          :href="`#${link.id}`" 
          @click.prevent="handleMobileNavClick(link.id)" 
          class="block text-base text-text-light hover:text-primary transition-colors duration-300 py-2"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useSmoothScroll } from '../composables/useSmoothScroll'

const { scrollToSection } = useSmoothScroll()
const isMobileMenuOpen = ref(false)

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Sobre Mim' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'portfolio', label: 'Projetos' },
  { id: 'contact', label: 'Contato' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleMobileNavClick = (sectionId) => {
  scrollToSection(sectionId)
  isMobileMenuOpen.value = false
}
</script>
