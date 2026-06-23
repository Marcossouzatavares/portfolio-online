<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative pt-20 md:pt-24 pb-12 md:pb-0 overflow-hidden">
    <!-- Soft Ambient Glow (single, subtle) -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="container relative z-10">
      <div class="flex flex-col lg:flex-row-reverse items-center justify-between gap-10 md:gap-12 lg:gap-16">
        <!-- Hero Image - Clean Rounded Card -->
        <div class="relative flex-shrink-0">
          <div class="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              :src="photoSrc"
              alt="Foto de Marcos de Souza Tavares"
              class="w-full h-full object-cover"
            >
          </div>
        </div>

        <!-- Hero Text - Clean Typography -->
        <div class="flex-1 text-center lg:text-left space-y-4 md:space-y-5">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            <span class="text-[11px] sm:text-xs font-medium text-text-light">Disponível para novas oportunidades</span>
          </div>

          <div class="space-y-1.5 md:space-y-2">
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold leading-tight text-text-light">
              Marcos de Souza Tavares
            </h1>
            <h2 class="text-base sm:text-lg md:text-xl font-medium text-primary">
              Desenvolvedor Front-End
            </h2>
            <p class="text-xs sm:text-sm text-text-light/55 font-medium">
              React.js, Next.js & TypeScript<br class="sm:hidden"> <span class="hidden sm:inline">•</span> Tailwind CSS, Figma & Boas Práticas de UI/UX
            </p>
          </div>

          <p class="text-sm sm:text-base text-text-light/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed pt-1">
            Desenvolvedor com experiência sólida na criação de interfaces web modernas, acessíveis, responsivas e escaláveis. Atuo com tecnologias amplamente utilizadas no mercado, sempre buscando boas práticas de performance e usabilidade.
          </p>

          <!-- Quick Stats -->
          <div class="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-1">
            <div v-for="(stat, index) in stats" :key="index" class="text-center lg:text-left">
              <p class="text-xl sm:text-2xl font-display font-bold text-primary">{{ stat.value }}</p>
              <p class="text-[10px] sm:text-xs text-text-light/55 mt-0.5 leading-tight max-w-[6.5rem] sm:max-w-none">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const photoSrc = `${import.meta.env.BASE_URL}Marcos.jpg`

const stats = [
  { value: '5+', label: 'Anos em tecnologia' },
  { value: '+25', label: 'Projetos realizados' },
  { value: '10+', label: 'Tecnologias' },
]
</script>
