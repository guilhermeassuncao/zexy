# AGENTS.md

## Markdown Authoring Agent

Use este guia sempre que a IA for criar ou reescrever posts em Markdown para este projeto.

### Objetivo

Gerar Markdown que renderize corretamente na rota de post e aproveite a formatacao de:

- titulos
- listas
- tabelas
- imagens
- carrossel de imagens
- blocos de codigo
- embeds de YouTube

### Regras de frontmatter

Para posts da colecao `news`, use sempre:

```md
---
title: "Titulo do post"
category: "games"
publishedAt: 2026-03-15
image: "https://..."
alt: "Descricao objetiva da imagem de capa"
timeLabel: "agora"
---
```

Categorias validas hoje:

- `games`
- `animes`
- `series` (editoria publica: `series & filmes`)

### Estrutura recomendada

1. Comece com uma introducao curta de 1 a 3 paragrafos.
2. Use `##` para secoes principais.
3. Use `###` para subsecoes quando necessario.
4. Evite pular de `##` direto para `####`.
5. Nao repita texto so para aumentar tamanho.

### Listas

Use listas Markdown normais:

```md
- item
- item
```

ou

```md
1. item
2. item
3. item
```

### Tabelas

Use tabela Markdown simples:

```md
| Obra | Ano | Plataforma |
| --- | --- | --- |
| Elden Ring | 2022 | PC, PS5, Xbox |
```

Evite celulas longas demais.

### Imagens

Para imagens dentro do post, use Markdown padrao:

```md
![Texto alternativo](https://url-da-imagem)
```

Regras:

- use imagem real quando houver fonte confiavel
- o `alt` deve descrever a obra ou o quadro de forma objetiva
- nao use placeholder
- prefira uma imagem por secao, nao uma enxurrada de imagens

### Carrossel de imagens

Quando precisar exibir varias imagens da mesma secao, prefira carrossel em vez de empilhar varias imagens grandes.

Quantidade recomendada:

- minimo: `2` imagens
- ideal: `3` a `5` imagens
- maximo recomendado: `6` imagens

Acima disso, o post tende a ficar pesado e o carrossel perde eficiencia.

Estrutura:

```html
<div class="post-carousel" data-post-carousel>
  <div class="post-carousel-track" data-post-carousel-track>
    <figure class="post-carousel-slide">
      <img src="https://..." alt="Descricao objetiva da imagem" />
      <div class="post-carousel-overlay"></div>
      <div class="post-carousel-copy">
        <h3 class="post-carousel-title">Titulo curto do slide</h3>
        <p class="post-carousel-text">Descricao curta do slide.</p>
      </div>
    </figure>
  </div>

  <div class="post-carousel-nav">
    <button class="post-carousel-button" type="button" aria-label="Imagem anterior" data-post-carousel-prev>&lsaquo;</button>
    <button class="post-carousel-button" type="button" aria-label="Próxima imagem" data-post-carousel-next>&rsaquo;</button>
  </div>

  <div class="post-carousel-dots" aria-hidden="true">
    <button class="post-carousel-dot" type="button" data-post-carousel-dot></button>
  </div>
</div>
```

Regras importantes:

- a quantidade de `.post-carousel-dot` deve ser igual a quantidade de slides
- use titulo e descricao curtos
- nao use badge no slide
- se a imagem ja comunica bem sozinha, pode omitir o texto
- use carrossel apenas quando ele realmente agregar contexto

Exemplo sem texto sobreposto, com `6` imagens:

```html
<div class="post-carousel" data-post-carousel>
  <div class="post-carousel-track" data-post-carousel-track>
    <figure class="post-carousel-slide">
      <img src="URL_DA_IMAGEM_LUFFY" alt="Monkey D. Luffy na segunda temporada" />
    </figure>
    <figure class="post-carousel-slide">
      <img src="URL_DA_IMAGEM_ZORO" alt="Roronoa Zoro na segunda temporada" />
    </figure>
    <figure class="post-carousel-slide">
      <img src="URL_DA_IMAGEM_NAMI" alt="Nami na segunda temporada" />
    </figure>
    <figure class="post-carousel-slide">
      <img src="URL_DA_IMAGEM_USOPP" alt="Usopp na segunda temporada" />
    </figure>
    <figure class="post-carousel-slide">
      <img src="URL_DA_IMAGEM_SANJI" alt="Sanji na segunda temporada" />
    </figure>
    <figure class="post-carousel-slide">
      <img src="URL_DA_IMAGEM_CHOPPER" alt="Tony Tony Chopper na segunda temporada" />
    </figure>
  </div>

  <div class="post-carousel-nav">
    <button class="post-carousel-button" type="button" aria-label="Imagem anterior" data-post-carousel-prev>&lsaquo;</button>
    <button class="post-carousel-button" type="button" aria-label="Próxima imagem" data-post-carousel-next>&rsaquo;</button>
  </div>

  <div class="post-carousel-dots" aria-hidden="true">
    <button class="post-carousel-dot" type="button" data-post-carousel-dot></button>
    <button class="post-carousel-dot" type="button" data-post-carousel-dot></button>
    <button class="post-carousel-dot" type="button" data-post-carousel-dot></button>
    <button class="post-carousel-dot" type="button" data-post-carousel-dot></button>
    <button class="post-carousel-dot" type="button" data-post-carousel-dot></button>
    <button class="post-carousel-dot" type="button" data-post-carousel-dot></button>
  </div>
</div>
```

### YouTube

Se quiser apenas linkar, use Markdown comum:

```md
[Assistir trailer no YouTube](https://www.youtube.com/watch?v=abc123)
```

Se quiser incorporar o video no post, use `iframe` HTML:

```html
<iframe
  src="https://www.youtube.com/embed/abc123"
  title="Trailer oficial"
  loading="lazy"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>
```

Sempre prefira a URL `youtube.com/embed/...` para embed.

### Codigo

Use cerca com linguagem:

```md
```js
console.log("zexy");
```
```

### Qualidade editorial

- escreva em portugues natural
- seja especifico
- nao invente URLs de imagem
- nao invente fatos que dependam de confirmacao externa
- se a imagem real nao estiver disponivel, deixe um marcador textual claro em vez de inventar uma URL

### Modelo base

```md
---
title: "10 jogos para jogar no fim de semana"
category: "games"
publishedAt: 2026-03-15
image: "https://..."
alt: "Capa do post com setup gamer"
timeLabel: "agora"
---

Introducao curta.

## 1. Elden Ring

![Capa de Elden Ring](https://...)

Descricao objetiva do item.

## Comparativo rapido

| Jogo | Tempo medio | Estilo |
| --- | --- | --- |
| Elden Ring | Alto | RPG de acao |
| Forza Horizon 5 | Medio | Corrida arcade |

## Trailer

<iframe
  src="https://www.youtube.com/embed/abc123"
  title="Trailer oficial de exemplo"
  loading="lazy"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>
```
