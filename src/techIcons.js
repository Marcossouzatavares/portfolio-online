// Ícones reais de marca via simple-icons (SVG monocromático + cor oficial),
// importados um a um (tree-shakeable) em vez de um glob com milhares de ícones.
// Cores extraídas de node_modules/simple-icons/data/simple-icons.json — nunca
// digitadas de memória, pra não arriscar um hex errado.
import html5 from 'simple-icons/icons/html5.svg?raw'
import css from 'simple-icons/icons/css.svg?raw'
import javascript from 'simple-icons/icons/javascript.svg?raw'
import typescript from 'simple-icons/icons/typescript.svg?raw'
import react from 'simple-icons/icons/react.svg?raw'
import nextdotjs from 'simple-icons/icons/nextdotjs.svg?raw'
import redux from 'simple-icons/icons/redux.svg?raw'
import vite from 'simple-icons/icons/vite.svg?raw'
import tailwindcss from 'simple-icons/icons/tailwindcss.svg?raw'
import bootstrap from 'simple-icons/icons/bootstrap.svg?raw'
import sass from 'simple-icons/icons/sass.svg?raw'
import figma from 'simple-icons/icons/figma.svg?raw'
import lighthouse from 'simple-icons/icons/lighthouse.svg?raw'
import axios from 'simple-icons/icons/axios.svg?raw'
import jsonwebtokens from 'simple-icons/icons/jsonwebtokens.svg?raw'
import postman from 'simple-icons/icons/postman.svg?raw'
import swagger from 'simple-icons/icons/swagger.svg?raw'
import graphql from 'simple-icons/icons/graphql.svg?raw'
import apollographql from 'simple-icons/icons/apollographql.svg?raw'
import trello from 'simple-icons/icons/trello.svg?raw'
import jira from 'simple-icons/icons/jira.svg?raw'
import notion from 'simple-icons/icons/notion.svg?raw'
import git from 'simple-icons/icons/git.svg?raw'
import githubactions from 'simple-icons/icons/githubactions.svg?raw'
import eslint from 'simple-icons/icons/eslint.svg?raw'
import prettier from 'simple-icons/icons/prettier.svg?raw'
import vercel from 'simple-icons/icons/vercel.svg?raw'
import netlify from 'simple-icons/icons/netlify.svg?raw'
import github from 'simple-icons/icons/github.svg?raw'
import firebase from 'simple-icons/icons/firebase.svg?raw'
import mysql from 'simple-icons/icons/mysql.svg?raw'
import postgresql from 'simple-icons/icons/postgresql.svg?raw'
import prisma from 'simple-icons/icons/prisma.svg?raw'

// Algumas marcas usam preto como cor oficial — invisível sobre o fundo escuro
// do site. Nesses casos, cai para um cinza claro (fallback), como o próprio
// GitHub/Next.js fazem em tema escuro (logo branca).
const LIGHT_FALLBACK = '#D9D7D0'

export const techIcons = {
  html5: { svg: html5, hex: '#E34F26', title: 'HTML5' },
  css: { svg: css, hex: '#663399', title: 'CSS3' },
  javascript: { svg: javascript, hex: '#F7DF1E', title: 'JavaScript' },
  typescript: { svg: typescript, hex: '#3178C6', title: 'TypeScript' },
  react: { svg: react, hex: '#61DAFB', title: 'React.js' },
  nextdotjs: { svg: nextdotjs, hex: LIGHT_FALLBACK, title: 'Next.js' },
  redux: { svg: redux, hex: '#764ABC', title: 'Redux Toolkit' },
  vite: { svg: vite, hex: '#9135FF', title: 'Vite' },
  tailwindcss: { svg: tailwindcss, hex: '#06B6D4', title: 'Tailwind CSS' },
  bootstrap: { svg: bootstrap, hex: '#7952B3', title: 'Bootstrap' },
  sass: { svg: sass, hex: '#CC6699', title: 'Sass' },
  figma: { svg: figma, hex: '#F24E1E', title: 'Figma' },
  lighthouse: { svg: lighthouse, hex: '#F44B21', title: 'Lighthouse' },
  axios: { svg: axios, hex: '#5A29E4', title: 'Axios' },
  jsonwebtokens: { svg: jsonwebtokens, hex: LIGHT_FALLBACK, title: 'JSON Web Tokens' },
  postman: { svg: postman, hex: '#FF6C37', title: 'Postman' },
  swagger: { svg: swagger, hex: '#85EA2D', title: 'Swagger' },
  graphql: { svg: graphql, hex: '#E10098', title: 'GraphQL' },
  apollographql: { svg: apollographql, hex: LIGHT_FALLBACK, title: 'Apollo Client' },
  trello: { svg: trello, hex: '#0052CC', title: 'Trello' },
  jira: { svg: jira, hex: '#0052CC', title: 'Jira' },
  notion: { svg: notion, hex: LIGHT_FALLBACK, title: 'Notion' },
  git: { svg: git, hex: '#F03C2E', title: 'Git' },
  githubactions: { svg: githubactions, hex: '#2088FF', title: 'GitHub Actions' },
  eslint: { svg: eslint, hex: '#4B32C3', title: 'ESLint' },
  prettier: { svg: prettier, hex: '#F7B93E', title: 'Prettier' },
  vercel: { svg: vercel, hex: LIGHT_FALLBACK, title: 'Vercel' },
  netlify: { svg: netlify, hex: '#00C7B7', title: 'Netlify' },
  github: { svg: github, hex: LIGHT_FALLBACK, title: 'GitHub Pages' },
  firebase: { svg: firebase, hex: '#DD2C00', title: 'Firebase' },
  mysql: { svg: mysql, hex: '#4479A1', title: 'MySQL' },
  postgresql: { svg: postgresql, hex: '#4169E1', title: 'PostgreSQL' },
  prisma: { svg: prisma, hex: LIGHT_FALLBACK, title: 'Prisma' },
}
