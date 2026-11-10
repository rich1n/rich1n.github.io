# rich1n.com

Sitio personal de **Richard Alexander**, barista y production roaster. Está hecho con HTML, CSS y JavaScript puros (sin build) y se publica con GitHub Pages en [rich1n.com](https://rich1n.com).

## Estructura

```
index.html            Inicio: perfil, café, recursos y contacto
cafe/index.html       Listado de publicaciones con filtros
cafe/post.html        Visor de publicaciones (post.html?slug=...)
cafe/posts.json       Índice de publicaciones
cafe/posts/*.md       Contenido de cada publicación (Markdown)
assets/css/styles.css Estilos y paleta (tokens en :root)
assets/js/main.js     Tema claro/oscuro, año y copiar email
assets/js/cafe.js     Listados y render de posts
assets/icons/sprite.svg  Iconos
assets/img/           Avatar, imagen para redes e infografías
CNAME                 Dominio personalizado para GitHub Pages
```

## Publicar algo nuevo en el Café

1. Crea el archivo `cafe/posts/mi-nuevo-post.md`. El nombre solo puede tener minúsculas, números y guiones. Empieza con un título `# ...`.
2. Añádelo al principio de `cafe/posts.json`:

   ```json
   {
     "slug": "mi-nuevo-post",
     "title": "Título del post",
     "type": "receta",
     "date": "2026-12-01",
     "excerpt": "Una frase que resuma el post."
   }
   ```

   `type` puede ser `articulo`, `receta`, `recomendacion` o `infografia`.
3. Las imágenes van en `assets/img/` y se enlazan desde el Markdown así: `![Descripción](../assets/img/mi-imagen.png)`.
4. (Opcional) Añade la URL a `sitemap.xml`.
5. Haz commit y push. GitHub Pages lo publica en uno o dos minutos.

Los posts que vienen incluidos son ejemplos: edítalos o bórralos (y quítalos de `posts.json`).

## Personalizar

- **Foto**: guarda tu foto como `assets/img/avatar.jpg` (cuadrada, unos 400×400 px) y cambia el `src` del avatar en `index.html`.
- **Bio, redes y email**: están en `index.html`.
- **Colores**: son los tokens del principio de `assets/css/styles.css`.
- **"Invítame a un café"**: cambia el enlace en `index.html` por tu Ko-fi, Buy Me a Coffee o PayPal, o borra ese bloque.

## Probar en local

Los posts se cargan con `fetch`, así que hay que abrir la web desde un servidor, no con doble clic:

```bash
npx serve .
# o bien
python -m http.server 8000
```

## Publicar en GitHub Pages con rich1n.com

1. Crea un repositorio público en GitHub (por ejemplo, `rich1n/rich1n.com`) y sube este código a la rama `main`.
2. Ve a **Settings → Pages → Build and deployment**, elige **Deploy from a branch** con `main` y la carpeta `/ (root)`.
3. En **Custom domain** escribe `rich1n.com` (el archivo `CNAME` ya lo incluye).
4. En el panel DNS de tu proveedor del dominio, crea estos registros:

   | Tipo  | Nombre | Valor               |
   |-------|--------|---------------------|
   | A     | @      | 185.199.108.153     |
   | A     | @      | 185.199.109.153     |
   | A     | @      | 185.199.110.153     |
   | A     | @      | 185.199.111.153     |
   | CNAME | www    | rich1n.github.io    |

5. Cuando el DNS propague (de minutos a unas horas), activa **Enforce HTTPS** en Settings → Pages.
