# Guia Microsoft Student Ambassadors - LATAM

[Português do Brasil](README.md) | [Español](README.es.md) | [English](README.en.md)

Wiki independente e multilíngue sobre a jornada do Microsoft Student Ambassadors, desde o cadastro como Registered Member até os marcos Associate Ambassador e Senior Ambassador.

**Site:** [https://msa-latam.github.io/](https://msa-latam.github.io/)

## Sobre o projeto

O objetivo é reunir em um único lugar orientações práticas, perguntas frequentes, requisitos, trilhas de contribuição, benefícios e referências oficiais para estudantes da América Latina.

O conteúdo está disponível em:

- português do Brasil;
- espanhol;
- inglês.

O idioma inicial é definido pelas preferências do navegador. A escolha manual e o tema visual ficam salvos no dispositivo do leitor.

## Recursos

- percurso completo do cadastro ao marco Senior Ambassador;
- trilhas Community Influencer e Community Skiller;
- busca local e navegação por seções;
- FAQ multilíngue;
- temas claro e escuro;
- layout responsivo e acessível;
- funcionamento sem dependências externas e sem etapa de build;
- publicação automática e gratuita pelo GitHub Pages.

## Estrutura

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

## Visualização local

Execute um servidor HTTP na raiz do repositório:

```bash
python -m http.server 8000
```

Acesse [http://localhost:8000](http://localhost:8000).

Abrir o `index.html` diretamente pode limitar alguns comportamentos do navegador. O servidor local é a forma recomendada de testar.

## Atualização de conteúdo

Cada idioma possui um arquivo em `assets/js/locales`. As versões devem manter as mesmas seções e identificadores para preservar a navegação ao trocar o idioma.

O conteúdo atual foi verificado em 21 de agosto de 2026. Requisitos, metas, benefícios e calendários podem mudar. Antes de publicar uma alteração, confirme as fontes oficiais listadas na wiki.

## Como contribuir

Leia o [guia de contribuição](CONTRIBUTING.md) e o [Código de Conduta](CODE_OF_CONDUCT.md) antes de abrir uma issue ou pull request.

Documentação para colaboradores:

- Português do Brasil: [contribuição](CONTRIBUTING.md) e [Código de Conduta](CODE_OF_CONDUCT.md);
- Español: [contribución](CONTRIBUTING.es.md) y [Código de Conducta](CODE_OF_CONDUCT.es.md);
- English: [contributing guide](CONTRIBUTING.en.md) and [Code of Conduct](CODE_OF_CONDUCT.en.md).

## Publicação

O workflow `Publicar no GitHub Pages` envia automaticamente o conteúdo da branch `main` ao GitHub Pages. A publicação também pode ser iniciada manualmente pela aba **Actions**.

## Licença e marcas

O código-fonte é disponibilizado sob a [Licença MIT oficial em inglês](LICENSE). Também estão disponíveis traduções informativas em [português do Brasil](LICENSE.pt-BR.md) e [espanhol](LICENSE.es.md). Nomes, logotipos, badges e marcas da Microsoft continuam pertencendo aos respectivos titulares e não são concedidos pela licença deste repositório.

Este projeto é independente, comunitário e não representa uma publicação oficial da Microsoft.

Desenvolvido pelo Senior Student Ambassador [Thiago Kusal](https://github.com/tkusal).
