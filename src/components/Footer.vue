<template>
  <footer class="relative border-t border-white/10 glass py-8 overflow-hidden">
    <!-- Footer Tech Effect -->
    <div class="absolute inset-0 opacity-[0.06] pointer-events-none">
      <div class="absolute inset-0" style="background-image: linear-gradient(90deg, rgba(0, 191, 255, 0.4) 1px, transparent 1px); background-size: 20px 100%;"></div>
      <!-- Footer Code -->
      <div class="absolute top-2 left-12 text-[9px] font-mono text-primary/10 opacity-50 hidden lg:block">
        &lt;/footer&gt;
      </div>
    </div>
    <div class="container relative z-10">
      <div class="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
        <p class="text-text-light/60 text-xs md:text-sm text-center md:text-left">
          &copy; {{ currentYear }} Marcos de Souza Tavares. Todos os direitos reservados.
        </p>
        <div class="flex items-center gap-2 text-text-light/60 text-xs md:text-sm">
          <span>Feito com</span>
          <i class="fas fa-heart text-primary animate-pulse"></i>
          <span>usando Vue.js & Tailwind CSS</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
