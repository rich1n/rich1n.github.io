// rich1n.com: sección Café. Lista publicaciones desde posts.json y renderiza cada post en Markdown.
(function () {
  const TYPES = {
    articulo:      { label: "Artículo",      plural: "Artículos",       icon: "book",   card: "card--brown" },
    receta:        { label: "Receta",        plural: "Recetas",         icon: "recipe", card: "card--burgundy" },
    recomendacion: { label: "Recomendación", plural: "Recomendaciones", icon: "star",   card: "card--beige" },
    infografia:    { label: "Infografía",    plural: "Infografías",     icon: "chart",  card: "card--gray" }
  };

  const SVG_NS = "http://www.w3.org/2000/svg";

  function icon(sprite, id) {
    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("class", "icon");
    svg.setAttribute("aria-hidden", "true");
    const use = document.createElementNS(SVG_NS, "use");
    use.setAttribute("href", sprite + "#" + id);
    svg.appendChild(use);
    return svg;
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  // "2026-11-10" → "10 nov 2026" (se interpreta como fecha local para no desfasar el día)
  function formatDate(iso) {
    const [y, m, d] = String(iso).split("-").map(Number);
    if (!y || !m || !d) return iso;
    return new Date(y, m - 1, d).toLocaleDateString("es", { day: "numeric", month: "short", year: "numeric" });
  }

  async function loadIndex(base) {
    const res = await fetch(base + "posts.json", { cache: "no-cache" });
    if (!res.ok) throw new Error("No se pudo cargar posts.json");
    const posts = await res.json();
    return posts
      .filter((p) => p && p.slug && TYPES[p.type])
      .sort((a, b) => String(b.date).localeCompare(String(a.date)));
  }

  function postCard(post, base, sprite) {
    const type = TYPES[post.type];
    const li = el("li");
    const a = el("a", "card " + type.card);
    a.href = base + "post.html?slug=" + encodeURIComponent(post.slug);
    a.appendChild(icon(sprite, type.icon));
    const body = el("span", "card__body");
    body.appendChild(el("span", "card__meta", type.label + " · " + formatDate(post.date)));
    body.appendChild(el("span", "card__title", post.title));
    if (post.excerpt) body.appendChild(el("span", "card__desc", post.excerpt));
    a.appendChild(body);
    li.appendChild(a);
    return li;
  }

  // ---------- Listados: <ul data-posts data-base data-sprite [data-limit] [data-filters="#id"]> ----------
  async function initList(list) {
    const base = list.dataset.base || "";
    const sprite = list.dataset.sprite;
    const limit = Number(list.dataset.limit) || Infinity;
    const filters = list.dataset.filters ? document.querySelector(list.dataset.filters) : null;

    let posts;
    try {
      posts = await loadIndex(base);
    } catch (e) {
      list.replaceChildren(el("li", "empty", "No se pudieron cargar las publicaciones. Inténtalo más tarde."));
      return;
    }

    function render(type) {
      const visible = posts.filter((p) => !type || p.type === type).slice(0, limit);
      list.replaceChildren(...(visible.length
        ? visible.map((p) => postCard(p, base, sprite))
        : [el("li", "empty", "Todavía no hay publicaciones en esta categoría. ¡Pronto habrá café nuevo!")]));
    }

    if (!filters) { render(null); return; }

    const params = new URLSearchParams(location.search);
    let active = TYPES[params.get("type")] ? params.get("type") : null;

    const options = [[null, "Todo"]].concat(Object.entries(TYPES).map(([key, t]) => [key, t.plural]));
    const buttons = options.map(([key, label]) => {
      const b = el("button", "filter", label);
      b.type = "button";
      b.addEventListener("click", () => {
        active = key;
        const url = new URL(location.href);
        if (key) url.searchParams.set("type", key); else url.searchParams.delete("type");
        history.replaceState(null, "", url);
        sync();
      });
      return [key, b];
    });
    filters.replaceChildren(...buttons.map(([, b]) => b));

    function sync() {
      buttons.forEach(([key, b]) => b.setAttribute("aria-pressed", String(key === active)));
      render(active);
    }
    sync();
  }

  // ---------- Post: <article data-post data-base> ----------
  async function initPost(article) {
    const base = article.dataset.base || "";
    const slug = new URLSearchParams(location.search).get("slug") || "";
    const meta = article.querySelector("[data-post-meta]");
    const content = article.querySelector("[data-post-content]");

    function fail(message) {
      meta.replaceChildren();
      content.replaceChildren(el("h1", null, "Café no encontrado"), el("p", null, message));
      document.title = "Café no encontrado | rich1n";
    }

    if (!/^[a-z0-9-]+$/.test(slug)) {
      fail("La dirección de esta publicación no es válida. Vuelve al Café y elige otra taza.");
      return;
    }

    try {
      const [posts, res] = await Promise.all([
        loadIndex(base).catch(() => []),
        fetch(base + "posts/" + slug + ".md", { cache: "no-cache" })
      ]);
      if (!res.ok) throw new Error("404");
      const markdown = await res.text();
      const post = posts.find((p) => p.slug === slug);

      if (post) {
        const type = TYPES[post.type];
        const tag = el("span", "tag " + type.card, type.label);
        const date = el("time", null, formatDate(post.date));
        date.dateTime = post.date;
        meta.replaceChildren(tag, date);
        document.title = post.title + " | rich1n";
        const desc = document.querySelector('meta[name="description"]');
        if (desc && post.excerpt) desc.setAttribute("content", post.excerpt);
      } else {
        meta.replaceChildren();
      }

      // El contenido viene de los propios archivos .md del sitio.
      // Las rutas relativas de imágenes dentro del .md se resuelven desde /cafe/.
      content.innerHTML = window.marked.parse(markdown);
      if (!post) {
        const h1 = content.querySelector("h1");
        if (h1) document.title = h1.textContent + " | rich1n";
      }
    } catch (e) {
      fail("Esta publicación no existe o se ha movido. Vuelve al Café y elige otra taza.");
    }
  }

  document.querySelectorAll("[data-posts]").forEach(initList);
  document.querySelectorAll("[data-post]").forEach(initPost);
})();
