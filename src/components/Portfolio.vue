<template>
  <section id="portfolio" ref="portfolioSection" class="section portfolio relative overflow-hidden">
    <!-- Tech Effects -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Hexagonal Pattern -->
      <div class="absolute inset-0 opacity-[0.06]" style="background-image: radial-gradient(circle, rgba(0, 191, 255, 0.3) 1px, transparent 1px); background-size: 30px 30px;"></div>

      <!-- Code Comments -->
      <div class="absolute top-32 left-6 md:left-12 text-[10px] md:text-xs font-mono text-primary/20 opacity-70 hidden lg:block">
        <div class="opacity-0 animate-fade-in" style="animation-delay: 1s; animation-fill-mode: forwards;">
          <span class="text-secondary/60">//</span> Projects
        </div>
        <div class="opacity-0 animate-fade-in" style="animation-delay: 1.8s; animation-fill-mode: forwards;">
          <span class="text-secondary/60">//</span> Real-world solutions
        </div>
        <div class="opacity-0 animate-fade-in" style="animation-delay: 2.5s; animation-fill-mode: forwards;">
          <span class="text-secondary/60">//</span> Production ready
        </div>
      </div>

      <!-- Corner Brackets -->
      <div class="absolute top-20 left-10 text-primary/15 opacity-50 hidden xl:block font-mono text-2xl">
        <div class="opacity-0 animate-fade-in" style="animation-delay: 2s; animation-fill-mode: forwards;">&lt;/&gt;</div>
      </div>
      <div class="absolute bottom-20 right-10 text-primary/15 opacity-50 hidden xl:block font-mono text-2xl">
        <div class="opacity-0 animate-fade-in" style="animation-delay: 2.5s; animation-fill-mode: forwards;">{ }</div>
      </div>

      <!-- Project Array Code -->
      <div class="absolute bottom-32 left-12 text-[10px] font-mono text-primary/15 opacity-60 hidden 2xl:block">
        <div class="opacity-0 animate-fade-in" style="animation-delay: 3s; animation-fill-mode: forwards;">projects.map()</div>
      </div>
    </div>

    <div class="container relative z-10">
      <h2 class="section-title">
        <span class="gradient-text">Projetos</span>
      </h2>
      
      <!-- Improved Grid Layout -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="group relative glass rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
        >
          <!-- Project Image/Icon -->
          <div class="relative h-32 sm:h-36 md:h-40 bg-gradient-to-br via-dark-tertiary flex items-center justify-center overflow-hidden" :class="project.gradient">
            <div v-if="!project.image" class="text-4xl sm:text-5xl md:text-6xl opacity-50 group-hover:scale-110 transition-transform duration-300">
              {{ project.emoji }}
            </div>
            <img 
              v-else
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <!-- Project Content - More Compact -->
          <div class="p-4 md:p-5 flex flex-col">
            <div class="flex items-start justify-between mb-2 gap-2">
              <h3 class="text-lg md:text-xl font-display font-bold gradient-text flex-1 group-hover:text-primary transition-colors duration-300 leading-tight">
                {{ project.title }}
              </h3>
              <div v-if="project.featured" class="ml-2 px-2 py-0.5 text-xs font-bold rounded-full bg-primary/20 text-primary border border-primary/30 flex-shrink-0">
                Destaque
              </div>
            </div>
            
            <p class="text-xs sm:text-sm text-text-light/70 mb-3 line-clamp-2 leading-relaxed">
              {{ project.description }}
            </p>
            
            <!-- Tech Stack - Compact -->
            <div class="flex flex-wrap gap-1.5 mb-3 md:mb-4">
              <span 
                v-for="tech in project.tech.slice(0, 3)" 
                :key="tech"
                class="px-2 py-0.5 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
              >
                {{ tech }}
              </span>
              <span v-if="project.tech.length > 3" class="px-2 py-0.5 text-xs font-medium rounded-md bg-white/5 text-text-light/60">
                +{{ project.tech.length - 3 }}
              </span>
            </div>
            
            <!-- Button - More Subtle -->
            <a 
              :href="project.link || '#'" 
              target="_blank"
              class="inline-flex items-center justify-center gap-2 w-full px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm font-semibold rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 transition-all duration-300 group/btn"
            >
              <span>Ver Projeto</span>
              <i class="fas fa-arrow-right text-xs group-hover/btn:translate-x-1 transition-transform duration-300"></i>
            </a>
          </div>

          <!-- Subtle Hover Border Effect -->
          <div class="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-300 pointer-events-none"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef: portfolioSection } = useScrollAnimation()

const projects = [
  {
    title: 'Green Factory 5.0',
    description: 'Sistema produtivo inteligente para uma movelaria no interior do Amazonas, voltado à Indústria 4.0, em parceria com UEA, CITS, Copal e Fadect.',
    tech: ['Indústria 4.0', 'Front-End', 'Sustentabilidade'],
    image: null,
    link: 'https://github.com/Marcossouzatavares?tab=repositories',
    featured: true,
    emoji: '🏭',
    gradient: 'from-primary/15 to-sky-600/10'
  },
  {
    title: 'Arara Delivery',
    description: 'Plataforma de delivery desenvolvida como projeto pessoal, com arquitetura de frontend moderna.',
    tech: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    image: null,
    link: 'https://github.com/Marcossouzatavares?tab=repositories',
    featured: false,
    emoji: '🚀',
    gradient: 'from-secondary/15 to-violet-600/10'
  },
  {
    title: 'Site Ambiente Parintins',
    description: 'Sistema desenvolvido em parceria com IFAM e a Prefeitura Municipal de Parintins, com foco em sustentabilidade ambiental.',
    tech: ['Front-End', 'Sustentabilidade Ambiental'],
    image: null,
    link: 'https://github.com/Marcossouzatavares?tab=repositories',
    featured: false,
    emoji: '🌱',
    gradient: 'from-accent/15 to-emerald-600/10'
  }
]
</script>
