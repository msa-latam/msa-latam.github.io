# Como contribuir

Obrigado pelo interesse em melhorar o Guia Microsoft Student Ambassadors - LATAM.

## Antes de começar

1. Leia o [Código de Conduta](CODE_OF_CONDUCT.md).
2. Pesquise as issues abertas para evitar trabalho duplicado.
3. Para mudanças grandes de estrutura ou conteúdo, abra uma issue antes de implementar.
4. Use fontes oficiais da Microsoft para confirmar requisitos, metas, benefícios e calendários.

## Segurança e privacidade

Não envie:

- credenciais, tokens, Contributor IDs pessoais ou dados de assinatura;
- documentos acadêmicos ou informações pessoais de estudantes;
- capturas ou arquivos internos cuja redistribuição não esteja autorizada;
- conteúdo protegido de terceiros sem permissão ou atribuição adequada.

Relate vulnerabilidades de forma privada ao mantenedor usando o contato disponível no perfil [@tkusal](https://github.com/tkusal). Não publique detalhes sensíveis em uma issue.

## Fluxo de contribuição

1. Faça um fork do repositório.
2. Crie uma branch curta e descritiva, como `docs/atualizar-requisitos` ou `fix/menu-idioma`.
3. Faça as alterações e teste localmente.
4. Escreva commits claros e objetivos.
5. Abra um pull request explicando o problema, a solução e as fontes usadas.

## Conteúdo multilíngue

As traduções ficam em:

- `assets/js/locales/pt-br.js`;
- `assets/js/locales/es.js`;
- `assets/js/locales/en.js`.

Ao modificar uma informação do programa:

1. atualize os três idiomas;
2. preserve os mesmos identificadores de seção;
3. mantenha links e números consistentes entre as versões;
4. use linguagem clara e adequada a leitores da América Latina;
5. indique quando uma informação depende da rodada ou pode mudar.

## Código e interface

- Preserve o funcionamento como site estático, sem dependências obrigatórias.
- Mantenha navegação por teclado, contraste, textos alternativos e foco visível.
- Teste os temas claro e escuro.
- Verifique telas pequenas e grandes.
- Evite adicionar bibliotecas para resolver problemas simples de HTML, CSS ou JavaScript.
- Não inclua rastreamento ou coleta de dados sem discussão prévia.

## Teste local

Na raiz do repositório, execute:

```bash
python -m http.server 8000
```

Abra `http://localhost:8000` e confira:

- carregamento sem erros;
- troca de idioma;
- persistência do tema;
- busca e links internos;
- imagens e links externos;
- leitura em dispositivo móvel.

## Checklist do pull request

- [ ] A alteração tem objetivo claro.
- [ ] Os três idiomas foram revisados quando necessário.
- [ ] As fontes oficiais foram informadas.
- [ ] Nenhum dado sensível foi incluído.
- [ ] A interface continua acessível e responsiva.
- [ ] O site foi testado localmente.

Ao contribuir, você concorda que sua contribuição será disponibilizada sob a licença aplicável ao repositório.
