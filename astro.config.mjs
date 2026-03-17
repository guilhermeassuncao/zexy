import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { optimizeCloudinaryImage } from "./src/utils/images";

function visitMarkdownTree(node, visitor) {
  visitor(node);

  if (!node || typeof node !== "object" || !Array.isArray(node.children)) {
    return;
  }

  for (const child of node.children) {
    visitMarkdownTree(child, visitor);
  }
}

function optimizeCloudinaryMarkup(value, width = 1200) {
  return value.replace(
    /(<img\b[^>]*\bsrc=["'])(https:\/\/res\.cloudinary\.com\/[^"']+)(["'][^>]*>)/gi,
    (_, start, src, end) => `${start}${optimizeCloudinaryImage(src, { width })}${end}`
  );
}

function toYouTubeEmbedData(src) {
  const match = src.match(/youtube\.com\/embed\/([A-Za-z0-9_-]{6,})/i);

  if (!match) {
    return null;
  }

  return {
    id: match[1],
    embedUrl: `https://www.youtube.com/embed/${match[1]}?autoplay=1`
  };
}

function optimizeYouTubeMarkup(value) {
  return value.replace(
    /<iframe\b([^>]*?)src=["'](https:\/\/www\.youtube\.com\/embed\/[^"']+)["']([^>]*)title=["']([^"']+)["']([^>]*)><\/iframe>/gis,
    (_, beforeSrc, src, afterSrc, title, afterTitle) => {
      const data = toYouTubeEmbedData(src);

      if (!data) {
        return _;
      }

      return `<div class="lite-youtube" data-lite-youtube data-videoid="${data.id}" data-embed="${data.embedUrl}" aria-label="${title}"><button class="lite-youtube-button" type="button" aria-label="Assistir: ${title}"><span class="lite-youtube-play" aria-hidden="true"></span><span class="lite-youtube-title">${title}</span></button><img class="lite-youtube-poster" src="https://i.ytimg.com/vi/${data.id}/hqdefault.jpg" alt="${title}" loading="lazy" decoding="async" /></div>`;
    }
  );
}

function remarkOptimizeCloudinaryImages() {
  return (tree) => {
    visitMarkdownTree(tree, (node) => {
      if (node?.type === "image" && typeof node.url === "string") {
        node.url = optimizeCloudinaryImage(node.url, { width: 1200 });
      }

      if (node?.type === "html" && typeof node.value === "string") {
        node.value = optimizeYouTubeMarkup(optimizeCloudinaryMarkup(node.value, 1200));
      }
    });
  };
}

export default defineConfig({
  site: "https://zexy.com.br",
  markdown: {
    remarkPlugins: [remarkOptimizeCloudinaryImages]
  },
  integrations: [tailwind()],
});
