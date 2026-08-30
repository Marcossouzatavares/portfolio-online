<template>
  <section id="about" ref="aboutSection" class="section bg-ink-soft">
    <div class="container">
      <p class="kicker"><span class="kicker-index">01</span> Sobre mim</p>
      <h2 class="section-title">Quem constrói a interface</h2>

      <div class="max-w-3xl">
        <p class="text-body-lg text-muted leading-relaxed">
          Sou Desenvolvedor Front-End e cofundador da
          <span class="text-accent font-medium">Arara Delivery</span>, plataforma de delivery em
          produção usada por estabelecimentos reais em Manaus. No dia a dia trabalho com
          <span class="text-paper font-medium">React.js</span>,
          <span class="text-paper font-medium">Next.js</span>,
          <span class="text-paper font-medium">TypeScript</span> e
          <span class="text-paper font-medium">Tailwind CSS</span> — a mesma stack que sustenta a
          Arara Delivery e o <span class="text-accent font-medium">Fluo</span>, minha plataforma de
          código aberto para ensino de inglês com IA, onde recebo e reviso contribuições de outros
          desenvolvedores. São mais de 5 anos entre projetos institucionais, freelas e produtos
          próprios, sempre com foco em interfaces acessíveis e performáticas.
        </p>

        <div class="flex flex-wrap gap-2 mt-6">
          <span v-for="tag in focusTags" :key="tag" class="tag">{{ tag }}</span>
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
