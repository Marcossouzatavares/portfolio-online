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
      <div class="max-w-3xl mx-auto">
        <div class="glass-card p-5 md:p-8 text-center">
          <p class="text-sm md:text-lg text-text-light/90 leading-relaxed text-balance">
            Desenvolvedor Front-End com experiência sólida na criação de interfaces web modernas, acessíveis, responsivas e escaláveis. Atuo com tecnologias amplamente utilizadas no mercado como <span class="text-primary font-semibold">React.js</span>, <span class="text-primary font-semibold">Next.js</span>, <span class="text-primary font-semibold">TypeScript</span> e <span class="text-primary font-semibold">Tailwind CSS</span>, além de ferramentas como <span class="text-primary font-semibold">Figma</span> e <span class="text-primary font-semibold">Git</span>. Atualmente desenvolvo a <span class="text-secondary font-semibold">Arara Delivery</span>, meu projeto pessoal.
          </p>
          <div class="flex flex-wrap justify-center gap-2 mt-5 md:mt-6">
            <span
              v-for="tag in focusTags"
              :key="tag"
              class="px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef: aboutSection } = useScrollAnimation()

const focusTags = [
  'React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Figma', 'Scrum/Kanban', 'Git/GitLab'
]
</script>

<style scoped>
.about {
  @apply bg-dark-secondary;
}
</style>
