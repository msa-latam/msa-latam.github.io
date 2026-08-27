# Guía Microsoft Student Ambassadors - LATAM

[Português do Brasil](README.md) | [Español](README.es.md) | [English](README.en.md)

Wiki independiente y multilingüe sobre el recorrido de Microsoft Student Ambassadors, desde el registro como Registered Member hasta los hitos Associate Ambassador y Senior Ambassador.

**Sitio:** [https://msa-latam.github.io/](https://msa-latam.github.io/)

## Acerca del proyecto

El objetivo es reunir en un solo lugar orientación práctica, preguntas frecuentes, requisitos, rutas de contribución, beneficios y referencias oficiales para estudiantes de América Latina.

El contenido está disponible en:

- portugués de Brasil;
- español;
- inglés.

El idioma inicial se define según las preferencias del navegador. La elección manual y el tema visual quedan guardados en el dispositivo del lector.

## Funcionalidades

- recorrido completo desde el registro hasta el hito Senior Ambassador;
- rutas Community Influencer y Community Skiller;
- búsqueda local y navegación por secciones;
- FAQ multilingüe;
- temas claro y oscuro;
- diseño responsivo y accesible;
- funcionamiento sin dependencias externas ni proceso de build;
- publicación automática y gratuita con GitHub Pages.

## Estructura

```text
.
├── .github/workflows/deploy-pages.yml
├── assets/
│   ├── css/styles.css
│   ├── images/
│   │   ├── badges/
│   │   └── journey/
│   └── js/
│       ├── locales/
│       │   ├── en.js
│       │   ├── es.js
│       │   └── pt-br.js
│       └── app.js
├── .nojekyll
├── CODE_OF_CONDUCT.md
├── CODE_OF_CONDUCT.en.md
├── CODE_OF_CONDUCT.es.md
├── CONTRIBUTING.md
├── CONTRIBUTING.en.md
├── CONTRIBUTING.es.md
├── LICENSE
├── LICENSE.pt-BR.md
├── LICENSE.es.md
├── index.html
├── README.md
├── README.en.md
├── README.es.md
├── robots.txt
├── sitemap.xml
└── site.webmanifest
```

## Vista local

Ejecuta un servidor HTTP en la raíz del repositorio:

```bash
python -m http.server 8000
```

Abre [http://localhost:8000](http://localhost:8000).

Abrir `index.html` directamente puede limitar algunos comportamientos del navegador. El servidor local es la forma recomendada de probar el sitio.

## Actualización del contenido

Cada idioma tiene un archivo en `assets/js/locales`. Las versiones deben conservar las mismas secciones e identificadores para mantener la navegación al cambiar de idioma.

El contenido fue revisado en agosto de 2026. Los requisitos, objetivos, beneficios y calendarios pueden cambiar. Antes de publicar una modificación, confirma las fuentes oficiales indicadas en la wiki.

## Cómo contribuir

Lee la [guía de contribución](CONTRIBUTING.es.md) y el [Código de Conducta](CODE_OF_CONDUCT.es.md) antes de abrir una issue o un pull request.

Documentación para colaboradores:

- Português do Brasil: [contribuição](CONTRIBUTING.md) e [Código de Conduta](CODE_OF_CONDUCT.md);
- Español: [contribución](CONTRIBUTING.es.md) y [Código de Conducta](CODE_OF_CONDUCT.es.md);
- English: [contributing guide](CONTRIBUTING.en.md) and [Code of Conduct](CODE_OF_CONDUCT.en.md).

## Publicación

El workflow `Publicar no GitHub Pages` envía automáticamente el contenido de la rama `main` a GitHub Pages. La publicación también puede iniciarse manualmente desde la pestaña **Actions**.

## Licencia y marcas

El código fuente se distribuye bajo la [Licencia MIT oficial en inglés](LICENSE). También hay traducciones informativas en [portugués de Brasil](LICENSE.pt-BR.md) y [español](LICENSE.es.md). Los nombres, logotipos, insignias y marcas de Microsoft pertenecen a sus respectivos titulares y no están incluidos en la licencia de este repositorio.

Este proyecto es independiente, comunitario y no representa una publicación oficial de Microsoft.

Desarrollado por el Senior Student Ambassador [Thiago Kusal](https://github.com/tkusal).
