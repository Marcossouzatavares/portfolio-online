<template>
  <section id="contact" ref="contactSection" class="section contact relative overflow-hidden">
    <!-- Tech Effects -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Connection Lines Pattern -->
      <div class="absolute inset-0 opacity-[0.08]" style="background-image: 
        linear-gradient(to right, rgba(0, 191, 255, 0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 191, 255, 0.3) 1px, transparent 1px);
        background-size: 60px 60px;
        background-position: center;"></div>
      
      <!-- Network Nodes with Connections -->
      <div class="absolute top-1/3 left-1/4 w-3 h-3 bg-primary/20 rounded-full border border-primary/30 hidden lg:block animate-pulse" style="animation-duration: 2s;"></div>
      <div class="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/20 rounded-full border border-primary/30 hidden lg:block animate-pulse" style="animation-duration: 2.5s;"></div>
      <div class="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/20 rounded-full border border-primary/30 hidden lg:block animate-pulse" style="animation-duration: 3s;"></div>
      <div class="absolute bottom-1/3 right-1/3 w-3 h-3 bg-primary/20 rounded-full border border-primary/30 hidden lg:block animate-pulse" style="animation-duration: 2.2s;"></div>
      
      <!-- Connection Lines between Nodes -->
      <svg class="absolute inset-0 w-full h-full hidden lg:block opacity-[0.1]" style="pointer-events: none;">
        <line x1="25%" y1="33%" x2="75%" y2="33%" stroke="rgba(0, 191, 255, 0.3)" stroke-width="1" />
        <line x1="33%" y1="67%" x2="67%" y2="67%" stroke="rgba(0, 191, 255, 0.3)" stroke-width="1" />
        <line x1="25%" y1="33%" x2="33%" y2="67%" stroke="rgba(0, 191, 255, 0.2)" stroke-width="1" />
        <line x1="75%" y1="33%" x2="67%" y2="67%" stroke="rgba(0, 191, 255, 0.2)" stroke-width="1" />
      </svg>
      
      <!-- Connection Text -->
      <div class="absolute top-40 left-8 md:left-12 text-[10px] md:text-xs font-mono text-primary/20 opacity-70 hidden md:block">
        <div class="opacity-0 animate-fade-in" style="animation-delay: 1.5s; animation-fill-mode: forwards;">
          <span class="text-secondary/60">await</span> connect()
        </div>
        <div class="opacity-0 animate-fade-in ml-4" style="animation-delay: 2s; animation-fill-mode: forwards;">
          <span class="text-green-400/60">✓</span> Connected
        </div>
      </div>
      
      <!-- Email Pattern -->
      <div class="absolute bottom-32 right-12 text-[10px] font-mono text-primary/15 opacity-60 hidden lg:block">
        <div class="opacity-0 animate-fade-in" style="animation-delay: 2.5s; animation-fill-mode: forwards;">sendEmail()</div>
      </div>
    </div>
    
    <div class="container relative z-10">
      <h2 class="section-title">
        <span class="gradient-text">Fale Comigo</span>
      </h2>
      <p class="text-center text-base md:text-xl text-text-light/80 max-w-2xl mx-auto mb-8 md:mb-12">
        Conecte-se comigo nas redes sociais ou envie um e-mail.
      </p>
      <div class="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
        <a 
          v-for="(social, index) in socialLinks" 
          :key="index"
          :href="social.link" 
          target="_blank"
          :aria-label="social.label"
          class="group relative glass-card p-4 md:p-5 lg:p-6 hover:scale-105 md:hover:scale-110 transition-all duration-300 hover:border-primary/50"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/20 group-hover:to-secondary/20 rounded-2xl transition-all duration-300"></div>
          <i 
            :class="social.icon" 
            class="text-3xl md:text-4xl lg:text-5xl text-text-light group-hover:text-primary transition-colors duration-300 relative z-10 group-hover:scale-110"
          ></i>
          <span class="absolute -bottom-1 md:-bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {{ social.label }}
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef: contactSection } = useScrollAnimation()

const socialLinks = [
  { 
    icon: 'fas fa-envelope', 
    link: 'mailto:marcossouzatavares2020@gmail.com', 
    label: 'E-mail' 
  },
  { 
    icon: 'fab fa-github', 
    link: 'https://github.com/marcossouzatavares23', 
    label: 'GitHub' 
  },
  { 
    icon: 'fab fa-linkedin', 
    link: 'https://www.linkedin.com/in/marcossouzatavares23/', 
    label: 'LinkedIn' 
  },
  { 
    icon: 'fab fa-whatsapp', 
    link: 'https://wa.me/92984361882', 
    label: 'WhatsApp' 
  }
]
</script>
