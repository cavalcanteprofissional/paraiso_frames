# Changelog

## [0.1.0] - 2026-07-18

### Adicionado
- **Instagram Feed** — hook `useInstagramFeed.ts`, componentes `InstagramFeed.tsx` e `InstagramSection.tsx` com fallback para quando API não configurada
- **Hooks de interação** — `useAccessibility` (foco e leitor de tela), `useAutoRotate` (timer carrossel), `useKeyboardNavigation` (teclas de atalho), `useSwipeGestures` (toque mobile), `useVideoPreloading` (pré-carregamento)
- **VideoSidebarPanel** — painel lateral deslizante com lista de projetos
- **VideoSkeleton** — skeletons de carregamento para cards de vídeo
- **ContactMap** — mapa Leaflet/OpenStreetMap na seção de contato
- **Tipos e utilitários** — `src/types/hero.types.ts` e `src/utils/animationVariants.ts`
- **Design System completo** — `global.scss` com tokens de cores (Solar), tipografia, sombras, animações CSS e classes utilitárias
- **Arquivos de configuração** — `.env.example` com variáveis do Instagram, `DESIGN.md` com especificação do design system
- **Novo favicon** — `public/favicon.svg`
- **Folha de estilo global** — `src/index.css` com estilos base do Swiper

### Modificado
- **index.html** — atualizado com pré-conexão ao Google Fonts e metadados do projeto
- **package.json** — adicionadas dependências: framer-motion, leaflet, react-leaflet, react-icons, react-player, swiper, sass
- **HeroSection** — novas animações, overlay refinado e suporte a vídeo full-screen
- **Navigation** — menu mobile com hamburger drawer, scroll suave para seções
- **PortfolioSection** — filtros por categoria, estatísticas do portfólio
- **AboutSection** — grid de 6 serviços com cards estilizados
- **ContactSection** — formulário de contato integrado com mapa Leaflet e links sociais
- **Footer** — layout multicolunas com logo, contatos, redes sociais e créditos
- **BackgroundVideoPlayer** — suporte a vídeo do YouTube em background
- **LandingPage** — composição de todas as seções na ordem correta
- **main.tsx** — import global do CSS do Leaflet
- **global.scss** — refinamento dos tokens de design e animações
- **TODO.md** — registro atualizado de tarefas concluídas e pendentes

### Removido
- `public/vite.svg` — substituído pelo favicon personalizado

## [0.0.0] - 2026-03-15

### Adicionado
- Estrutura inicial do projeto com React + TypeScript + Vite
- Player de vídeo com react-player (YouTube, DASH, HLS)
- Sistema de roteamento single-page
- Layout base responsivo
- Estilos iniciais com SCSS

### Commits anteriores
- `34a1ae0` feat: replace favicon with camera lens icon
- `07cbd8d` feat: add logo, social links and improve contact section
- `f3b91af` feat: implement full-screen video background option for hero section
- `2fd9fa5` style: improve footer mobile alignment and centering
- `44bfa9f` style: optimize services section for mobile and improve heading alignment
- `a069d69` refactor: enhance services section and remove unused components
- `14e4fc6` feat: refactor global styles and improve component layouts
- `584202e` refactor: remove unused files and improve TypeScript configuration
- `6be2f05` fix: resolve blank space and layout issues
- `adf1e8e` feat: improve UX/UI design for all screen sizes
- `d82b5b6` fix: resolve SASS syntax error in Footer
- `2b62522` feat: add developer portfolio link to footer
- `898cc40` feat: improve VideoPlayer time formatting
- `1e8a722` Refactor to single-page video portfolio landing
