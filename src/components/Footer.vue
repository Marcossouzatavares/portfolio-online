<template>
  <footer class="border-t border-ink-line py-8">
    <div class="container">
      <div class="flex flex-col md:flex-row justify-between items-center gap-3 text-body-xs text-muted">
        <p>&copy; {{ currentYear }} Marcos de Souza Tavares. Todos os direitos reservados.</p>
        <p>Feito com Vue.js &amp; Tailwind CSS</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
