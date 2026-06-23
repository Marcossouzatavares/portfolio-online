<template>
  <section id="skills" ref="skillsSection" class="section skills bg-dark-secondary relative overflow-hidden">
    <!-- Tech Effects -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Diagonal Grid Pattern -->
      <div class="absolute inset-0 opacity-[0.05]" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0, 191, 255, 0.2) 10px, rgba(0, 191, 255, 0.2) 20px);"></div>

      <!-- Floating Tech Icons -->
      <div class="absolute top-20 left-8 text-primary/12 opacity-60 hidden lg:block">
        <i class="fab fa-react text-7xl"></i>
      </div>
      <div class="absolute bottom-20 right-8 text-primary/12 opacity-60 hidden lg:block">
        <i class="fab fa-git-alt text-7xl"></i>
      </div>
      <div class="absolute top-1/2 left-1/4 text-primary/10 opacity-50 hidden xl:block">
        <i class="fab fa-figma text-5xl"></i>
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
          <h3 class="text-xl md:text-2xl font-display font-bold mb-4 md:mb-6 flex items-center gap-3 md:gap-4">
            <span class="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" :class="skill.iconBg">
              <i :class="skill.icon" class="text-white text-lg md:text-xl"></i>
            </span>
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

      <!-- Languages, Certifications & Soft Skills -->
      <div class="glass-card mt-6 md:mt-8 p-5 md:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
        <div>
          <h4 class="font-display font-bold text-base md:text-lg mb-3 flex items-center gap-2">
            <i class="fas fa-language text-primary"></i>
            <span>Idiomas</span>
          </h4>
          <ul class="space-y-1.5 text-sm text-text-light/75">
            <li v-for="lang in languages" :key="lang.name" class="flex justify-between gap-2">
              <span>{{ lang.name }}</span>
              <span class="text-text-light/50">{{ lang.level }}</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-display font-bold text-base md:text-lg mb-3 flex items-center gap-2">
            <i class="fas fa-certificate text-primary"></i>
            <span>Certificações</span>
          </h4>
          <ul class="space-y-1.5 text-sm text-text-light/75">
            <li v-for="cert in certifications" :key="cert" class="flex items-start gap-2">
              <i class="fas fa-check text-accent mt-1 text-[10px] flex-shrink-0"></i>
              <span>{{ cert }}</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-display font-bold text-base md:text-lg mb-3 flex items-center gap-2">
            <i class="fas fa-handshake text-primary"></i>
            <span>Soft Skills</span>
          </h4>
          <ul class="space-y-1.5 text-sm text-text-light/75">
            <li v-for="skill in softSkills" :key="skill" class="flex items-start gap-2">
              <i class="fas fa-check text-accent mt-1 text-[10px] flex-shrink-0"></i>
              <span>{{ skill }}</span>
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
    iconBg: 'bg-gradient-to-br from-primary to-sky-600',
    title: 'Frontend & Frameworks',
    items: [
      '<strong class="text-primary">Linguagens:</strong> HTML5, CSS3, JavaScript (ES6+), TypeScript',
      '<strong class="text-primary">Bibliotecas:</strong> React.js, Next.js, Redux Toolkit, Vite',
      '<strong class="text-primary">Estilização:</strong> Tailwind CSS, Bootstrap, Sass, CSS Modules',
      '<strong class="text-primary">Renderização:</strong> CSR, SSR, SSG (Next.js), Hydration'
    ]
  },
  {
    icon: 'fas fa-paint-brush',
    iconBg: 'bg-gradient-to-br from-secondary to-violet-600',
    title: 'UI/UX & Design',
    items: [
      '<strong class="text-primary">Ferramentas:</strong> Figma (prototipagem, design systems)',
      '<strong class="text-primary">Princípios:</strong> Mobile-First, Acessibilidade (WCAG), Design Responsivo',
      '<strong class="text-primary">Otimização:</strong> Core Web Vitals, Lighthouse, Lazy Loading'
    ]
  },
  {
    icon: 'fas fa-cogs',
    iconBg: 'bg-gradient-to-br from-accent to-emerald-600',
    title: 'Integração & APIs',
    items: [
      '<strong class="text-primary">RESTful APIs:</strong> Axios, Fetch, Autenticação (JWT, OAuth2)',
      '<strong class="text-primary">Ferramentas:</strong> Postman, Swagger, Webhooks',
      '<strong class="text-primary">GraphQL (básico):</strong> Apollo Client, queries/mutations'
    ]
  },
  {
    icon: 'fas fa-clipboard-list',
    iconBg: 'bg-gradient-to-br from-sky-400 to-secondary',
    title: 'Levantamento & Gestão',
    items: [
      '<strong class="text-primary">Requisitos:</strong> Entrevistas com stakeholders, user stories',
      '<strong class="text-primary">Metodologias:</strong> Scrum (Sprints, Daily), Kanban (Trello, Jira)',
      '<strong class="text-primary">Organização:</strong> GitHub Projects, Notion'
    ]
  },
  {
    icon: 'fas fa-code-branch',
    iconBg: 'bg-gradient-to-br from-fuchsia-500 to-secondary',
    title: 'DevOps & Produtividade',
    items: [
      '<strong class="text-primary">Versionamento:</strong> Git (Git Flow), GitHub Actions (CI/CD básico)',
      '<strong class="text-primary">Qualidade:</strong> ESLint, Prettier, Husky (pre-commit hooks)',
      '<strong class="text-primary">Deploy:</strong> Vercel, Netlify, GitHub Pages'
    ]
  },
  {
    icon: 'fas fa-database',
    iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-600',
    title: 'Banco de Dados',
    items: [
      '<strong class="text-primary">Firebase:</strong> Firestore (CRUD), Realtime Database',
      '<strong class="text-primary">SQL básico:</strong> Consultas simples (MySQL, PostgreSQL)',
      '<strong class="text-primary">ORM:</strong> Prisma (configuração inicial)'
    ]
  },
  {
    icon: 'fas fa-star',
    iconBg: 'bg-gradient-to-br from-violet-500 to-fuchsia-600',
    title: 'Diferenciais Competitivos',
    items: [
      '<strong class="text-primary">SEO:</strong> Meta tags, Schema.org, SSR para indexação',
      '<strong class="text-primary">Documentação:</strong> Storybook, MDX',
      '<strong class="text-primary">IA Assistiva:</strong> GitHub Copilot, ChatGPT (debugging e produtividade)'
    ]
  }
]

const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Básico' },
  { name: 'Espanhol', level: 'Básico' }
]

const certifications = [
  'Desenvolvimento Front-End — Alura',
  'Programação e Desenvolvimento Web — Prof. Paulo Borges',
  'Programação e Modelagem de Sistemas — Alura',
  'Informática na Educação — IFAM',
  'Design Digital — Samsung & UEA',
  'Transformação Digital — Samsung & UEA',
  'Marketing Digital e Ética Profissional — Indústria do Saber',
  'Robótica com Arduino — IFAM'
]

const softSkills = [
  'Comunicação clara e eficaz com equipes multidisciplinares',
  'Colaboração e trabalho em equipe ágil (Scrum/Kanban)',
  'Autodidata e comprometido com aprendizado contínuo'
]
</script>
