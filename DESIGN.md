---
name: beach-portfolio-landing
description: >
  Crie landing pages completas de portfólio de praias com design solar e responsivo.
  Use esta skill sempre que o usuário mencionar: landing page de praia, portfólio de praias,
  site de fotografia de praia, feed do Instagram integrado, galeria de praias, portfólio de
  turismo costeiro, ou qualquer variação de site/portfólio temático de praia, mar ou litoral.
  Também acione quando o usuário pedir componentes como HeroSection, seção de contato, feed
  Instagram dinâmico, ou galeria de imagens em contexto de site de praia. Inclui paleta de
  cores solar, tipografia costeira, responsividade completa web/mobile e integração Instagram.
---

# Beach Portfolio Landing Page

Skill para criar landing pages de portfólio de praias com alta qualidade visual, paleta solar
coerente, integração com Instagram e responsividade total. Siga rigorosamente os tokens de
design, componentes e padrões UX/UI definidos abaixo.

---

## 1. PALETA DE CORES SOLAR

Use exclusivamente estas CSS variables em todo o projeto:

```css
:root {
  /* ── Primárias ── */
  --color-sol:        #F5A623;   /* âmbar solar — CTAs principais, destaques */
  --color-areia:      #F2E0C8;   /* areia clara — backgrounds secundários    */
  --color-oceano:     #2A7D9E;   /* azul oceano — links, bordas, acentos     */

  /* ── Neutras ── */
  --color-espuma:     #FDFAF5;   /* branco creme — backgrounds principais    */
  --color-concha:     #EAD5B7;   /* concha — cards, divisores, superfícies   */
  --color-pedra:      #6B5B4E;   /* pedra escura — texto corpo               */
  --color-coral:      #C4614A;   /* coral queimado — alertas, hover          */

  /* ── Gradientes ── */
  --gradient-hero:    linear-gradient(160deg, #F5A623 0%, #2A7D9E 100%);
  --gradient-sunset:  linear-gradient(180deg, #F5A623 0%, #F2E0C8 60%, #FDFAF5 100%);
  --gradient-ocean:   linear-gradient(180deg, #2A7D9E 0%, #1B5E7A 100%);
  --gradient-sand:    linear-gradient(180deg, #FDFAF5 0%, #F2E0C8 100%);

  /* ── Sombras ── */
  --shadow-soft:      0 4px 24px rgba(42,125,158,0.10);
  --shadow-card:      0 2px 12px rgba(107,91,78,0.12);
  --shadow-float:     0 8px 40px rgba(42,125,158,0.18);
}
```

**Regras de uso de cor:**
- Fundo principal: `--color-espuma`
- Fundo alternado (seções): `--color-areia`
- Texto primário: `--color-pedra`
- CTAs / botões primários: `--color-sol` com texto `--color-espuma`
- Links e interativos: `--color-oceano`
- Hover de botões: `--color-coral`
- Cards e superfícies elevadas: `#fff` com `--shadow-card`
- Nunca usar preto puro `#000` ou branco puro `#fff` como fundo principal

---

## 2. TIPOGRAFIA

```css
/* Importar no <head> */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500&family=Dancing+Script:wght@600&display=swap');

:root {
  --font-display:  'Playfair Display', Georgia, serif;   /* headlines, títulos */
  --font-body:     'DM Sans', sans-serif;                /* textos, UI        */
  --font-script:   'Dancing Script', cursive;            /* taglines, citações*/

  /* Escala tipográfica (rem) */
  --text-xs:   0.75rem;   /* 12px — labels, captions */
  --text-sm:   0.875rem;  /* 14px — meta info        */
  --text-base: 1rem;      /* 16px — corpo            */
  --text-lg:   1.125rem;  /* 18px — lead             */
  --text-xl:   1.375rem;  /* 22px — subtítulos       */
  --text-2xl:  1.75rem;   /* 28px — títulos seção    */
  --text-3xl:  2.5rem;    /* 40px — títulos principais */
  --text-hero: clamp(2.8rem, 6vw, 5rem); /* título hero fluido */

  --leading-tight:  1.2;
  --leading-normal: 1.6;
  --leading-loose:  1.8;
}
```

---

## 3. ESPAÇAMENTO E LAYOUT

```css
:root {
  /* Espaçamentos */
  --space-1:  0.25rem;   /*  4px */
  --space-2:  0.5rem;    /*  8px */
  --space-3:  0.75rem;   /* 12px */
  --space-4:  1rem;      /* 16px */
  --space-6:  1.5rem;    /* 24px */
  --space-8:  2rem;      /* 32px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-24: 6rem;      /* 96px */

  /* Container */
  --container-max:    1280px;
  --container-narrow: 860px;
  --container-px:     clamp(1rem, 5vw, 3rem);

  /* Border radius */
  --radius-sm:   6px;
  --radius-md:   12px;
  --radius-lg:   24px;
  --radius-pill: 9999px;
  --radius-card: 16px;

  /* Transições */
  --transition-fast:   150ms ease;
  --transition-normal: 300ms ease;
  --transition-slow:   500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

**Grid system:**
- Desktop: 12 colunas, gap 24px
- Tablet: 8 colunas, gap 16px
- Mobile: 4 colunas, gap 12px
- Breakpoints: `480px | 768px | 1024px | 1280px`

---

## 4. COMPONENTES OBRIGATÓRIOS

Leia `/references/components.md` para especificações detalhadas de cada componente.

### Resumo dos componentes:

| Componente        | Descrição                                        | Arquivo ref.          |
|-------------------|--------------------------------------------------|-----------------------|
| `<Navbar>`        | Navegação sticky com scroll effect               | components.md §1      |
| `<HeroSection>`   | Full-viewport com vídeo/imagem + CTA             | components.md §2      |
| `<AboutSection>`  | Bio do fotógrafo/criador, texto + foto           | components.md §3      |
| `<GalleryGrid>`   | Masonry grid de praias com lightbox              | components.md §4      |
| `<InstagramFeed>` | Feed dinâmico via Instagram Basic Display API    | components.md §5      |
| `<BeachCard>`     | Card individual de praia (thumb, nome, local)    | components.md §6      |
| `<Testimonials>`  | Depoimentos em carrossel                         | components.md §7      |
| `<ContactSection>`| Formulário + mapa + redes sociais                | components.md §8      |
| `<Footer>`        | Links, créditos, newsletter                      | components.md §9      |

---

## 5. INTEGRAÇÃO INSTAGRAM

Leia `/references/instagram-integration.md` para implementação completa.

### Fluxo resumido:
1. Usar **Instagram Basic Display API** (para conta pessoal) ou **Instagram Graph API** (para conta business)
2. Access Token é armazenado em variável de ambiente (`INSTAGRAM_TOKEN`)
3. Endpoint: `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink,timestamp&access_token=${token}`
4. Renderizar últimos 9–12 posts em grid responsivo 3×3 (desktop) / 2×col (mobile)
5. Fallback: array de dados mock quando token ausente

---

## 6. RESPONSIVIDADE — REGRAS UX/UI

### Mobile-first obrigatório:
```css
/* Sempre escrever o base style para mobile, depois sobrescrever */
.hero-title { font-size: var(--text-2xl); }

@media (min-width: 768px)  { .hero-title { font-size: var(--text-3xl); } }
@media (min-width: 1024px) { .hero-title { font-size: var(--text-hero); } }
```

### Comportamentos responsivos por seção:

| Seção         | Mobile (< 768px)            | Tablet (768–1023px)         | Desktop (≥ 1024px)          |
|---------------|-----------------------------|-----------------------------|------------------------------|
| Navbar        | Hamburguer menu + drawer    | Hamburguer ou links visíveis| Links horizontais + CTA      |
| Hero          | Texto centralizado, 100vh   | Texto esquerda, imagem bg   | Texto esquerda, parallax     |
| Gallery       | 1 coluna                    | 2 colunas masonry           | 3 colunas masonry            |
| Instagram     | 2 colunas                   | 3 colunas                   | 3–4 colunas                  |
| Contact       | Stack vertical              | 2 colunas                   | 2 colunas + mapa maior       |
| Footer        | Stack vertical, centralizado| 2 colunas                   | 4 colunas                    |

### Touch targets (mobile):
- Botões: mínimo 44×44px
- Links de navegação: mínimo 44px de altura
- Input fields: mínimo 48px de altura
- Cards clicáveis: padding mínimo 16px

---

## 7. ANIMAÇÕES E MICRO-INTERAÇÕES

```css
/* Scroll reveal — aplicar com IntersectionObserver */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger para grids */
.reveal:nth-child(2) { transition-delay: 0.1s; }
.reveal:nth-child(3) { transition-delay: 0.2s; }
.reveal:nth-child(4) { transition-delay: 0.3s; }

/* Hover em cards */
.beach-card {
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}
.beach-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-float);
}

/* Parallax no Hero (JS) */
/* window.addEventListener('scroll', () => {
     heroImg.style.transform = `translateY(${scrollY * 0.4}px)`;
   }) */
```

**Princípios de animação:**
- `prefers-reduced-motion`: sempre respeitar com `@media (prefers-reduced-motion: reduce)`
- Duração máxima de transição de página: 600ms
- Não usar animações em textos longos
- Priorizar animações CSS sobre JS quando possível

---

## 8. ACESSIBILIDADE (a11y)

- Todo `<img>` deve ter `alt` descritivo
- Contraste mínimo: 4.5:1 para texto normal, 3:1 para texto grande (WCAG AA)
- Focus visible em todos os elementos interativos (`outline: 2px solid var(--color-oceano)`)
- Atributos `aria-label` em ícones sem texto
- Estrutura semântica: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Skip link para conteúdo principal
- `lang="pt-BR"` no `<html>`

---

## 9. PERFORMANCE

- Imagens: `loading="lazy"` + `srcset` para múltiplas resoluções
- Fontes: `font-display: swap` + preconnect para Google Fonts
- Instagram: cache local de 15 minutos (localStorage com timestamp)
- Vídeo hero: `autoplay muted loop playsinline` + `preload="metadata"`
- Evitar blocking render: CSS crítico inline, JS deferido

---

## 10. STACK RECOMENDADA

| Contexto                  | Tecnologia sugerida                         |
|---------------------------|---------------------------------------------|
| HTML simples              | HTML5 + CSS3 + Vanilla JS                   |
| React                     | React + CSS Modules ou Tailwind             |
| Next.js (SSR/SSG)         | Next.js + CSS variables + fetch no servidor |
| Vue                       | Vue 3 + Composition API + Scoped CSS        |
| Animações avançadas       | GSAP + ScrollTrigger                        |
| Carrossel                 | Swiper.js (CDN)                             |
| Lightbox galeria          | GLightbox (CDN)                             |
| Ícones                    | Lucide Icons ou Phosphor Icons              |

---

## 11. CHECKLIST DE ENTREGA

Antes de entregar o código, verificar:

- [ ] Paleta de cores respeita 100% os tokens definidos em §1
- [ ] Tipografia usa apenas as fontes definidas em §2
- [ ] Todos os 9 componentes presentes (ou justificativa de omissão)
- [ ] Integração Instagram com fallback mock funcionando
- [ ] Responsivo em 320px, 375px, 768px, 1024px, 1440px
- [ ] Animações scroll reveal implementadas
- [ ] `prefers-reduced-motion` respeitado
- [ ] Imagens com `loading="lazy"` e `alt`
- [ ] Contraste WCAG AA verificado
- [ ] Nenhum `console.error` ou warning de lint

---

## Referências detalhadas

- Componentes: `/references/components.md`
- Instagram API: `/references/instagram-integration.md`