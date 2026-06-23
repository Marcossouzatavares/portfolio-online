<template>
  <Transition name="fade-scale">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      aria-label="Voltar ao topo"
      class="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full glass border border-white/10 flex items-center justify-center text-primary hover:text-dark hover:bg-primary hover:border-primary transition-colors duration-300 shadow-lg"
    >
      <i class="fas fa-arrow-up"></i>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.7);
}
</style>
