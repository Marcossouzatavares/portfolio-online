<template>
  <section id="about" ref="aboutSection" class="section about relative overflow-hidden">
    <!-- Tech Background Effects -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Grid -->
      <div class="absolute inset-0 opacity-[0.06]" style="background-image: linear-gradient(rgba(0, 191, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 191, 255, 0.5) 1px, transparent 1px); background-size: 50px 50px;"></div>
      
      <!-- Terminal-like Code Lines -->
      <div class="absolute top-1/4 left-6 md:left-12 text-[10px] md:text-xs font-mono text-primary/20 opacity-70 hidden md:block">
        <div class="opacity-0 animate-fade-in" style="animation-delay: 1s; animation-fill-mode: forwards;">
          <span class="text-secondary/60">$</span> npm install
        </div>
        <div class="opacity-0 animate-fade-in ml-4" style="animation-delay: 1.5s; animation-fill-mode: forwards;">
          <span class="text-green-400/60">✓</span> packages installed
        </div>
        <div class="opacity-0 animate-fade-in" style="animation-delay: 2s; animation-fill-mode: forwards;">
          <span class="text-secondary/60">$</span> npm run dev
        </div>
      </div>
      
      <div class="absolute bottom-1/4 right-6 md:right-12 text-[10px] md:text-xs font-mono text-primary/20 opacity-70 hidden md:block">
        <div class="opacity-0 animate-fade-in" style="animation-delay: 1.5s; animation-fill-mode: forwards;">git commit -m</div>
        <div class="opacity-0 animate-fade-in ml-4" style="animation-delay: 2s; animation-fill-mode: forwards;">'feat: new features'</div>
        <div class="opacity-0 animate-fade-in" style="animation-delay: 2.5s; animation-fill-mode: forwards;">git push origin main</div>
      </div>
      
      <!-- Code Block Indicators -->
      <div class="absolute top-1/2 left-8 text-primary/10 opacity-50 hidden lg:block font-mono text-xs">
        <div class="opacity-0 animate-fade-in" style="animation-delay: 3s; animation-fill-mode: forwards;">// About</div>
      </div>
    </div>
    
    <div class="container relative z-10">
      <h2 class="section-title">
        <span class="gradient-text">Sobre Mim</span>
      </h2>
      <div class="max-w-4xl mx-auto space-y-4 md:space-y-6 text-base md:text-lg text-text-light/90 leading-relaxed">
        <div class="glass-card hover:scale-[1.01] md:hover:scale-[1.02] transition-transform duration-300 p-4 md:p-6">
          <p class="text-balance text-sm md:text-base lg:text-lg">
            Atualmente trabalho como <span class="text-primary font-semibold">Desenvolvedor Web</span> na <span class="text-secondary font-semibold">Arara Delivery</span> e na <span class="text-secondary font-semibold">Primordium</span>, onde desenvolvo soluções web de alta qualidade. Atuo com tecnologias modernas como <span class="text-primary font-semibold">Angular</span>, <span class="text-primary font-semibold">TypeScript</span>, <span class="text-primary font-semibold">RxJS</span>, <span class="text-primary font-semibold">React.js</span>, <span class="text-primary font-semibold">Next.js</span>, <span class="text-primary font-semibold">Vue.js</span> e <span class="text-primary font-semibold">Tailwind CSS</span>, sempre focando em arquitetura de micro-frontends e soluções em cloud.
          </p>
        </div>
        <div class="glass-card hover:scale-[1.01] md:hover:scale-[1.02] transition-transform duration-300 p-4 md:p-6">
          <p class="text-balance text-sm md:text-base lg:text-lg">
            Participei do projeto <span class="text-secondary font-semibold">Green Factory 5.0</span> (2024-2025), em parceria com UEA, CITS e Copal Fadect, voltado à Indústria 4.0 e sustentabilidade. Além disso, atuo como <span class="text-primary font-semibold">Técnico em Informática</span> no <span class="text-secondary font-semibold">IFAM</span> desde 2021, realizando suporte técnico em redes, manutenção de computadores e implementação de melhorias. Também sou <span class="text-primary font-semibold">Instrutor de Ciência da Computação</span> no Projeto IFAM/UEA, ministrando aulas de informática básica. Cursando Bacharelado em Análise e Desenvolvimento de Sistemas na UNOPAR (2023-2025).
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef: aboutSection } = useScrollAnimation()
</script>

<style scoped>
.about {
  @apply bg-dark-secondary;
}
</style>
