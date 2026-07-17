/**
 * Animações do redesign: Lenis (scroll suave) + GSAP ScrollTrigger.
 *
 * Carrega tudo dinamicamente no cliente, só quando o usuário não pede
 * movimento reduzido. Componentes marcam elementos com data-attributes:
 * - data-reveal / data-reveal-group: entrada suave ao entrar na viewport
 * - data-parallax="0.15": parallax leve
 * - data-hero-item: sequência de abertura do hero
 * - data-split-*: seção scrollytelling PlayStation vs Xbox
 */

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function initHeaderState() {
  const header = document.querySelector<HTMLElement>("[data-zx-header]");
  if (!header) return;

  const update = () => {
    header.classList.toggle("zx-header-scrolled", window.scrollY > 24);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

async function initMotion() {
  const [{ default: gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
    import("lenis")
  ]);

  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add("zx-motion");

  const lenis = new Lenis({ lerp: 0.12 });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  const isDesktop = window.matchMedia("(min-width: 48.75rem)").matches;

  // Barra de progresso de scroll
  const progress = document.querySelector<HTMLElement>("[data-scroll-progress]");
  if (progress) {
    gsap.to(progress, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { start: 0, end: () => document.documentElement.scrollHeight - window.innerHeight, scrub: 0.3 }
    });
  }

  // Abertura do hero
  const heroItems = gsap.utils.toArray<HTMLElement>("[data-hero-item]");
  if (heroItems.length) {
    gsap.to(heroItems, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.12,
      delay: 0.15
    });
  }

  // Reveals genéricos
  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%" }
    });
  });

  gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
    gsap.to(Array.from(group.children), {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: { trigger: group, start: "top 88%" }
    });
  });

  // Parallax leve (apenas desktop)
  if (isDesktop) {
    gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
      const amount = Number(el.dataset.parallax || "0.12");
      gsap.fromTo(
        el,
        { yPercent: amount * 60 },
        {
          yPercent: amount * -60,
          ease: "none",
          scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom top", scrub: true }
        }
      );
    });
  }

  // Scrollytelling: cada seção [data-split] fica presa enquanto o scroll
  // conduz a timeline — intro no centro, lados entram pelas laterais,
  // itens e CTAs em fases.
  gsap.utils.toArray<HTMLElement>("[data-split]").forEach((split) => {
    const stage = split.querySelector<HTMLElement>("[data-split-stage]");
    const intro = split.querySelector<HTMLElement>("[data-split-intro]");
    const sides = gsap.utils.toArray<HTMLElement>(split.querySelectorAll("[data-split-side]"));
    const items = split.querySelectorAll<HTMLElement>("[data-split-item]");
    const ctas = split.querySelectorAll<HTMLElement>("[data-split-cta]");
    const n = sides.length;

    // Direção de entrada de cada lado: primeiro pela esquerda, último pela
    // direita, os do meio sobem de baixo.
    const enterFrom = (index: number) => {
      if (index === 0) return { xPercent: -120, yPercent: 0, rotate: -6 };
      if (index === n - 1) return { xPercent: 120, yPercent: 0, rotate: 6 };
      return { xPercent: 0, yPercent: 60, rotate: 0 };
    };

    if (isDesktop && stage && n > 0) {
      sides.forEach((side, i) => gsap.set(side, { ...enterFrom(i), opacity: 0 }));
      // autoAlpha (opacity + visibility) tira itens/CTAs da ordem de Tab
      // enquanto invisíveis, evitando foco de teclado em links ocultos.
      gsap.set([...items, ...ctas], { autoAlpha: 0, y: 16 });

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: { trigger: split, start: "top top", end: "+=250%", pin: stage, scrub: 0.6, anticipatePin: 1 }
      });

      // Fase 1: intro sai de cena
      tl.to(intro, { opacity: 0, y: -60, scale: 0.94, duration: 0.8 }, 0.2);

      // Fase 2: lados entram das laterais/centro
      sides.forEach((side) =>
        tl.to(side, { xPercent: 0, yPercent: 0, opacity: 1, rotate: 0, duration: 1.4, ease: "power3.out" }, 0.6)
      );

      // Fase 3: itens em cascata / Fase 4: CTAs
      tl.to(items, { autoAlpha: 1, y: 0, stagger: 0.05, duration: 0.5, ease: "power3.out" }, 2.0);
      tl.to(ctas, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" }, 2.7);
      tl.to({}, { duration: 0.4 });
    } else if (n > 0) {
      // Mobile: sem pin, blocos empilhados com reveals simples
      sides.forEach((side, index) => {
        gsap.fromTo(
          side,
          { opacity: 0, y: 24, x: index === 0 ? -24 : index === n - 1 ? 24 : 0 },
          { opacity: 1, x: 0, y: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: side, start: "top 85%" } }
        );
      });
    }
  });

  ScrollTrigger.refresh();
}

initHeaderState();

if (!reducedMotion.matches) {
  initMotion();
}
