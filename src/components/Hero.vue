<template>
  <section id="home" class="min-h-screen flex items-center justify-center pt-20 pb-8 lg:pb-16 scroll-mt-16">
    <div class="container">
      <div class="flex flex-col lg:flex-row items-center justify-center gap-5 sm:gap-8 lg:gap-20">
        <!-- Texto -->
        <div class="flex-1 max-w-xl text-center lg:text-left">
          <h1 class="font-display text-display-2xl text-paper mb-2">
            Marcos de Souza Tavares
          </h1>
          <p class="text-display-md font-display text-accent mb-4">
            Desenvolvedor Front-End — React, Next.js &amp; TypeScript
          </p>

          <p class="text-body-lg text-muted max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Construo interfaces web acessíveis, responsivas e escaláveis com tecnologias amplamente
            usadas no mercado, sempre com foco em performance e boas práticas de UI/UX.
          </p>

          <div class="flex items-center justify-center lg:justify-start gap-8 mt-8">
            <div v-for="(stat, index) in stats" :key="index" class="text-center lg:text-left">
              <p class="font-display text-display-lg text-paper">{{ stat.value }}</p>
              <p class="text-body-xs text-muted mt-1 max-w-[7rem] leading-tight">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <!-- Foto: sem moldura, borda ou sombra com contorno definido — as bordas da
             própria imagem se dissolvem no fundo por uma máscara de desvanecimento,
             em vez de recortar um "cartão" com formato visível por cima do fundo. -->
        <div class="relative w-full max-w-[10rem] sm:max-w-[13rem] lg:max-w-md flex-shrink-0">
          <div class="absolute -inset-16 bg-accent/15 blur-[90px] pointer-events-none" aria-hidden="true"></div>
          <div class="relative aspect-[3/4]">
            <picture>
              <source :srcset="`${base}eupc.webp`" type="image/webp">
              <img
                :src="`${base}eupc-fallback.jpg`"
                alt="Marcos de Souza Tavares programando em um notebook"
                width="900"
                height="1200"
                fetchpriority="high"
                class="w-full h-full object-cover object-top hero-photo"
              >
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const base = import.meta.env.BASE_URL

const stats = [
  { value: '5+', label: 'Anos em tecnologia' },
  { value: '+35', label: 'Projetos realizados' },
  { value: 'Cofundador', label: 'Arara Delivery' },
]
</script>

<style scoped>
/* Desvanece a foto ao longo de toda a borda do retângulo (topo, base e as duas
   laterais por inteiro) — não só nos cantos, como uma vinheta elíptica faria.
   Dois gradientes lineares (um por eixo) combinados por interseção: um pixel
   só fica opaco se estiver longe da borda nos dois eixos ao mesmo tempo. */
.hero-photo {
  --fade-x: linear-gradient(to right, transparent, black 14%, black 86%, transparent);
  --fade-y: linear-gradient(to bottom, transparent, black 14%, black 86%, transparent);
  mask-image: var(--fade-x), var(--fade-y);
  mask-composite: intersect;
  -webkit-mask-image: var(--fade-x), var(--fade-y);
  -webkit-mask-composite: source-in;
}
</style>
