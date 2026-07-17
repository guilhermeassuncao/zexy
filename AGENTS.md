# Markdown Authoring + SEO Agent (Google Discover Focus)

Este guia deve ser seguido sempre que a IA criar, revisar ou reescrever posts em Markdown para este projeto.

O objetivo é produzir conteúdo que:

- renderize corretamente na rota de post
- seja fácil de ler
- tenha boa retenção
- funcione bem para SEO
- tenha alta chance de aparecer no Google Discover

---

# Objetivo editorial

Os posts devem ser escritos como conteúdo editorial de entretenimento, semelhante a sites como:

- IGN
- Collider
- ScreenRant
- Omelete

O texto deve ser:

- claro
- natural
- escaneável
- informativo
- envolvente

Evitar:

- linguagem robótica
- repetição de palavras
- frases genéricas
- exagero promocional

---

# Estratégia SEO (Google Discover)

Google Discover favorece conteúdos que possuem:

1. títulos claros e clicáveis
2. listas e recomendações
3. conteúdo recente
4. imagens grandes
5. texto fácil de escanear
6. tema popular (games, séries, animes)

Portanto todo post deve priorizar:

- listas
- recomendações
- maratonas
- comparativos
- decisões rápidas

---

# Estrutura ideal do post

Todo post deve seguir esta ordem:

1. Frontmatter
2. Introdução curta
3. Lista principal
4. Tabela comparativa
5. Bloco de recomendação
6. FAQ opcional
7. Palavras-chave

---

# Frontmatter obrigatório

Sempre usar:

---
title: "Titulo do post"
category: "games"
publishedAt: 2026-03-15
image: "https://..."
---

Campos possíveis:

- title
- category
- publishedAt
- image
- alt (opcional)
- description (fortemente recomendado)

Regras para `description`:

- escrever descrição curta e direta
- priorizar de 8 a 16 palavras
- usar no máximo 1 ideia principal e 1 complemento útil
- evitar repetir o título inteiro
- pensar na descrição como subtítulo do hero no mobile
- evitar listas longas, datas excessivas e frases com muitas vírgulas

---

# Categorias válidas

- games

Observação:
O site é focado em games e no portal de consoles PlayStation e Xbox. As
editorias de animes e séries foram descontinuadas.

---

# Títulos

Os títulos devem ser claros e diretos.

Exemplos bons:

- 10 animes de ação para maratonar agora
- 8 séries curtas para assistir no fim de semana
- 7 jogos cooperativos para jogar com amigos
- 6 filmes de suspense que valem a noite

Evitar títulos vagos ou muito longos.

---

# Introdução

A introdução deve ter de 1 a 3 parágrafos curtos.

Ela deve:

- contextualizar o tema
- explicar o recorte da lista
- prender o leitor

Evitar introduções longas ou genéricas.

---

# Estrutura da lista

Cada item deve usar:

## 1. Nome da obra

Depois escrever 1 a 3 parágrafos explicando:

- por que está na lista
- para quem é indicado
- qual seu diferencial
- como funciona em maratona

Evitar frases vagas como:

- “é muito bom”
- “vale a pena”

---

# Escaneabilidade

Os textos devem ser fáceis de escanear:

- parágrafos curtos
- subtítulos claros
- listas
- tabelas
- blocos de decisão

---

# Tabelas

Sempre que possível incluir:

## Comparativo rapido

Exemplo:

| Série | Perfil ideal | Clima | Força principal |
| --- | --- | --- | --- |
| Chernobyl | quem quer tensão pesada | sufocante | direção |
| Fleabag | quem quer humor ácido | leve | texto |

---

# Bloco de decisão

Incluir `## Qual escolher primeiro?` apenas em posts de lista, ranking, comparativo ou recomendação com múltiplas obras.

Não usar esse bloco em posts focados em um único anime, jogo, série, temporada, personagem ou notícia isolada.

Exemplo:

- para ação intensa: Helldivers 2
- para jogar em dupla: It Takes Two
- para maratona curta: Chernobyl

---

# FAQ opcional

Quando fizer sentido incluir:

## Perguntas frequentes

Exemplo:

### Qual a melhor série curta para maratonar?

Resposta curta e direta.

---

# Imagens

Usar formato Markdown:

![Descricao](URL)

Regras:

- usar imagem real
- não inventar URL
- usar alt descritivo
- quando a imagem fizer parte do corpo editorial, preferir `figure` com `figcaption`
- evitar excesso de imagens
- não colocar imagem e vídeo em sequência imediata; sempre separar com pelo menos 1 parágrafo de texto ou mover um dos dois para outro bloco

---

# YouTube

Embed padrão:

<iframe
  src="https://www.youtube.com/embed/abc123"
  title="Trailer oficial"
  loading="lazy"
  allowfullscreen
></iframe>

Sempre usar youtube.com/embed.

Evitar embed logo após imagem ou figure. Quando houver vídeo, ele deve entrar em um ponto com respiro editorial, não colado em imagem anterior.

---

# Palavras-chave

Sempre terminar o post com:

## Palavras-chave

Exemplo:

#games #animes #series #maratona

Regras:

- usar de 4 a 8 tags
- usar termos curtos
- manter relevância

---

# Regra final

A IA deve sempre priorizar:

1. Markdown válido
2. leitura fácil
3. escaneabilidade
4. SEO natural
5. utilidade para o leitor
6. compatibilidade com Google Discover
