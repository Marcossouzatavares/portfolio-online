<template>
  <a href="#main-content" class="skip-link">Pular para o conteúdo</a>
  <div id="app">
    <Header />
    <main id="main-content">
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
    <Footer />
    <BackToTop />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import BackToTop from './components/BackToTop.vue'
</script>

<style scoped>
.skip-link {
  position: absolute;
  left: 1rem;
  top: -3rem;
  z-index: 100;
  background: theme('colors.accent');
  color: theme('colors.ink');
  padding: 0.6rem 1rem;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: top 0.2s ease;
}

.skip-link:focus {
  top: 1rem;
}
</style>
