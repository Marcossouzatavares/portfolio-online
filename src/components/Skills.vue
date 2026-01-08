<template>
  <section id="skills" ref="skillsSection" class="section skills relative overflow-hidden">
    <!-- Tech Effects -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Diagonal Grid Pattern -->
      <div class="absolute inset-0 opacity-[0.05]" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0, 191, 255, 0.2) 10px, rgba(0, 191, 255, 0.2) 20px);"></div>
      
      <!-- Floating Tech Icons -->
      <div class="absolute top-20 left-8 text-primary/12 opacity-60 hidden lg:block">
        <i class="fab fa-angular text-7xl"></i>
      </div>
      <div class="absolute bottom-20 right-8 text-primary/12 opacity-60 hidden lg:block">
        <i class="fab fa-react text-7xl"></i>
      </div>
      <div class="absolute top-1/2 left-1/4 text-primary/10 opacity-50 hidden xl:block">
        <i class="fab fa-vuejs text-5xl"></i>
      </div>
      <div class="absolute top-1/2 right-1/4 text-primary/10 opacity-50 hidden xl:block">
        <i class="fab fa-js text-5xl"></i>
      </div>
      
      <!-- Skills Code Indicators -->
      <div class="absolute top-32 right-12 text-[10px] font-mono text-primary/15 opacity-60 hidden lg:block">
        <div class="opacity-0 animate-fade-in" style="animation-delay: 1s; animation-fill-mode: forwards;">skills = []</div>
      </div>
    </div>
    
    <div class="container relative z-10">
      <h2 class="section-title">
        <span class="gradient-text">Habilidades Técnicas</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        <div 
          v-for="(skill, index) in skills" 
          :key="index"
          class="glass-card card-3d group p-4 md:p-6"
          :style="{ 'animation-delay': `${index * 100}ms` }"
        >
          <h3 class="text-xl md:text-2xl font-display font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
            <i :class="skill.icon" class="text-primary text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0"></i>
            <span class="gradient-text text-base md:text-xl lg:text-2xl">{{ skill.title }}</span>
          </h3>
          <ul class="space-y-2 md:space-y-3">
            <li 
              v-for="(item, itemIndex) in skill.items" 
              :key="itemIndex"
              class="flex items-start gap-2 text-sm md:text-base text-text-light/80 hover:text-text-light transition-colors duration-300"
            >
              <i class="fas fa-check-circle text-primary mt-0.5 md:mt-1 flex-shrink-0 text-xs md:text-sm"></i>
              <span v-html="item" class="leading-relaxed"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef: skillsSection } = useScrollAnimation()

const skills = [
  {
    icon: 'fas fa-laptop-code',
    title: 'Frontend & Frameworks',
    items: [
      '<strong class="text-primary">Linguagens:</strong> HTML5, CSS3, JavaScript (ES6+), TypeScript',
      '<strong class="text-primary">Frameworks:</strong> Angular, React.js, Next.js, Vue.js, RxJS',
      '<strong class="text-primary">Arquitetura:</strong> Micro-frontends, Cloud Solutions',
      '<strong class="text-primary">Estilização:</strong> Tailwind CSS, Bootstrap, Sass'
    ]
  },
  {
    icon: 'fas fa-paint-brush',
    title: 'UI/UX & Design',
    items: [
      '<strong class="text-primary">Ferramentas:</strong> Figma (prototipagem, design systems)',
      '<strong class="text-primary">Princípios:</strong> Mobile-First, Acessibilidade (WCAG), Design Responsivo',
      '<strong class="text-primary">Otimização:</strong> Core Web Vitals, Lighthouse'
    ]
  },
  {
    icon: 'fas fa-cogs',
    title: 'Integração & APIs',
    items: [
      '<strong class="text-primary">APIs:</strong> RESTful APIs (Axios, Fetch)',
      '<strong class="text-primary">Ferramentas:</strong> Postman, Swagger, Webhooks',
      '<strong class="text-primary">GraphQL:</strong> Básico'
    ]
  },
  {
    icon: 'fas fa-code-branch',
    title: 'DevOps & Produtividade',
    items: [
      '<strong class="text-primary">Versionamento:</strong> Git (Git Flow), GitHub Actions',
      '<strong class="text-primary">Qualidade:</strong> ESLint, Prettier',
      '<strong class="text-primary">Deploy:</strong> Vercel, Netlify, GitHub Pages'
    ]
  }
]
</script>
