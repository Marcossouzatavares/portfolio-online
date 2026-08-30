<template>
  <section id="contact" ref="contactSection" class="section bg-ink-soft">
    <div class="container">
      <p class="kicker"><span class="kicker-index">04</span> Contato</p>
      <h2 class="section-title">Vamos conversar sobre seu projeto</h2>
      <p class="text-body-lg text-muted max-w-2xl mb-8">
        Aberto a oportunidades como Desenvolvedor Front-End. Responda rápido pelo e-mail ou WhatsApp.
      </p>

      <!-- Mensagem rápida: monta o link do WhatsApp já com o texto preenchido. -->
      <form class="max-w-xl mb-10" @submit.prevent>
        <label for="wa-message" class="block text-body-sm text-muted mb-2">
          Conte rapidamente sobre a vaga ou projeto
        </label>
        <textarea
          id="wa-message"
          v-model="message"
          rows="3"
          placeholder="Ex: Temos uma vaga de Front-End remota, você toparia conversar?"
          class="w-full rounded-md bg-ink border border-ink-line px-4 py-3 text-body-sm text-paper placeholder:text-muted/70 focus:border-accent transition-colors resize-none"
        ></textarea>
        <a :href="whatsappLink" target="_blank" rel="noopener" class="btn-primary mt-3">
          Enviar via WhatsApp
          <Icon name="arrow-right" class="w-4 h-4" />
        </a>
      </form>

      <div class="flex flex-wrap gap-4">
        <a
          v-for="social in socialLinks"
          :key="social.label"
          :href="social.link"
          target="_blank"
          rel="noopener"
          :aria-label="social.label"
          class="surface flex flex-col items-center gap-2 p-5 w-28 transition-colors duration-200 hover:border-accent"
        >
          <Icon :name="social.icon" class="w-6 h-6 text-paper" />
          <span class="text-body-xs text-muted">{{ social.label }}</span>
        </a>
      </div>

      <button
        type="button"
        @click="copyEmail"
        class="mt-5 inline-flex items-center gap-2 text-body-sm text-muted hover:text-accent transition-colors"
      >
        <Icon :name="copied ? 'check' : 'mail'" class="w-4 h-4 flex-shrink-0" />
        <span aria-live="polite">{{ copied ? 'E-mail copiado!' : `${email} — clique para copiar` }}</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'
import Icon from './Icon.vue'

const { elementRef: contactSection } = useScrollAnimation()

const email = 'marcossouzatavares2020@gmail.com'
const whatsappNumber = '92984361882'

const socialLinks = [
  { icon: 'mail', link: `mailto:${email}`, label: 'E-mail' },
  { icon: 'code', link: 'https://github.com/marcossouzatavares23', label: 'GitHub' },
  { icon: 'briefcase', link: 'https://www.linkedin.com/in/marcossouzatavares23/', label: 'LinkedIn' },
  { icon: 'chat', link: `https://wa.me/${whatsappNumber}`, label: 'WhatsApp' }
]

const defaultMessage = 'Olá, Marcos! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.'
const message = ref('')

const whatsappLink = computed(() => {
  const text = message.value.trim() || defaultMessage
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
})

const copied = ref(false)
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    // Clipboard API indisponível (ex: contexto sem HTTPS) — o link mailto acima
    // continua funcionando normalmente como alternativa.
  }
}
</script>
