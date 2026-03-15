---
title: "Modelo completo de Markdown para posts do Zexy"
category: "series"
publishedAt: 2026-03-15
image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=900"
alt: "Pessoa assistindo conteudo em notebook em ambiente escuro"
timeLabel: "agora"
---

Este post existe para mostrar, em uma unica pagina, os principais elementos de Markdown e HTML que podem ser usados nos posts do projeto.

Use este modelo como referencia para a IA gerar novos artigos sem quebrar o layout e sem improvisar estrutura.

## Titulo de secao `h2`

Paragrafo normal com **negrito**, *italico* e `codigo inline`. Tambem e possivel misturar texto com [link externo](https://www.youtube.com/) ou [link para documentacao do Astro](https://docs.astro.build/).

Outro paragrafo normal para mostrar espacamento, leitura e fluxo entre blocos de texto.

### Subtitulo `h3`

Uma subsecao pode ser usada para aprofundar um ponto, organizar uma lista ou separar tipos diferentes de conteudo.

#### Rotulo `h4`

Esse nivel funciona melhor como microcabecalho para observacoes curtas, notas tecnicas ou pequenas divisoes internas.

## Listas

Lista com marcadores:

- Primeiro item com uma explicacao curta.
- Segundo item com **termo importante** em destaque.
- Terceiro item com [referencia clicavel](https://example.com/).

Lista numerada:

1. Primeiro passo da explicacao.
2. Segundo passo com detalhe adicional.
3. Terceiro passo para fechar a ideia.

Lista aninhada:

1. Categoria principal.
   - Subitem com contexto.
   - Subitem com complemento.
2. Outra categoria principal.

## Citacao

> Este bloco pode ser usado para observacoes, trechos destacados, opinioes curtas ou chamadas editoriais.

## Imagem simples

![Exemplo de imagem em post](https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1200)

## Imagem com legenda usando HTML

<figure>
  <img src="https://images.pexels.com/photos/7915576/pexels-photo-7915576.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Setup gamer com monitor e luzes coloridas" />
  <figcaption>Legenda opcional para contextualizar a imagem dentro do artigo.</figcaption>
</figure>

## Carrossel de imagens

<div class="post-carousel" data-post-carousel>
  <div class="post-carousel-track" data-post-carousel-track>
    <figure class="post-carousel-slide">
      <img src="https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Notebook gamer com teclado iluminado" />
    </figure>
    <figure class="post-carousel-slide">
      <img src="https://images.pexels.com/photos/7238763/pexels-photo-7238763.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Evento com referencia a cultura pop japonesa" />
    </figure>
    <figure class="post-carousel-slide">
      <img src="https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Pessoa assistindo conteudo em ambiente escuro" />
    </figure>
    <figure class="post-carousel-slide">
      <img src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Pessoa assistindo filme em notebook" />
    </figure>
    <figure class="post-carousel-slide">
      <img src="https://images.pexels.com/photos/7915576/pexels-photo-7915576.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Setup gamer com monitor e controle" />
    </figure>
    <figure class="post-carousel-slide">
      <img src="https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Grupo em evento com clima pop" />
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

## Carrossel com elenco

<div class="post-carousel" data-post-carousel>
  <div class="post-carousel-track" data-post-carousel-track>
    <figure class="post-carousel-slide">
      <img src="https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Exemplo visual para Monkey D. Luffy na segunda temporada" />
      <div class="post-carousel-overlay"></div>
      <div class="post-carousel-copy">
        <h3 class="post-carousel-title">Monkey D. Luffy</h3>
        <p class="post-carousel-text">Capitão do bando do Chapéu de Palha.</p>
      </div>
    </figure>
    <figure class="post-carousel-slide">
      <img src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Exemplo visual para Roronoa Zoro na segunda temporada" />
      <div class="post-carousel-overlay"></div>
      <div class="post-carousel-copy">
        <h3 class="post-carousel-title">Roronoa Zoro</h3>
        <p class="post-carousel-text">Espadachim e principal combatente do bando.</p>
      </div>
    </figure>
    <figure class="post-carousel-slide">
      <img src="https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Exemplo visual para Nami na segunda temporada" />
      <div class="post-carousel-overlay"></div>
      <div class="post-carousel-copy">
        <h3 class="post-carousel-title">Nami</h3>
        <p class="post-carousel-text">Navegadora do bando e especialista em rotas.</p>
      </div>
    </figure>
    <figure class="post-carousel-slide">
      <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Exemplo visual para Usopp na segunda temporada" />
      <div class="post-carousel-overlay"></div>
      <div class="post-carousel-copy">
        <h3 class="post-carousel-title">Usopp</h3>
        <p class="post-carousel-text">Atirador do grupo e inventor improvisado.</p>
      </div>
    </figure>
    <figure class="post-carousel-slide">
      <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Exemplo visual para Sanji na segunda temporada" />
      <div class="post-carousel-overlay"></div>
      <div class="post-carousel-copy">
        <h3 class="post-carousel-title">Sanji</h3>
        <p class="post-carousel-text">Cozinheiro do bando e lutador de pernas.</p>
      </div>
    </figure>
    <figure class="post-carousel-slide">
      <img src="https://images.pexels.com/photos/4587993/pexels-photo-4587993.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Exemplo visual para Tony Tony Chopper na segunda temporada" />
      <div class="post-carousel-overlay"></div>
      <div class="post-carousel-copy">
        <h3 class="post-carousel-title">Tony Tony Chopper</h3>
        <p class="post-carousel-text">Médico do bando e futuro reforço da tripulação.</p>
      </div>
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

## Tabela

| Obra | Ano | Categoria | Observacao |
| --- | --- | --- | --- |
| Elden Ring | 2022 | Game | Mundo aberto com alto fator de descoberta |
| Erased | 2016 | Anime | Suspense curto e facil de maratonar |
| The Invisible Man | 2020 | Filme | Thriller direto com atmosfera forte |

## Linha divisoria

---

## Bloco de codigo

```ts
type PostItem = {
  title: string;
  image: string;
  category: "games" | "animes" | "series";
};

const item: PostItem = {
  title: "Exemplo",
  image: "https://example.com/image.jpg",
  category: "games"
};
```

## Lista de links

- [YouTube](https://www.youtube.com/)
- [Astro](https://docs.astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)

## Embed de YouTube

<iframe
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="Exemplo de video incorporado"
  loading="lazy"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>

## Observacoes finais

Este template cobre:

- paragrafos
- titulos `h2`, `h3` e `h4`
- listas com marcadores
- listas numeradas
- citacao
- imagem simples
- figura com legenda
- carrossel de imagens
- tabela
- linha divisoria
- bloco de codigo
- links
- embed de YouTube

Se a IA seguir esse padrao, o resultado tende a ficar consistente com o visual da rota de post e com menos retrabalho manual.
