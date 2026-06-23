<template>
  <div id="app">
    <Header />
    <main>
      <Hero />
      <About />
      <Experience />
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
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import BackToTop from './components/BackToTop.vue'
</script>

