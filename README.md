# Portfolio - Marcos de Souza Tavares

Portfolio pessoal moderno desenvolvido com Vue.js 3, Tailwind CSS e efeitos profissionais de nível sênior.

Acesse aqui: https://marcossouzatavares.github.io/portfolio-online/

## 🚀 Tecnologias

- **Vue.js 3** - Framework JavaScript progressivo com Composition API
- **Tailwind CSS** - Framework CSS utility-first para design moderno
- **Vite** - Build tool rápida e otimizada
- **Font Awesome** - Ícones profissionais
- **Google Fonts** - Tipografia (Poppins e Montserrat)

## ✨ Recursos e Efeitos Modernos

### Efeitos Visuais Implementados

1. **Glassmorphism**
   - Efeitos de vidro fosco com backdrop-blur
   - Bordas translúcidas e transparências suaves
   - Cards com efeito de profundidade

2. **Animações de Gradiente**
   - Textos com gradiente animado
   - Efeito shimmer em textos
   - Botões com gradientes dinâmicos

3. **Efeitos 3D**
   - Cards com hover 3D (perspectiva e rotação)
   - Transformações suaves em elementos interativos
   - Efeitos de profundidade e elevação

4. **Micro-animações (Micro-delights)**
   - Animações sutis em botões (scale, shadow)
   - Feedback visual em elementos interativos
   - Transições suaves entre estados

5. **Efeitos Aurora e Partículas**
   - Background com efeito aurora animado
   - Partículas flutuantes na seção de projetos
   - Gradientes orbitais animados

6. **Animações de Texto**
   - Texto cinético com efeito shimmer
   - Animações de entrada suaves (fade-in, slide-up)
   - Efeitos de brilho e glow

7. **Bento Grid Layout**
   - Layout estilo "Bento Box" para projetos
   - Grid responsivo e adaptável
   - Cards destacados (featured) com tamanho maior

8. **Scroll Storytelling**
   - Animações baseadas em Intersection Observer
   - Elementos aparecem conforme o scroll
   - Transições suaves entre seções

## 📦 Instalação

1. Clone o repositório ou navegue até a pasta do projeto
2. Instale as dependências:

```bash
npm install
```

## 🛠️ Comandos Disponíveis

### Desenvolvimento
```bash
npm run dev
```
Inicia o servidor de desenvolvimento na porta 3000

### Build para Produção
```bash
npm run build
```
Gera os arquivos otimizados na pasta `dist/`

### Preview da Build
```bash
npm run preview
```
Visualiza a build de produção localmente

## 📁 Estrutura do Projeto

```
portfolio-vue/
├── public/              # Arquivos estáticos (imagens, etc)
│   └── Marcos.jpg
├── src/
│   ├── assets/          # Recursos (CSS global com Tailwind)
│   │   └── style.css
│   ├── components/      # Componentes Vue
│   │   ├── Header.vue   # Header com menu responsivo e glassmorphism
│   │   ├── Hero.vue     # Hero com efeitos aurora e gradientes animados
│   │   ├── About.vue    # Sobre com cards glassmorphism
│   │   ├── Skills.vue   # Habilidades com cards 3D
│   │   ├── Portfolio.vue # Projetos com Bento Grid e efeitos de partículas
│   │   ├── Contact.vue  # Contato com formulário e ícones animados
│   │   └── Footer.vue   # Footer minimalista
│   ├── composables/     # Composables reutilizáveis
│   │   ├── useScrollAnimation.js
│   │   └── useSmoothScroll.js
│   ├── App.vue          # Componente raiz
│   └── main.js          # Ponto de entrada
├── index.html           # HTML principal
├── package.json         # Dependências e scripts
├── tailwind.config.js   # Configuração do Tailwind CSS
├── postcss.config.js    # Configuração do PostCSS
├── vite.config.js       # Configuração do Vite
└── README.md            # Este arquivo
```

## 🎨 Paleta de Cores

O projeto usa uma paleta de cores moderna e profissional:

- **Primary**: `#00BFFF` (Azul vibrante)
- **Secondary**: `#FF7F50` (Laranja coral)
- **Dark**: `#1A1A2E` (Fundo principal)
- **Dark Secondary**: `#1F1F3D` (Fundo alternativo)
- **Text Light**: `#F0F0F0` (Texto principal)

## 🎯 Características Especiais

### Responsividade
- Design mobile-first
- Breakpoints otimizados para todos os dispositivos
- Menu mobile com animações suaves

### Performance
- Lazy loading de componentes
- Animações otimizadas com CSS
- Build otimizado com Vite

### Acessibilidade
- Labels ARIA apropriados
- Navegação por teclado
- Contraste adequado de cores
- Estrutura semântica HTML

## 🔧 Personalização

### Cores
As cores podem ser alteradas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: '#00BFFF',
  secondary: '#FF7F50',
  // ... outras cores
}
```

### Animações
As animações podem ser ajustadas no arquivo `tailwind.config.js` dentro da seção `keyframes` e `animation`.

### Componentes
Todos os componentes são modulares e podem ser facilmente personalizados. Cada componente usa estilos scoped e classes Tailwind.

## 📝 Notas

- A imagem `Marcos.jpg` deve estar na pasta `public/` para ser acessível
- O projeto usa variáveis CSS para fácil customização
- Todos os componentes são modulares e podem ser facilmente modificados

## 🌟 Inspirações e Referências

Este projeto foi desenvolvido seguindo as tendências de 2026:
- Magic UI - Componentes com animações avançadas
- Aceternity UI - Efeitos visuais tipo Apple
- Glassmorphism e Soft Transparency
- Micro-delights em interações
- Bento Grid Layouts

## 📄 Licença

Este projeto é pessoal e não possui licença específica.
