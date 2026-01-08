<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative pt-20 md:pt-24 pb-12 md:pb-0 overflow-hidden">
    <!-- Subtle Tech Background Effects -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Grid Pattern -->
      <div class="absolute inset-0 opacity-[0.08]" style="background-image: linear-gradient(rgba(0, 191, 255, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 191, 255, 0.6) 1px, transparent 1px); background-size: 40px 40px; background-position: 0 0, 0 0;"></div>
      
      <!-- Animated Code Lines -->
      <div class="absolute top-24 left-6 md:left-10 text-[10px] md:text-xs font-mono text-primary/20 md:text-primary/25 opacity-80 hidden sm:block">
        <div class="opacity-0 animate-fade-in" style="animation-delay: 1s; animation-fill-mode: forwards;">const dev = {</div>
        <div class="opacity-0 animate-fade-in ml-3 md:ml-4" style="animation-delay: 1.8s; animation-fill-mode: forwards;">tech: 'Angular',</div>
        <div class="opacity-0 animate-fade-in ml-3 md:ml-4" style="animation-delay: 2.5s; animation-fill-mode: forwards;">level: 'Senior'</div>
        <div class="opacity-0 animate-fade-in ml-3 md:ml-4" style="animation-delay: 3.2s; animation-fill-mode: forwards;">};</div>
      </div>
      
      <div class="absolute bottom-32 right-6 md:right-10 text-[10px] md:text-xs font-mono text-primary/20 md:text-primary/25 opacity-80 hidden sm:block">
        <div class="opacity-0 animate-fade-in" style="animation-delay: 2s; animation-fill-mode: forwards;">function build() {</div>
        <div class="opacity-0 animate-fade-in ml-3 md:ml-4" style="animation-delay: 2.7s; animation-fill-mode: forwards;">return quality;</div>
        <div class="opacity-0 animate-fade-in" style="animation-delay: 3.4s; animation-fill-mode: forwards;">}</div>
      </div>

      <!-- Binary Animation -->
      <div class="absolute top-1/3 right-8 text-[9px] md:text-[11px] font-mono text-primary/15 opacity-60 hidden lg:block space-y-1">
        <div class="opacity-0 animate-fade-in" style="animation-delay: 3s; animation-fill-mode: forwards;">01100001</div>
        <div class="opacity-0 animate-fade-in" style="animation-delay: 3.3s; animation-fill-mode: forwards;">01110010</div>
        <div class="opacity-0 animate-fade-in" style="animation-delay: 3.6s; animation-fill-mode: forwards;">01110010</div>
      </div>
      
      <!-- Tech Stack Indicators -->
      <div class="absolute top-1/2 -left-20 text-primary/8 opacity-50 hidden xl:block font-mono text-sm rotate-90">
        &lt;React /&gt; • Vue • Angular
      </div>
      
      <!-- Additional Code Fragments -->
      <div class="absolute top-16 right-16 text-[9px] font-mono text-primary/12 opacity-50 hidden 2xl:block">
        <div class="opacity-0 animate-fade-in" style="animation-delay: 4s; animation-fill-mode: forwards;">import { createApp }</div>
      </div>
    </div>

    <!-- Gradient Orbs -->
    <div class="absolute top-1/4 -left-32 md:-left-20 w-48 md:w-64 h-48 md:h-64 bg-primary/8 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-1/4 -right-32 md:-right-20 w-48 md:w-64 h-48 md:h-64 bg-secondary/8 rounded-full blur-3xl pointer-events-none"></div>
    
    <!-- Corner Accents -->
    <div class="absolute top-0 left-0 w-40 h-40 border-t-2 border-l-2 border-primary/15"></div>
    <div class="absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-primary/15"></div>
    
    <!-- Diagonal Lines -->
    <div class="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden lg:block"></div>
    <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent hidden lg:block"></div>

    <div class="container relative z-10 -mt-12 md:-mt-16 lg:-mt-20">
      <div class="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 md:gap-12 lg:gap-16">
        <!-- Hero Image - Clean and Professional -->
        <div class="relative flex-shrink-0">
          <div class="absolute inset-0 rounded-full bg-primary/5 blur-xl -z-10"></div>
          <img 
            src="/Marcos.jpg" 
            alt="Foto de Marcos de Souza Tavares" 
            class="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-2 border-primary/20 shadow-lg hover:border-primary/40 transition-all duration-300"
          >
        </div>

        <!-- Hero Text - Clean Typography -->
        <div class="flex-1 text-center lg:text-left space-y-4 md:space-y-5">
          <div class="space-y-1.5 md:space-y-2">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-text-light">
              Marcos de Souza Tavares
            </h1>
            <h2 class="text-lg sm:text-xl md:text-xl lg:text-2xl font-medium text-primary">
              Engenheiro de Software Front-end
            </h2>
            <p class="text-xs sm:text-sm md:text-base text-text-light/60 font-medium">
              Angular, TypeScript & RxJS<br class="sm:hidden"> <span class="hidden sm:inline">•</span> Arquitetura de Micro-frontends & Cloud Solutions
            </p>
          </div>
          
          <p class="text-sm sm:text-base md:text-lg text-text-light/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed pt-1 md:pt-2">
            Desenvolvedor com experiência sólida na criação de interfaces web modernas, acessíveis, responsivas e escaláveis. Especializado em arquiteturas de micro-frontends e soluções em cloud.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
            <a 
              href="#portfolio" 
              @click.prevent="scrollToSection('portfolio')" 
              class="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg font-semibold bg-primary text-dark hover:bg-primary/90 transition-colors duration-200 w-full sm:w-auto"
            >
              Ver Portfólio
            </a>
            <a 
              href="#contact" 
              @click.prevent="scrollToSection('contact')" 
              class="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg font-semibold border-2 border-white/20 text-text-light hover:border-primary/40 hover:text-primary transition-all duration-200 w-full sm:w-auto"
            >
              Fale Comigo
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useSmoothScroll } from '../composables/useSmoothScroll'

const { scrollToSection } = useSmoothScroll()
</script>
