# VC Arquitectura® — Brand guidelines

Versión web de VC Arquitectura® — Brand guidelines, diseñada en Figma por Omónimo Design House.
Publicada en https://omonimo-design-house.github.io/vca-brandbook-web/ (GitHub Pages sirve la carpeta `docs/`).

## Actualizar

```bash
npm install
npm run build
git add -A && git commit -m "Actualizar web" && git push
```

- `src/sections/*.jsx`: una sección por frame de Figma (salida de get_design_context).
- `src/sections.mjs`: orden y alto de las secciones.
- `site.config.mjs`: fuentes, navegación del prototipo, enlaces, elementos fijos, favicon.
