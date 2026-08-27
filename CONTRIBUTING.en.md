# Contributing

[Português do Brasil](CONTRIBUTING.md) | [Español](CONTRIBUTING.es.md) | [English](CONTRIBUTING.en.md)

Thank you for your interest in improving the Microsoft Student Ambassadors Guide - LATAM.

## Before you start

1. Read the [Code of Conduct](CODE_OF_CONDUCT.en.md).
2. Search open issues to avoid duplicated work.
3. For major structural or content changes, open an issue before starting implementation.
4. Use official Microsoft sources to confirm requirements, targets, benefits, and schedules.

## Security and privacy

Do not submit:

- credentials, tokens, personal Contributor IDs, or subscription data;
- academic documents or students' personal information;
- internal screenshots or files that are not authorized for redistribution;
- protected third-party content without permission or proper attribution.

Report vulnerabilities privately to the maintainer through the contact information available on the [@tkusal](https://github.com/tkusal) profile. Do not publish sensitive details in an issue.

## Contribution workflow

1. Fork the repository.
2. Create a short, descriptive branch such as `docs/update-requirements` or `fix/language-menu`.
3. Make your changes and test them locally.
4. Write clear and focused commits.
5. Open a pull request explaining the problem, the solution, and the sources used.

## Multilingual content

Translations are stored in:

- `assets/js/locales/pt-br.js`;
- `assets/js/locales/es.js`;
- `assets/js/locales/en.js`.

When changing program information:

1. update all three languages;
2. preserve the same section identifiers;
3. keep links and numbers consistent across versions;
4. use clear language suitable for readers across Latin America;
5. indicate when information depends on a program cycle or may change.

## Code and interface

- Preserve the website as a static site with no required dependencies.
- Maintain keyboard navigation, contrast, alternative text, and visible focus states.
- Test both light and dark themes.
- Check small and large screens.
- Avoid adding libraries for simple HTML, CSS, or JavaScript tasks.
- Do not include tracking or data collection without prior discussion.

## Local testing

From the repository root, run:

```bash
python -m http.server 8000
```

Open `http://localhost:8000` and check:

- error-free loading;
- language switching;
- theme persistence;
- search and internal links;
- images and external links;
- readability on mobile devices.

## Pull request checklist

- [ ] The change has a clear purpose.
- [ ] All three languages were reviewed when necessary.
- [ ] Official sources were provided.
- [ ] No sensitive data was included.
- [ ] The interface remains accessible and responsive.
- [ ] The site was tested locally.

By contributing, you agree that your contribution will be made available under the license applicable to the repository.
