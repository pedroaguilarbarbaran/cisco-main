# Cisco Product Pages — Local Copy (improvements)

Este repositorio es una copia local mejorada del sitio de productos Cisco. Se han aplicado cambios para mejorar la accesibilidad, la responsividad y la experiencia en dispositivos móviles.

## Qué cambié (resumen)
Revisa `CHANGES.md` para el detalle completo de los cambios aplicados (navbar, gallery, tabs, CSS helpers, aria attributes, etc.).

## Cómo ejecutar localmente
Se incluyen scripts simples para levantar un servidor estático con Python (sin instalaciones adicionales).

En Windows (Git Bash / bash.exe):

```bash
cd /c/Users/Pedro/Desktop/cisco-main
# servidor simple en http://localhost:8000
python -m http.server 8000
```

En PowerShell:

```powershell
cd C:\Users\Pedro\Desktop\cisco-main
python -m http.server 8000
```

Abrir en el navegador:

- http://localhost:8000/index.html
- http://localhost:8000/C9200L-24P-4G-E.html (página de producto ejemplo)

## Ramas y flujo propuesto
1. Crear rama de trabajo para cada conjunto de cambios:

```bash
git checkout -b feature/<descripcion>
```

2. Hacer commits atómicos y descriptivos.
3. Push a tu fork o a la rama remota y crear un Pull Request al repo oficial `ds3peru/cisco`.

## Checklist de revisión (antes de enviar PR)
- [ ] Ejecutar el servidor y verificar UI en escritorio y móvil.
- [ ] Revisar la consola del navegador por errores JS.
- [ ] Verificar que todas las imágenes y enlaces externoss se cargan correctamente.
- [ ] Test rápido de accesibilidad con Lighthouse (Chrome DevTools).

## Siguientes mejoras recomendadas
- Extraer Tailwind a un build con PostCSS para reducir CSS en producción.
- Optimizar imágenes y añadir `srcset`/`sizes` para mejorar rendimiento móvil.
- Ejecutar validación W3C HTML y correcciones automáticas.
- Reemplazar iconos con versiones sin espacios y con nombres ASCII (evitar acentos y espacios).

---

Si quieres, puedo:
- aplicar las mismas mejoras a todas las páginas HTML del proyecto,
- renombrar los iconos y actualizar rutas (requiere actualizar referencias en HTML),
- o crear un fork y subir la rama por ti (necesito tu usuario GitHub o permisos).
