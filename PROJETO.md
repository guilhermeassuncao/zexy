# Zexy — Portal de consoles PlayStation, Nintendo e Xbox

Documento de referência do projeto. Resume a arquitetura, o que já foi feito,
como editar conteúdo e o que falta para produção. Ponto de retomada do trabalho.

---

## Visão geral

**Zexy** é um portal independente (pt-BR) de comparação de preços focado em
consoles e acessórios de **PlayStation, Nintendo e Xbox**. O visual é dark
premium, com scrollytelling (animações conduzidas pela rolagem) inspirado em
páginas de produto da Apple. Posicionamento: *"PlayStation, Nintendo, Xbox e as
melhores ofertas em um só lugar"* — deixando claro que é um portal
independente, sem vínculo oficial com Sony, Nintendo ou Microsoft.

## Stack

- **Astro 5** (site estático, HTML gerado no build — ótimo para SEO e velocidade)
- **Tailwind CSS 3** (design tokens em `tailwind.config.mjs`)
- **GSAP + ScrollTrigger** (animações de scroll) e **Lenis** (scroll suave),
  carregados só no cliente e respeitando `prefers-reduced-motion`
- **TypeScript** (checagem via `astro check`)

Comandos:

```bash
npm run dev      # servidor local (http://localhost:4321)
npm run build    # gera o site estático em dist/
npm run preview  # serve o build
npx astro check  # checagem de tipos
```

> Ao mexer em `tailwind.config.mjs` ou `content.config.ts`, **reinicie o dev
> server** — essas configs não recarregam a quente. Se der erro de schema em
> conteúdo, apague `.astro/` e rode o build de novo.

---

## Arquitetura de conteúdo (o coração do projeto)

Todo o conteúdo dinâmico vem de **arquivos markdown** em `src/content/`, lidos
como *content collections* do Astro. Isso permite editar ofertas, notícias e
guias criando/alterando arquivos, **sem tocar em código**. As listagens sempre
mostram os **`.md` mais recentes primeiro** (ordena por data e, no empate, pela
data de modificação do arquivo — comportamento herdado do Zexy original).

### Coleções (definidas em `src/content.config.ts`)

| Coleção | Pasta | Vira página em | Campos principais do frontmatter |
|---|---|---|---|
| `offers` | `src/content/offers/` | `/ofertas/<categoria>/<slug>` | `name`, `platform`, `category`, `store`, `image`, `imageAlt`, `currentPrice`, `originalPrice?`, `discountPercentage?`, `affiliateUrl`, `updatedAt`, `featured?` |
| `noticias` | `src/content/noticias/` | `/noticias/<categoria>/<slug>` | `title`, `category`, `publishedAt`, `image`, `alt`, `description`, `tags`, `author` |
| `guides` | `src/content/guides/` | (listado em `GuidesSection`) | `title`, `excerpt`, `tag`, `readingTime`, `publishedAt?` |

- `platform`: `playstation` | `xbox` | `nintendo`
- `category` da notícia: `playstation` | `xbox` | `nintendo` | `geral`
- O **corpo** do markdown é opcional na oferta e é o conteúdo editorial na
  notícia (intro, lista numerada, tabela, FAQ, palavras-chave — mesma estrutura
  do Zexy antigo).

### Loaders (em `src/data/catalog.ts`)

- `getOffers()` — todas as ofertas, mais recentes primeiro
- `getNoticias()` — todas as notícias, mais recentes primeiro
- `getGuides()` — todos os guias

Além disso, `catalog.ts` guarda dados **estruturais** (não editoriais) como
constantes: `consoleSpecs` (tabela de comparação), `platformLabels`,
`storeLabels` e as listas de categorias (`playstationCategories`,
`xboxCategories`, `nintendoCategories`).

### Como adicionar conteúdo

**Nova oferta:** crie `src/content/offers/nome-do-produto.md`:

```markdown
---
name: "Nome do produto"
platform: playstation      # playstation | xbox | nintendo
category: "Consoles"        # Consoles, Controles, Armazenamento, Headsets, Acessórios, Game Pass, Joy-Con, microSD, Controle Pro, Jogos
store: amazon               # amazon | mercado-livre | shopee
image: "/img/products/arquivo.svg"
imageAlt: "Descrição da imagem"
originalPrice: 4499.9
currentPrice: 3799.9
discountPercentage: 16
affiliateUrl: "/ofertas"    # trocar pelo link de afiliado real quando houver
updatedAt: 2026-07-11T09:30:00-03:00
featured: true              # opcional: destaca o card
---
```

**Nova notícia:** crie `src/content/noticias/titulo.md` (frontmatter + corpo
editorial). Estrutura recomendada do corpo: introdução → lista numerada
(`## 1. Item`) → `## Comparativo rápido` (tabela) → `## Qual escolher primeiro?`
→ `## Perguntas frequentes` → `## Palavras-chave`.

> Se uma tag for só número (ex.: `2026`), coloque entre aspas: `- "2026"`
> (senão o YAML a interpreta como número e o build falha).

---

## Páginas (`src/pages/`)

| Rota | Arquivo | O que é |
|---|---|---|
| `/` | `index.astro` | Home: hero + 3 scrollytelling (consoles, controles, jogos) + ofertas + comparação + categorias por plataforma |
| `/playstation` | `playstation.astro` | Hub do ecossistema PlayStation |
| `/nintendo` | `nintendo.astro` | Hub do ecossistema Nintendo |
| `/xbox` | `xbox.astro` | Hub do ecossistema Xbox |
| `/comparar` | `comparar.astro` | Tabela comparativa dos 6 consoles |
| `/ofertas` | `ofertas.astro` | Todas as ofertas + filtros (plataforma e categoria) + busca |
| `/ofertas/<cat>/<slug>` | `ofertas/[categoria]/[slug].astro` | Página de detalhe de cada oferta |
| `/noticias` | `noticias/index.astro` | Listagem de notícias (destaque + grade) |
| `/noticias/<cat>/<slug>` | `noticias/[categoria]/[slug].astro` | Matéria completa |
| `/sitemap.xml` | `sitemap.xml.ts` | Sitemap gerado (inclui todas as páginas de detalhe) |

## Componentes (`src/components/zx/`)

`SiteHeader`, `SiteFooter`, `Logo`, `Hero`, `SplitShowcase` (scrollytelling
reutilizável de 2 ou 3 lados), `ComparisonSection`, `PlatformShowcase`,
`CategoryCard`, `OfferCard`, `OfferGrid`, `NewsCard`, `GuideCard`,
`GuidesSection`, `SectionHeading`.

A animação de scroll é dirigida por `data-attributes` lidos em
`src/scripts/zx-motion.ts`.

---

## Identidade visual

- Tokens de cor em `tailwind.config.mjs`, prefixo `zx-`: fundo `#06070c`,
  acento violeta `#8b74ff` (da marca), **PlayStation** azul `#4d9fff`,
  **Nintendo** vermelho `#ff5a5f`, **Xbox** verde `#3fdc81`.
- Wordmark "ZEXY" em **Baloo 2**; títulos em **Space Grotesk**.
- Logo: símbolo "nexus" (4 losangos) em `src/components/zx/Logo.astro`; favicon
  correspondente em `public/favicon.svg`.

---

## O que ainda é placeholder / pendente

1. **Links de afiliado** — o campo `affiliateUrl` de todas as ofertas aponta
   para `/ofertas`. É o ponto de entrada da monetização: quando houver programa
   de afiliados (Amazon, Mercado Livre, Nintendo eShop), preencher esse campo em
   cada `.md` (ou vindo da API) e o botão "Ir para a oferta" leva direto à loja.
2. **Imagens** — consoles e controles usam renders reais (fundo transparente);
   os **produtos das ofertas** usam SVGs placeholder em `public/img/products/`;
   notícias usam `public/img/news/placeholder.svg`. Capas de jogos são reais
   (PS/Xbox via Steam, Nintendo via Wikipedia) — uso adequado para protótipo;
   em produção, servir via API de afiliados que autoriza o uso.
3. **Conteúdo** — ofertas, notícias e guias são mockados (fake) para demonstrar
   o site cheio. Preços e datas são fictícios.
4. **Preços do Xbox** — a Microsoft anunciou reajuste para ago/2026 sem valores
   em reais divulgados; revisar as faixas em `consoleSpecs` quando saírem.

## Melhor ponto para integrar APIs no futuro

Tudo converge em **`src/data/catalog.ts`**: troque `getOffers()`,
`getNoticias()` e `getGuides()` por chamadas de fetch à API, mantendo os mesmos
tipos (`Offer`, `Noticia`, `Guide`). Nenhum componente ou página precisa mudar.
Para links de afiliado, o campo é o `affiliateUrl` de cada oferta.

## Estado atual

- Build: 61 páginas, `astro check` sem erros.
- Conteúdo mock: ~20 ofertas, ~20 notícias, alguns guias (arquivos em
  `src/content/`).
- Passou por 3 rodadas de revisão multi-agente (correções de conteúdo, SEO,
  acessibilidade e navegação já aplicadas).
