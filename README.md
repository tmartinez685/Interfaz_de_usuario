# Portal UNAB · The New Portal U Remaster

Rediseño del portal universitario en HTML + CSS + JS puro (sin build). Diseño de referencia: `Sin título.pdf` (escritorio 1440 × 1024).

## Ejecutar
Abre `index.html` o sirve la carpeta (`npx serve .`, Live Server, GitHub Pages).

## Acceso de prueba
| Usuario | Contraseña |
|---|---|
| `estudiante` | `Unab2026` |

El login es **simulado** (solo cliente, `sessionStorage`): sirve para el prototipo, no es seguridad real.
Perfil: ID `U00372915` (U00 + 6 dígitos distintos), semestre 5, correo `estudiante@unab.edu.co`.

## Estructura
- `index.html`: portada con login · `pages/`: resto de pantallas (protegidas, salvo recuperar/solicitar usuario)
- `css/`: `base` (tokens), `layout` (header/footer/bandas), `pages` (por pantalla)
- `js/data.js`: todos los datos de ejemplo (notas, horario, horas, FAQ, noticias…) · `auth.js`, `layout.js` y un script por pantalla
- `assets/img/`: imágenes locales · `portal-completo (1).html`: exportación original de Figma (solo referencia)

## En línea
https://juandy36.github.io/Interfaz_de_usuario/ (GitHub Pages, rama `main`, raíz).
