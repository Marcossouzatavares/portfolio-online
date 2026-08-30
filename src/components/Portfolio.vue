<template>
  <section id="portfolio" ref="portfolioSection" class="section">
    <div class="container">
      <p class="kicker"><span class="kicker-index">03</span> Projetos</p>
      <h2 class="section-title">Contexto, decisões e resultado</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <article v-for="(project, index) in projects" :key="project.title" class="surface p-6 flex flex-col">
          <!-- Mídia: proporção e tratamento iguais em todo card, print real quando existir. -->
          <div class="aspect-video rounded-xl overflow-hidden bg-ink border border-ink-line mb-4 flex-shrink-0">
            <picture v-if="project.image">
              <source :srcset="project.image.webp" type="image/webp">
              <img
                :src="project.image.fallback"
                :alt="project.image.alt"
                width="800"
                height="450"
                :loading="index === 0 ? 'eager' : 'lazy'"
                class="w-full h-full object-cover"
              >
            </picture>
            <div v-else class="w-full h-full flex flex-col items-center justify-center gap-2 text-muted">
              <Icon name="layout" class="w-6 h-6" />
              <span class="text-body-xs">Print em breve</span>
            </div>
          </div>

          <div class="flex items-start justify-between gap-2 mb-3">
            <h3 class="font-display text-display-md text-paper">{{ project.title }}</h3>
            <span v-if="project.badge" class="badge-solid flex-shrink-0">{{ project.badge }}</span>
          </div>

          <!-- Card ainda em elaboração: sem dados suficientes para um case study completo. -->
          <template v-if="project.wip">
            <p class="text-body-sm text-muted leading-relaxed flex-1 flex items-start">
              Estudo de caso em elaboração.
            </p>
            <!-- PERGUNTAR AO MARCOS: contexto (marca/produto e público-alvo), decisões de
                 design (paleta, tipografia, layout), stack usada e link ao vivo do Jaguar Energy Drink. -->
          </template>

          <template v-else>
            <dl class="space-y-3 text-body-sm mb-4 flex-1">
              <div>
                <dt class="text-accent font-mono text-body-xs uppercase tracking-wider mb-1">Contexto</dt>
                <dd class="text-muted leading-relaxed">{{ project.context }}</dd>
              </div>
              <div>
                <dt class="text-accent font-mono text-body-xs uppercase tracking-wider mb-1">Decisões</dt>
                <dd class="text-muted leading-relaxed">{{ project.decisions }}</dd>
              </div>
              <div>
                <dt class="text-accent font-mono text-body-xs uppercase tracking-wider mb-1">Resultado</dt>
                <dd class="text-muted leading-relaxed">{{ project.result }}</dd>
              </div>
            </dl>

            <div class="flex flex-wrap gap-1.5 mb-4">
              <span v-for="tech in project.tech" :key="tech" class="tag">{{ tech }}</span>
            </div>

            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener"
              class="btn-secondary w-full text-body-sm"
            >
              {{ project.linkLabel }}
              <Icon name="arrow-right" class="w-4 h-4" />
            </a>
            <p v-else-if="project.sourceNote" class="text-body-sm text-muted italic">
              {{ project.sourceNote }}
            </p>
          </template>
        </article>
      </div>

      <!--
        PERGUNTAR AO MARCOS (não inventar números, links ou resultados até confirmação):
        - Arara Delivery: link ao vivo definitivo; 1-2 métricas reais de uso (nº de
          estabelecimentos, pedidos) se houver; 2-3 screenshots reais do produto
          (dashboard, tela de pedido) — é o único material visual possível já que o
          código é fechado.
        - Fluo: link do repositório público no GitHub; stack exata (backend, banco de
          dados, como a IA foi integrada); métricas de contribuição (contribuidores,
          estrelas, issues fechadas) se houver; screenshot da plataforma.
        - Green Factory 5.0: link de repositório específico, se público; screenshot.
        - Jaguar Energy Drink: todo o conteúdo (ver comentário no card acima).
        - Site Ambiente Parintins: confirmar se ainda está no ar e link de acesso atual;
          screenshot. Mantive este projeto na lista mesmo não estando no novo
          enquadramento pedido — remova se não fizer mais sentido no destaque principal.
        - Casa de Acolhida (Parintins) e DevConnect: aguardando Marcos detalhar contexto,
          decisões, stack e resultado de cada um antes de virarem cards.
        - Não incluir aqui projetos de exercício (Calculadora, Relogio_digital,
          Marcos-Fotos, Login-System-Temperature-search) — ficam só no GitHub.
      -->
    </div>
  </section>
</template>

<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation'
import Icon from './Icon.vue'

const { elementRef: portfolioSection } = useScrollAnimation()

const GITHUB_REPOS = 'https://github.com/marcossouzatavares23?tab=repositories'

const projects = [
  {
    title: 'Arara Delivery',
    badge: 'Cofundador · Em produção',
    context: 'Plataforma de delivery em produção, criada para dar a estabelecimentos de Manaus uma solução própria de pedidos online.',
    decisions: 'Como cofundador e desenvolvedor front-end, defini a arquitetura de frontend do produto — React.js, Next.js e TypeScript com Tailwind CSS — priorizando performance e organização de componentes para sustentar o crescimento do produto.',
    result: 'Em produção, com estabelecimentos parceiros reais usando a plataforma.',
    tech: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    link: null,
    sourceNote: 'Código fechado — produto comercial.',
    image: null,
  },
  {
    title: 'Fluo',
    badge: 'Open Source',
    context: 'Plataforma fullstack para ensino de inglês, com metodologias de estudo estruturadas e integração de IA para apoiar o aprendizado.',
    decisions: 'Arquitetura fullstack conectando backend e frontend, com banco de dados próprio e integração de IA no fluxo de estudo. Mantido como projeto de código aberto.',
    result: 'Código aberto no GitHub, recebendo contribuições externas de outros desenvolvedores.',
    tech: ['Full-Stack', 'IA', 'Banco de Dados'],
    link: null,
    linkLabel: 'Ver repositório',
    sourceNote: 'Repositório público no GitHub — link em breve.',
    image: null,
  },
  {
    title: 'Green Factory 5.0',
    badge: null,
    context: 'Movelaria no interior do Amazonas precisava de um sistema produtivo inteligente alinhado a princípios de Indústria 4.0, em parceria com UEA, CITS, Copal e Fadect.',
    decisions: 'Atuação no front-end da solução, priorizando interface clara para operadores da fábrica e integração com o restante do sistema produtivo.',
    result: 'Projeto entregue em parceria acadêmica-institucional (2024–2025). Métricas de impacto ainda não publicadas.',
    tech: ['Indústria 4.0', 'Front-End', 'Sustentabilidade'],
    link: GITHUB_REPOS,
    linkLabel: 'Ver repositórios',
    image: null,
  },
  {
    title: 'Jaguar Energy Drink',
    badge: 'UX/UI',
    wip: true,
    image: null,
  },
  {
    title: 'Site Ambiente Parintins',
    badge: null,
    context: 'Prefeitura Municipal de Parintins e o IFAM precisavam de um canal digital voltado à sustentabilidade ambiental do município.',
    decisions: 'Desenvolvimento do front-end do sistema em parceria institucional, com foco em clareza de informação para o público local.',
    result: 'Sistema entregue à Prefeitura. Status atual no ar e link de acesso pendentes de confirmação.',
    tech: ['Front-End', 'Sustentabilidade Ambiental'],
    link: GITHUB_REPOS,
    linkLabel: 'Ver repositórios',
    image: null,
  },
]
</script>
