# Portfolio — Marcos de Souza Tavares

Portfolio pessoal de Marcos de Souza Tavares, Desenvolvedor Front-End, construído com Vue 3 (Composition API), Tailwind CSS e Vite.

Acesse aqui: https://marcossouzatavares.github.io/portfolio-online/

## Tecnologias

- **Vue.js 3** — Composition API
- **Tailwind CSS** — design tokens (cores, tipografia e espaçamento) centralizados em `tailwind.config.js`
- **Vite** — build e dev server
- Ícones em SVG inline (`src/components/Icon.vue`) — sem dependência de biblioteca de ícones externa

## Direção de design — "Sinal"

Fundo grafite neutro, texto papel quente e um único acento (âmbar) usado como indicador — inspirado nos indicadores de painel de controle dos projetos de automação industrial do Marcos (Green Factory 5.0). Só dois efeitos de interação: revelação por scroll (`IntersectionObserver`, respeitando `prefers-reduced-motion`) e uma microinteração de hover consistente em elementos clicáveis.

- **Cores**: `ink` (#0E1116), `ink-soft`, `paper` (#F5F3EE), `muted`, `accent` (#E8A33D) — ver `tailwind.config.js`.
- **Tipografia**: Space Grotesk (títulos) + IBM Plex Sans/Mono (texto e rótulos técnicos).
- **Motivo visual único**: rótulo mono "01 — Nome da seção" antes de cada `h2`, sem repetir efeito decorativo por seção.

## Instalação

```bash
npm install
```

## Comandos

```bash
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção em dist/
npm run preview   # preview local da build
```

## Estrutura

```
src/
├── assets/style.css           # tokens base, .section, .surface, .kicker, etc.
├── components/
│   ├── Header.vue / Footer.vue / BackToTop.vue
│   ├── Hero.vue / About.vue / Experience.vue / Skills.vue / Portfolio.vue / Contact.vue
│   └── Icon.vue                # ícones SVG inline, um único componente
├── composables/
│   ├── useScrollAnimation.js   # revelação por IntersectionObserver
│   └── useSmoothScroll.js      # navegação por âncora com offset do header fixo
├── App.vue
└── main.js
public/
├── favicon.svg
├── robots.txt
├── sitemap.xml
└── eupc.webp / eupc-fallback.jpg
```

## Acessibilidade e SEO

- Único `h1` (Hero), hierarquia de heading correta em todas as seções.
- Foco visível (`:focus-visible`) em todo elemento interativo.
- Contraste de todos os tokens de texto verificado contra WCAG AA (`muted` ≈ 6.7:1, `accent` ≈ 8.7:1 sobre `ink`).
- Meta tags completas (description, Open Graph, Twitter Card, canonical) e dados estruturados `schema.org/Person` em `index.html`.
- Auditoria Lighthouse (build de produção): Performance 94, Acessibilidade 100, Boas Práticas 100, SEO 100.

## Pendências conhecidas

Sinalizadas em comentários no código (`Skills.vue`, `Portfolio.vue`) — aguardando confirmação de dados reais antes de finalizar:
- Nível real de TypeScript/testes/CI-CD e se GraphQL/Prisma devem ser mantidos.
- Links de repositório/demo específicos para Green Factory 5.0, Arara Delivery e Site Ambiente Parintins.
- Botão de download de CV em PDF (aguardando arquivo).

Ver também `github-checklist.md` para recomendações do perfil GitHub.

## Licença

Projeto pessoal, sem licença específica.
