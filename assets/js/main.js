// rich1n.com: tema claro/oscuro, año del footer y copiar email.
(function () {
  const root = document.documentElement;

  function storedTheme() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }

  function saveTheme(theme) {
    try { localStorage.setItem("theme", theme); } catch (e) { /* almacenamiento no disponible */ }
  }

  function currentTheme() {
    return root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  }

  function updateToggleLabel(button) {
    const next = currentTheme() === "dark" ? "claro" : "oscuro";
    button.setAttribute("aria-label", "Cambiar a modo " + next);
    button.setAttribute("title", "Cambiar a modo " + next);
  }

  // Si el usuario no ha elegido, seguimos al sistema en tiempo real.
  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
    if (!storedTheme()) root.setAttribute("data-theme", e.matches ? "light" : "dark");
  });

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    updateToggleLabel(button);
    button.addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      saveTheme(next);
      updateToggleLabel(button);
    });
  });

  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Toast reutilizable
  let toastTimer;
  function toast(message) {
    let el = document.querySelector(".toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "toast";
      el.setAttribute("role", "status");
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-visible"), 2200);
  }

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      const text = button.getAttribute("data-copy");
      try {
        await navigator.clipboard.writeText(text);
        toast("Email copiado: " + text);
      } catch (e) {
        toast(text);
      }
    });
  });
})();
