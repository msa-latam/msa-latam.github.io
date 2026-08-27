# Microsoft Student Ambassadors Guide - LATAM

[Português do Brasil](README.md) | [Español](README.es.md) | [English](README.en.md)

An independent, multilingual wiki covering the Microsoft Student Ambassadors journey, from registration as a Registered Member to the Associate Ambassador and Senior Ambassador milestones.

**Website:** [https://msa-latam.github.io/](https://msa-latam.github.io/)

## About the project

The goal is to gather practical guidance, frequently asked questions, requirements, contribution paths, benefits, and official references for students across Latin America in one place.

Content is available in:

- Brazilian Portuguese;
- Spanish;
- English.

The initial language follows the reader's browser preferences. Manual language and theme selections are stored on the reader's device.

## Features

- complete journey from registration to the Senior Ambassador milestone;
- Community Influencer and Community Skiller paths;
- local search and section navigation;
- multilingual FAQ;
- light and dark themes;
- responsive and accessible layout;
- no external dependencies or build step;
- free, automatic publishing with GitHub Pages.

## Structure

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

## Local preview

Run an HTTP server from the repository root:

```bash
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000).

Opening `index.html` directly can restrict some browser behavior. A local server is the recommended way to test the website.

## Updating content

Each language has a file in `assets/js/locales`. The versions must retain the same sections and identifiers so navigation continues to work when switching languages.

The content was reviewed in August 2026. Requirements, targets, benefits, and schedules may change. Confirm the official sources listed in the wiki before publishing an update.

## Contributing

Read the [contributing guide](CONTRIBUTING.en.md) and the [Code of Conduct](CODE_OF_CONDUCT.en.md) before opening an issue or pull request.

Contributor documentation:

- Português do Brasil: [contribuição](CONTRIBUTING.md) e [Código de Conduta](CODE_OF_CONDUCT.md);
- Español: [contribución](CONTRIBUTING.es.md) y [Código de Conducta](CODE_OF_CONDUCT.es.md);
- English: [contributing guide](CONTRIBUTING.en.md) and [Code of Conduct](CODE_OF_CONDUCT.en.md).

## Publishing

The `Publicar no GitHub Pages` workflow automatically publishes content from the `main` branch to GitHub Pages. Publishing can also be started manually from the **Actions** tab.

## License and trademarks

Source code is released under the [official English MIT License](LICENSE). Informational translations are also available in [Brazilian Portuguese](LICENSE.pt-BR.md) and [Spanish](LICENSE.es.md). Microsoft names, logos, badges, and trademarks remain the property of their respective owners and are not licensed by this repository.

This is an independent community project and is not an official Microsoft publication.

Developed by Senior Student Ambassador [Thiago Kusal](https://github.com/tkusal).
