<template>
  <section id="experience" ref="experienceSection" class="section experience relative overflow-hidden">
    <!-- Tech Background Effects -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 opacity-[0.06]" style="background-image: linear-gradient(rgba(0, 191, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 191, 255, 0.5) 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>

    <div class="container relative z-10">
      <h2 class="section-title">
        <span class="gradient-text">Trajetória</span>
      </h2>
      <p class="text-center text-sm sm:text-base text-text-light/60 max-w-2xl mx-auto -mt-8 mb-10 md:mb-14">
        Minha caminhada profissional e acadêmica na área de tecnologia.
      </p>

      <div class="max-w-3xl mx-auto relative">
        <!-- Timeline line -->
        <div class="absolute left-[19px] sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent"></div>

        <div class="space-y-6">
          <div
            v-for="(item, index) in timeline"
            :key="index"
            class="relative flex gap-4 sm:gap-6 pl-0"
          >
            <!-- Marker -->
            <div class="relative z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass border border-primary/30 flex items-center justify-center">
              <i :class="item.icon" class="text-primary text-base sm:text-lg"></i>
            </div>

            <!-- Content -->
            <div class="glass-card flex-1 p-4 md:p-5 hover:border-primary/30 transition-colors duration-300">
              <div class="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <h3 class="font-display font-bold text-base sm:text-lg text-text-light">{{ item.title }}</h3>
                <span
                  class="px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold rounded-full whitespace-nowrap"
                  :class="item.current ? 'bg-accent/15 text-accent border border-accent/30' : 'bg-primary/10 text-primary border border-primary/20'"
                >
                  {{ item.period }}
                </span>
              </div>
              <p class="text-xs sm:text-sm text-secondary font-semibold mb-2">{{ item.org }}</p>
              <p class="text-sm text-text-light/70 leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef: experienceSection } = useScrollAnimation()

const timeline = [
  {
    icon: 'fas fa-laptop-code',
    title: 'Desenvolvedor Front-End',
    org: 'Arara Delivery (Projeto Pessoal)',
    period: 'Atual',
    current: true,
    description: 'Plataforma de delivery desenvolvida como projeto pessoal, aplicando React.js, Next.js, TypeScript e Tailwind CSS em uma arquitetura de frontend moderna.'
  },
  {
    icon: 'fas fa-industry',
    title: 'Desenvolvedor Front-End — Green Factory 5.0',
    org: 'UEA, CITS, Copal e Fadect',
    period: '2024 – Ago 2025',
    current: false,
    description: 'Contribuí para a construção de um sistema produtivo inteligente para uma movelaria no interior do Amazonas, com foco em Indústria 4.0 e sustentabilidade.'
  },
  {
    icon: 'fas fa-globe',
    title: 'Desenvolvedor Front-End Freelancer',
    org: 'Projetos Independentes',
    period: '2023 – 2024',
    current: false,
    description: 'Desenvolvimento de landing pages para clientes diversos como freelancer.'
  },
  {
    icon: 'fas fa-seedling',
    title: 'Desenvolvedor Front-End — Site Ambiente Parintins',
    org: 'IFAM & Prefeitura Municipal de Parintins',
    period: '2021 – 2023',
    current: false,
    description: 'Desenvolvimento de sistema com foco em sustentabilidade ambiental para o município de Parintins.'
  },
  {
    icon: 'fas fa-chalkboard-teacher',
    title: 'Professor de Informática',
    org: 'Projeto IFAM/UEA',
    period: '2021',
    current: false,
    description: 'Aulas de informática básica e avançada, com desenvolvimento de atividades práticas focadas em inclusão digital.'
  },
  {
    icon: 'fas fa-network-wired',
    title: 'Técnico em Informática',
    org: 'IFAM',
    period: '2021',
    current: false,
    description: 'Suporte técnico em redes e manutenção de computadores, com implementação de melhorias em TI institucional.'
  }
]
</script>
