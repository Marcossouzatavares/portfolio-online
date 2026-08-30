<template>
  <span class="tech-chip" :class="large ? 'tech-chip-lg' : ''">
    <span class="tech-chip-icon" :class="large ? 'tech-chip-icon-lg' : ''" :style="{ color: icon.hex }" v-html="icon.svg" aria-hidden="true"></span>
    {{ icon.title }}
  </span>
</template>

<script setup>
import { computed } from 'vue'
import { techIcons } from '../techIcons'

const props = defineProps({
  slug: { type: String, required: true },
  large: { type: Boolean, default: false },
})

// Se o slug não existir no registro, cai pra um texto simples sem ícone em vez
// de quebrar a página — mais seguro do que confiar cegamente no nome.
const icon = computed(() => techIcons[props.slug] ?? { svg: '', hex: 'var(--fallback, #9C9A91)', title: props.slug })
</script>
