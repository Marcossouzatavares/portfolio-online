<template>
  <section id="skills" ref="skillsSection" class="section bg-ink-soft">
    <div class="container">
      <p class="kicker"><span class="kicker-index">02</span> Habilidades</p>
      <h2 class="section-title">Tecnologias e competências</h2>

      <!-- Stack principal: o que sustenta o trabalho toda semana, com mais destaque
           visual (ícone e chip maiores) que o resto. -->
      <div class="mb-8">
        <p class="font-mono text-body-xs uppercase tracking-[0.2em] text-accent mb-3">Stack principal</p>
        <div class="flex flex-wrap gap-3">
          <TechChip v-for="slug in stackPrincipal" :key="slug" :slug="slug" large />
        </div>
      </div>

      <!-- Tecnologias complementares: um ícone só no título da categoria — o item
           individual vira texto simples separado por "·", sem um chip por item,
           pra não poluir uma lista com ~40 tecnologias. -->
      <div class="mb-6">
        <p class="font-mono text-body-xs uppercase tracking-[0.2em] text-muted mb-3">Tecnologias complementares</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="category in complementary" :key="category.title" class="surface p-5">
            <h3 class="flex items-center gap-2 mb-2.5">
              <Icon :name="category.icon" class="w-4 h-4 text-accent flex-shrink-0" />
              <span class="font-display text-body-lg text-paper">{{ category.title }}</span>
            </h3>
            <p class="text-body-sm text-muted leading-relaxed">{{ category.items.join(' · ') }}</p>
          </div>
        </div>
      </div>
      <!--
        TODO (aguardando confirmação do usuário antes de publicar como definitivo):
        - Nível real de TypeScript (produção vs. conhecimento básico)
        - Uso real de testes automatizados (Jest/Vitest/Testing Library)?
        - Escopo real de CI/CD além do workflow deste próprio portfólio
        - GraphQL/Apollo Client/JWT/OAuth2/Swagger: preciso confirmar em qual projeto
          (Fluo ou outro) cada um foi realmente usado, pra linkar rastreabilidade com
          o case study correspondente — hoje o texto do Fluo só cita "IA, banco de
          dados, fullstack" de forma genérica.
      -->

      <!-- Idiomas, certificações e competências com prova real -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 surface p-6">
        <div>
          <h4 class="flex items-center gap-2 font-display text-body-lg text-paper mb-3">
            <Icon name="globe" class="w-4 h-4 text-accent" /> Idiomas
          </h4>
          <ul class="space-y-1.5 text-body-sm text-muted">
            <li v-for="lang in languages" :key="lang.name" class="flex justify-between gap-2">
              <span>{{ lang.name }}</span>
              <span>{{ lang.level }}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="flex items-center gap-2 font-display text-body-lg text-paper mb-3">
            <Icon name="award" class="w-4 h-4 text-accent" /> Certificações
          </h4>
          <ul class="space-y-1.5 text-body-sm text-muted">
            <li v-for="cert in certifications" :key="cert">{{ cert }}</li>
            <template v-if="showAllCerts">
              <li v-for="cert in moreCertifications" :key="cert">{{ cert }}</li>
            </template>
          </ul>
          <button
            type="button"
            @click="showAllCerts = !showAllCerts"
            class="mt-2 text-body-sm text-accent hover:underline"
          >
            {{ showAllCerts ? 'Ver menos' : 'Ver todas as certificações →' }}
          </button>
        </div>

        <div>
          <h4 class="flex items-center gap-2 font-display text-body-lg text-paper mb-3">
            <Icon name="users" class="w-4 h-4 text-accent" /> Comprovado na prática
          </h4>
          <ul class="space-y-2.5 text-body-sm">
            <li v-for="skill in provenSkills" :key="skill.label">
              <p class="text-muted">{{ skill.label }}</p>
              <p class="text-body-xs text-accent">{{ skill.proof }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'
import Icon from './Icon.vue'
import TechChip from './TechChip.vue'

const { elementRef: skillsSection } = useScrollAnimation()

// O que sustenta o trabalho toda semana — 4 itens, não uma lista genérica.
const stackPrincipal = ['react', 'nextdotjs', 'typescript', 'javascript']

const complementary = [
  { icon: 'code', title: 'Frontend', items: ['HTML5', 'CSS3', 'Tailwind CSS', 'Sass', 'CSS Modules', 'Bootstrap', 'Vite'] },
  { icon: 'git-branch', title: 'Arquitetura & Estado', items: ['Redux Toolkit', 'CSR', 'SSR', 'SSG', 'Hydration'] },
  { icon: 'layout', title: 'UI/UX & Performance', items: ['Figma', 'Mobile-First', 'Design Responsivo', 'Acessibilidade (WCAG)', 'Lighthouse', 'Core Web Vitals', 'Lazy Loading'] },
  { icon: 'nodes', title: 'APIs & Integrações', items: ['REST APIs', 'Axios', 'Fetch API', 'GraphQL', 'Apollo Client', 'JWT', 'OAuth 2.0', 'Webhooks', 'Swagger/OpenAPI', 'Postman'] },
  { icon: 'database', title: 'Banco de Dados', items: ['PostgreSQL', 'MySQL', 'Firebase', 'Prisma'] },
  { icon: 'check', title: 'Qualidade, Git & Deploy', items: ['Git', 'GitHub', 'GitHub Actions', 'ESLint', 'Prettier', 'Husky', 'Vercel', 'Netlify', 'GitHub Pages'] },
  { icon: 'clipboard', title: 'Gestão & Produto', items: ['Jira', 'Trello', 'GitHub Projects', 'Notion', 'Levantamento de requisitos', 'Entrevistas com stakeholders', 'User Stories', 'Scrum', 'Kanban'] },
]

const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Básico' },
  { name: 'Espanhol', level: 'Básico' }
]

// As 4 mais ligadas a front-end/UX ficam visíveis; o resto (fora do escopo
// direto, como Arduino) fica atrás de "Ver todas" — continuam reais, só não
// vão pra vitrine principal.
const certifications = [
  'Desenvolvimento Front-End — Alura',
  'Programação e Modelagem de Sistemas — Alura',
  'Informática na Educação — IFAM',
  'Design Digital — Samsung & UEA',
]
const moreCertifications = [
  'Programação e Desenvolvimento Web — Prof. Paulo Borges',
  'Transformação Digital — Samsung & UEA',
  'Marketing Digital e Ética Profissional — Indústria do Saber',
  'Robótica com Arduino — IFAM',
]
const showAllCerts = ref(false)

// Só competências com uma prova concreta já mostrada no site — nada de
// adjetivo solto tipo "autodidata" sem nada que sustente a afirmação.
const provenSkills = [
  { label: 'Levantamento de requisitos', proof: 'Prova: Green Factory 5.0' },
  { label: 'Colaboração multidisciplinar', proof: 'Prova: Green Factory 5.0 & Fluo (open source)' },
]
</script>
